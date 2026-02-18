"use server";

import { truncateToWords } from "@/lib/utils/truncateToWords";
import { ContactSchema } from "@/lib/validations/contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const RESEND_OWNER_TESTING_RECIPIENT_ERROR =
  "You can only send testing emails to your own email address";

export default async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    ContactSchema.parse({ name, email, message });

    const notifyOwnerResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ahmedn.coder@gmail.com",
      subject: `New Contact Form: ${truncateToWords(message, 4)}..`,
      text: `
        New message received:

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
      replyTo: email,
    });

    const ownerErrorMessage = notifyOwnerResult.error?.message ?? "";
    const isOwnerTestingRecipientError = ownerErrorMessage.includes(
      RESEND_OWNER_TESTING_RECIPIENT_ERROR,
    );

    if (notifyOwnerResult.error && !isOwnerTestingRecipientError) {
      console.error(
        "Unable to send owner notification email.",
        notifyOwnerResult,
      );
      return { message: "emailFailed" };
    }

    if (isOwnerTestingRecipientError) {
      console.log(notifyOwnerResult.error);
      console.warn(
        "Owner notification skipped due to Resend testing-recipient restriction.",
      );
    }

    return { message: "emailSuccess" };
  } catch (err) {
    console.error("Error sending email:", err);
    return { message: "emailCriticalError" };
  }
}

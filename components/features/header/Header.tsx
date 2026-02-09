import { LuHash } from "react-icons/lu";
import { BurgerMenu, Container } from "@/components/ui";

interface HeaderProps {
  open: boolean;
  handleMenuToggle: (arg0?: boolean) => void;
  menuBtnRef: React.RefObject<HTMLButtonElement | null>;
}

const Header = ({ open, handleMenuToggle, menuBtnRef }: HeaderProps) => {
  return (
    <div>
      <p className="w-full text-lg mt-2 mb-[5px] font-palatino text-center">
        بِـسْـمِ الـلَّـهِ الـرَّحْـمَـنِ الـرَّحِـيـمِ
      </p>
      <header>
        <Container>
          <nav className="flex justify-between items-center px-[30px]">
            <div className="font-dmSerif flex items-center text-[28px]">
              <LuHash />
              <h1>Ahmed</h1>
            </div>

            <BurgerMenu
              open={open}
              handleMnuToggle={handleMenuToggle}
              ref={menuBtnRef}
            />
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default Header;

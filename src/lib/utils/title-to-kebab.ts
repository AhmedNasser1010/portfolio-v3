const titleToKebab = (str: string): string => {
  return str.replace(/[\s_]+/g, "-").toLowerCase();
};

export default titleToKebab;

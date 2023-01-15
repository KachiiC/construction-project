export const lowerCaseDash = (str: string) => {
  return str.toLowerCase().split(" ").join("-");
};

export const labelKey = (str: string) => {
  return {
    label: str,
    key: lowerCaseDash(str)
  };
};

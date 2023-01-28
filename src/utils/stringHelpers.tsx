export const paragraphParser = (str: string) => {
  if (!str.includes("\r\n")) {
    return <p>str</p>;
  }

  return str.split("\r\n").map((paragraph) => <p>{paragraph}</p>);
};

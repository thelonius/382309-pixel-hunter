const createDomElement = (templateStr) => {
  const content = document.createElement(`div`);
  content.innerHTML = templateStr;
  return content;
};
export default createDomElement;

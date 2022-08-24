export default (text = "Hello, Lameck!") => {
  const element = document.createElement("h4");

  element.innerHTML = text;

  return element;
};

export default (text = "Hello, Lameck!") => {
  const element = document.createElement("h1");

  element.innerHTML = text;

  return element;
};

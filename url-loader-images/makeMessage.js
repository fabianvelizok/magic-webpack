const makeMessage = (message) => {
  const element = document.createElement('div');
  element.textContent = message;

  return element;
}

export default makeMessage;

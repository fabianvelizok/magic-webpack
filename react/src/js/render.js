const render = (targetElement = null, htmlElement) => {
  let target;

  if (targetElement && typeof targetElement === 'string') {
    target = document.querySelector(targetElement);
  } else if (targetElement && typeof targetElement === 'object') {
    target = targetElement;
  } else {
    target = document.body;
  }

  target.append(htmlElement);
};

export default render;

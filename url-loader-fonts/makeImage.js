const makeImage = (image) => {
  const imageElement = document.createElement('img');
  const imageSize = 50;
  imageElement.setAttribute('src', image);
  imageElement.setAttribute('width', imageSize);
  imageElement.setAttribute('height', imageSize);

  return imageElement;
};

export default makeImage;

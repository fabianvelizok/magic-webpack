import 'babel-polyfill';
import '../css/index.css';

import platziImage from '../images/platzi.png';

import message from './message';
import render from './render';
import makeImage from './makeImage';
import data from './teachers.json';

data.teachers.forEach( (t) => {
  const teacher = document.createElement('li');
  teacher.innerHTML = `
    <a href="http://twitter.com/${t.twitter}"
       target="_blank"
    >${t.name}</a>
  `;
  render('#teachers', teacher);
});

console.log('Babel...');
console.log(message.firstMessage);
console.log('After 3 seconds you will see the delayed message.');
message.delayedMessage();

const img = makeImage(platziImage);
render(img);

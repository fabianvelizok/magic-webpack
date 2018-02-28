import './index.css';
import platziImage from './platzi.png';
import message from './message';
import render from './render';
import makeImage from './makeImage';

console.log('Babel...');
console.log(message.firstMessage);
console.log('After 3 seconds you will see the delayed message.');
message.delayedMessage();

const img = makeImage(platziImage);
render(img);

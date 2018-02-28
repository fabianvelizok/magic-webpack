import './index.css';
import message from './message.js';

console.log('Babel...');
console.log(message.firstMessage);
console.log('After 3 seconds you will see the delayed message.');
message.delayedMessage();

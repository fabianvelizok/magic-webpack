import render from './render';
import makeMessage from './makeMessage';

const waitTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Delayed message');
  }, 3000);
});

const message = {
  firstMessage: 'First message',
  delayedMessage: async () => {
    const message = await waitTime;
    const messageElement = makeMessage(message);
    render(messageElement);
  }
};

export default message;

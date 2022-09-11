import { run } from '../index.js';
import { getRandomInt } from '../functions.js';

const explanation = 'What is the result of the expression?';

const getQA = () => {
  const a = getRandomInt(10);
  const b = getRandomInt(10);
  const operation = getRandomInt(3);
  let question;
  let correct;
  switch (operation) {
    case 0:
      question = `${a} + ${b}`;
      correct = a + b;
      break;
    case 1:
      question = `${a} - ${b}`;
      correct = a - b;
      break;
    default:
      question = `${a} * ${b}`;
      correct = a * b;
      break;
  }
  return [question, correct.toString()];
};

export default () => run(explanation, getQA);

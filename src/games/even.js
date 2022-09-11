import { run } from '../index.js';
import { getRandomInt, isEven } from '../functions.js';

const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQA = () => {
  const question = getRandomInt(100);
  const correct = (isEven(question)) ? 'yes' : 'no';
  return [question, correct];
};

export default () => run(explanation, getQA);

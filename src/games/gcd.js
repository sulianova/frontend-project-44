import { run } from '../index.js';
import { getRandomInt, getGCD } from '../functions.js';

const explanation = 'Find the greatest common divisor of given numbers.';

const getQA = () => {
  const a = getRandomInt(10);
  const b = getRandomInt(10);
  const question = `${a} ${b}`;
  const correct = getGCD(a, b);
  return [question, correct.toString()];
};

export default () => run(explanation, getQA);

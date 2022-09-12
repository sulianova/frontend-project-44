import { run } from '../index.js';
import { getRandomInt, isPrime } from '../functions.js';

const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQA = () => {
  const question = getRandomInt(100);
  const correct = (isPrime(question)) ? 'yes' : 'no';
  return [question, correct];
};

export default () => run(explanation, getQA);

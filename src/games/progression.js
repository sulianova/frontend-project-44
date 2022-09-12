import { run } from '../index.js';
import { getRandomInt, getProgression } from '../functions.js';

const explanation = 'What number is missing in the progression?';

const getQA = () => {
  const length = 10;
  const a = getRandomInt(50);
  const d = getRandomInt(10) + 1;
  const start = getRandomInt(10);
  const missed = getRandomInt(length);
  const progression = getProgression((n) => a + ((n - 1) * d), start, length);

  const correct = progression.splice(missed, 1, ['..']);
  const question = progression.join(' ');

  return [question, correct.toString()];
};

export default () => run(explanation, getQA);

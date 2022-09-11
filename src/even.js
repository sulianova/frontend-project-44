import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
const questionName = 'May I have your name?: ';
const hello = 'Hello, ';
const explanationEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionEven = 'Question: ';
const answerEven = 'Your answer: ';
const yourAnswerCorrect = 'Correct!';
const endOfGame = 'Congratulations, ';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isEven = (number) => (number % 2) === 0;

export default () => {
  console.log(greeting);
  const name = readlineSync.question(questionName);
  console.log(`${hello}${name}`);

  console.log(explanationEven);

  for (let i = 0; i < 3; i += 1) {
    const randomInt = getRandomInt(100);
    const correctAnswer = (isEven(randomInt)) ? 'yes' : 'no';
    console.log(`${questionEven}${randomInt}`);

    const answer = readlineSync.question(answerEven);
    if (answer === correctAnswer) {
      console.log(yourAnswerCorrect);
    } else {
      const yourAnswerIncorrect = `'${answer}' is wrong answer ;(. 'Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
      return console.log(yourAnswerIncorrect);
    }
  }

  return console.log(`${endOfGame}${name}`);
};

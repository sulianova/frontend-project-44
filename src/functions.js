export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const isEven = (number) => (number % 2) === 0;

export const getGCD = (a, b) => {
  if (b === 0) return a;
  if (a < b) return getGCD(b, a);
  return getGCD(b, a % b);
};

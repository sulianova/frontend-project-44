export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const isEven = (number) => (number % 2) === 0;

export const getGCD = (a, b) => {
  if (b === 0) return a;
  if (a < b) return getGCD(b, a);
  return getGCD(b, a % b);
};

export const getProgression = (fn, start, length) => {
  const arrayForProgression = new Array(length).fill(0);
  return arrayForProgression.map((element, index) => fn(start + index));
};

export const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

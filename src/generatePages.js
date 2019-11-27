const MAX_COUNT = 10;


module.exports = ({current, maxPages}) => {
  const array = [];

  const firstNumber = current >= maxPages ? maxPages : current - MAX_COUNT / 2;

  const start = Math.max(firstNumber, 0);
  const end2 = Math.min(maxPages > MAX_COUNT ? MAX_COUNT + start: maxPages, maxPages);

  for(let i = start; i < end2; i++) {
    array.push({ start: i, isCurrent: i === current });
  }

  return array;
}
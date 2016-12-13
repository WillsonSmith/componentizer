export default function compare(objectOne, objectTwo) {
  const objectOneKeys = Object.keys(objectOne);
  const objectTwoKeys = Object.keys(objectTwo);
  const diffs = objectOneKeys.filter((key) => objectTwoKeys.indexOf(key) === -1);
}

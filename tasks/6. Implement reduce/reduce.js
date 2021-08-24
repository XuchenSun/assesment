export function Reduce(array, reducer, initialValue) {
  if (initialValue===0){ return array.reduce(reducer)}// if array has number, return the summary
  else return array.join("");// if array is string, return a long string.
}

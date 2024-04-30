/**
 * hasValuesFromArray - check if all elements in array exist in set
 * @param {Set} set
 * @param {Array} arr
 * @returns {boolean}
 */
export default function hasValuesFromArray(set, arr) {
  return arr.every((value) => set.has(value));
}

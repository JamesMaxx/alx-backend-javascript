/**
 * Returns a string of all the set values that start with a specific string (startString).
 * Only appends the rest of the string after startString
 * @param {Set} set - The set to filter
 * @param {String} startString - The string to match the start of set values
 * @returns {String} The matched values separated by -
 */
export default function cleanSet(set, startString) {
  const output = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      output.push(value.slice(startString.length));
    }
  }
  return output.join('-');
}

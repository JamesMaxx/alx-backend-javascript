/**
 *
 * @param {number} length - The length of the array buffer
 * @param {number} position - The position to insert the value
 * @param {number} value - The number to insert
 * @returns {ArrayBuffer} - A new ArrayBuffer with the value inserted
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  dataView.setInt8(position, value);

  return buffer;
}

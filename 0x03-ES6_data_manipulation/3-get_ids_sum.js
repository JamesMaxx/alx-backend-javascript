/**
 * Get the sum of student ids
 * @param {Array} students List of students
 * @returns {Number} Sum of student ids
 */
export default function getStudentIdsSum(students) {
  return students.reduce((acc, student) => acc + student.id, 0);
}

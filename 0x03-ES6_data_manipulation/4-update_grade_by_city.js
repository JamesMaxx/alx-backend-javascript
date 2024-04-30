const updateGradesByCity = (students, city, newGrades) => (
  students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: newGrades.find((grade) => grade.studentId === student.id)?.grade || 'N/A',
    }))
);

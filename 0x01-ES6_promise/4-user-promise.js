import readlineSync from 'readline-sync';

const studentHolberton = () => {
  const message = 'Welcome to Holberton! What is your name?';
  const name = readlineSync.question(message);
  console.log(`Your name is: ${name}`);
};

const displayGc = (subject) => {
  console.log(`Current subject: ${subject}`);
};

const updateStudentProgress = (student, subject) => {
  student.progress.push(subject);
  return student;
};

const createStudent = (name, email) => {
  const student = { name, email, progress: [] };
  return student;
};

const handleInfo = (getInfo, newInfo) => {
  const { name, email } = newInfo;
  const student = createStudent(name, email);
  const subject = getInfo('What is your course?');
  displayGc(subject);
  const updatedStudent = updateStudentProgress(student, subject);
  studentHolberton();
  return updatedStudent;
};

const getInfo = (message) => {
  const info = readlineSync.question(message);
  return info;
};

const newInfo = {
  name: 'Guillaume',
  email: 'guillaume@gmail.com',
};

handleInfo(getInfo, newInfo);

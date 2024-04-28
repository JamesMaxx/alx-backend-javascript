export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const [dept, employees] of Object.entries(employeesList)) {
    allEmployees[dept] = employees;
  }

  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  return { allEmployees, getNumberOfDepartments };
}

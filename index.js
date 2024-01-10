import { calculate_salary } from './calculate_salary.js';

let worker1 = {
  name: 'Вася',
  role: 'worker',
  age: 23,
};

let engineer1 = {
  name: 'Григорий Палыч',
  role: 'engineer',
  age: 42,
};

let worker2 = {
  name: 'Гриша',
  role: 'worker',
  age: 25,
};

let engineer2 = {
  name: 'Сан Саныч',
  role: 'engineer',
  age: 54,
};

let employees = [worker1, engineer1, worker2];
employees.push(engineer2);

let total_salary = 0;
employees.forEach(function (employee) {
  let salary = calculate_salary(employee.role);
  total_salary = total_salary + salary;
});
console.log(total_salary);

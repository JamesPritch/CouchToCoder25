const numbers = [1, 2, 3, 4, 5]
for (number of numbers) { // Use singular for temporary variable and plural for array
    // console.log(number)
}

const evenNumbers = []
for (number of numbers) {
    if(number % 2 === 0){
        evenNumbers.push(number)
    }
}
// console.log(evenNumbers)

const employees = [
    {name: "John Doe", salary: 60000, department: "marketing"},
    {name: "Alice Cooper", salary: 75000, department: "engineering"},
    {name: "Seamus Finnigan", salary: 85000, department: "logistics"}
]
for(employee of employees){
    // console.log(employee.salary)
}
let totalSalary = 0;
for(employee of employees){
    totalSalary = totalSalary + employee.salary;
}
average = totalSalary/employees.length;
console.log(average);

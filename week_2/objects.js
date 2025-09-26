// Object example
// const nameOfVar {
    // key: value
// }


const employee = {
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Project Manager",
    salary: 60000,
    currentProjects: ["FacebookForCats", "AmazonButBetter", "NotFlix", "InstantGran"],
    address: {
        postCode: "EH6 4UH",
        city: "Edinburgh",
        street: "Newton Crescent",
        number: 15
    }
}

console.log(employee.salary)

// Just values or keys can be accessed like so
console.log(Object.keys(employee))
console.log(Object.values(employee))

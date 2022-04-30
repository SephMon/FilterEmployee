const employees = [{FirstName: "Kevin",LastName: "O'Sullivan",JobTitle: "Programmer",Age: 36,Salary: 46000,Gender:"Male"},
                   {FirstName: "Maria",LastName: "O'Sullivan",JobTitle: "Programmer",Age: 40,Salary: 47000,Gender:"Female"},
                   {FirstName: "Conor",LastName: "O'Sullivan",JobTitle: "Programmer",Age: 34,Salary: 44000,Gender:"Male"},
                   {FirstName: "Jerry",LastName: "Murphy",JobTitle: "Tester",Age: 44,Salary:45000,Gender:"Male"},
                   {FirstName: "Cheryl",LastName: "Jones",JobTitle: "Tester",Age: 40,Salary: 45000,Gender:"Female"},
                   {FirstName:"Joey",LastName: "Murphy",JobTitle: "Tester",Age:33,Salary: 40000,Gender:"Male"},
                   {FirstName:"Janice",LastName:"Jones",JobTitle: "Junior Programmer",Age: 32, Salary: 35000,Gender:"Female"},
                   {FirstName:"Ken",LastName:"Jones",JobTitle: "Senior Programmer",Age:50,Salary:70000,Gender:"Male"},
                   {FirstName:"Karen",LastName:"McGrath",JobTitle: "CEO",Age: 39,Salary: 90000,Gender:"Female"}]


const females = employees.filter(gen => gen.Gender === "Female")
console.log(females)

const males = employees.filter(gen => gen.Gender === "Male")
console.log(males)

const salaries = employees.filter(salary => salary.Salary > 69000)
console.log(salaries)
                  
                
const prog = employees.filter(programmer => programmer.JobTitle == "Programmer")
console.log(prog)

const age = employees.filter(ages => ages.Age < 40)
console.log(age)
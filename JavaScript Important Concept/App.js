// console.log("Hello World!");

/********* Variables *********/
// Variables are create to using ----> var, let, const.
// console.log(x)
// console.log(y) // ----> This is shown an error.
// console.log(z) // ----> This is shown an error.
// var x = 30;
// var x = 70;
// let y = 40;
// y = 60;
// const z = 50;
// z = 50; ----> This is shown an error.
// console.log(x);
// console.log(y);
// console.log(z);

/********* For Loop in JS. *********/

// for (var i = 0; i < 9; i++) {
//     console.log(i)
// }
// console.log(i);

// const price = 100;
// const lastprice = price - 40;
// let lastprice = price - 40;
// lastprice = lastprice - 10;
// console.log(lastprice);
// Using This to Some Mistake
// const name = "Sourabh";
// const age = 12;
// const Greet =  "I am " + name + ". My Age is " + age;
// console.log(Greet);

/********* Template Literal *********/

// const name = "Sourabh";
// const age = 12;
// const salary = 1200;
// const weight = 120;
// const Greet =  `I am ${name}.\nMy Age is: ${age}`;
// const Greet =  `I am ${name}.\n
// My Age is: ${age}.\n
// My Salary is: ${salary}$.\n
// My Weight is: ${weight - 20} kilogram.`;
// console.log(Greet);

/********* Conditionals *********/

// const myAge = 12;
// const Username = "";

// False Value => "", false,undefined, null,0.
// True Value => string, number, boolen

// if (myAge >= 18) {
//     console.log("You are Selected to Company")
// } else {
//     console.log("You are Not Selected to Company")
// }
// if (!Username) {
//     console.log("User Does't Exist!")
// }

/********* Tarnary *********/

// const token = "jhcvury84e8yedujdfb4edx74n4rdy85nrkfjc8t54e";
// let user = false
// if (token) {
//     user = true
// }
// else {
//     user = false
// }

// const u = token ? true : false;
// console.log(u);
// const Age = 40;
// const UserAge = Age  >= 18 ? "You Are a Adult." : "You are a Child.";
// console.log(UserAge);

/********* Short Circuiting Property *********/

// const Name = "Sourabh";
// const EmailVerified = false;
// const UserName = Name ? Name : "User";
// const UserName = Name || "User";
// const UserEmail = ((EmailVerified && Name) || "User");
// console.log(UserName);
// console.log(UserEmail);

/********* Objects *********/

// const Person = {
//     name: "Shivam",
//     age: 20,
//     salary: 2500,
//     details: {
//         status: "Coder",
//         live: "Barabanki"
//     }
// }

// console.log(Person);
// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.salary);
// console.log(Person.details);
// console.log(Person.details.status);
// console.log(Person.details.live);

// console.log(`I am ${Person.name}. My Age is: ${Person.age}. My Salary is: ${Person.salary} Crore. My Status is: ${Person.details.status}. I am Live in ${Person.details.live}`)

// const {name, age, salary, details} = Person;
// const {status, live} = Person.details;
// const {name:userName, age, salary, details:{status, live}} = Person;

// console.log(`I am ${userName}. My Age is: ${age}. My Salary is: ${salary} Crore. My Status is: ${status}. I am Live in ${live}`)

// const name = "Sourabh";
// const age = 12.5;

// /* Key and Value name same so, this --> */ const person = { name, age }

// console.log(`I am ${person.name}. My Age is: ${person.age}.`)

/********* Function *********/

// sum();
// function sum() {
//     const x = 3;
//     const y = 7;
//     console.log(x + y);
// }
// sum();

// sub()
// const sub = function() {
//     const x = 3;
//     const y = 7;
//     console.log(x - y);
// }
// sub();

// const greet = (name, age) => {
//     return `Hello ${name}. Your Age is: ${age}`;
// } 
// console.log(greet("Suresh", 50));

// const greet = (name, age) => `Hello ${name}. Your Age is: ${age}`;
// console.log(greet("Suresh", 50));

// const greet = (person) => {
//     const {name, age} = person;
//     return {result:`Hello ${name}. Your Age is: ${age}`};
// }
// console.log(greet({name:"Suresh", age:50}));

// const greet = ({name, age}) => ({result:`Hello ${name}. Your Age is: ${age}`})
// console.log(greet({name:"Suresh", age:50}));

/********* Primitive vs Reference type *********/

// const obj = {
//     name: "Vandana",
//     status: "Coder"
// }
// const obj2 = {
//     ...obj
// }
// obj.name = "Roli"
// console.log(obj);
// console.log(obj2);

// const arr = [10, 20, 30]
// arr2 = arr;
// console.log(arr)
// console.log(arr2)

// const user = {
//     id: 1,
//     username: "Roli",
//     password: "843u34hbdsf743j73",
//     item: "Chair"
// }

// const cart = {
//     ...user,
//     item: "Wifi"
// }
// console.log(cart);

/********* Arrays *********/
// Index    //  0   1   2   3   4   5   6
// const Marks = [90, 95, 87, 80, 86, 94, 96];
// const Marks2 = [60, 25, 77, 60, 46, 94, 56];

// // console.table(Marks[0])
// // console.table(Marks)

// const MathMarks = [...Marks,...Marks2]
//90,95,87,80,86,94,96&60,25,77,60,46,94,56 
// console.table(MathMarks)

// const ScienceMarks = [3, 5, 4, 6, 7];

// const [a, b, c, d, e] = ScienceMarks;

// console.log(a, b, c, d, e)

// const Fruits = ["Mango", "Apple", "Banana", "PineApple"];
// for (let f = 0; f < Fruits.length; f++) {
//     // const f = Fruits[f];
//     console.log(Fruits[f]);
// }

// Fruits.forEach((f) => {
//     console.log(f)
// });

// const employees = [
//     { name: "Himanshu", salary: 20000 },
//     { name: "Shivam", salary: 25000 },
//     { name: "Roli", salary: 26000 },
//     { name: "Manish", salary: 40000 }
// ]

// const empNew = []

// employees.forEach(e => {
//     e.salary += 2000;
//     // console.log(`The Salary of ${e.name} is: ${e.salary}`);
//     empNew.push(e)
// });
// console.table(empNew)

// const empNew = employeess.map(e => {
//     e.salary += 2000;
//     return e
// });
// console.log(empNew)

// const TODOS = [
//     { id: 1, todo: "Buy a New Laptop." },
//     { id: 2, todo: "Create a React Project." },
//     { id: 3, todo: "Eating Food." },
//     { id: 4, todo: "Buy a New Computer." },
// ];


// const NEWTODOS = TODOS.filter((item)=>(item.todo != "Create a React Project.", item.id > 2));

// console.table(NEWTODOS);

// const SECONDTODO = () => {
//     const NEWTODO = TODOS.filter((item)=>item.todo != "Create a React Project.")
//     console.table(NEWTODO);
// };

// SECONDTODO();

// const USERS = [
//     { id: 1, name: "Shivam", sal:4000 },
//     { id: 2, name: "Gaya", sal:3000 },
//     { id: 3, name: "Sunita", sal:2000 },
//     { id: 4, name: "Vanadana", sal:500 },
//     { id: 5, name: "Manisha", sal:1000 },
//     { id: 6, name: "Himanshu", sal:3500 },
// ];

// console.table(USERS);

// const CURRENTUSERS = USERS.filter((item)=>item.sal != 500)
// console.table(CURRENTUSERS)
// console.log(CURRENTUSERS)

/********* FETCH API *********/
// const GITHUB_USERS = async () => {
//     try {
//         const res = await fetch('github_users.json')
//         const result = await res.json()
//         console.log(result);
//     } catch (err) {
//         console.log(err)
//     }
// }

// fetch('github_users.json').then((res)=>res.json().then((data)=>console.table(data))).catch((err)=>console.log(err))

/*********** Styling in Console ************/

// function PRINT(text) {
//     console.log(`%c${text}`, 'color: red; font-size: 30px; background-color: black');
// }
// PRINT('Hello Sourabh!!')

/********** Classes and Extends ***********/

// class Bike {
//     constructor(name, color, maxspeed) {
//         this.name = name
//         this.color = color
//         this.maxspeed = maxspeed
//     }
//     intro(){
//         PRINT(`${this.name} Bike Color Is: ${this.color} and MaxSpeed Is: ${this.maxspeed}`)
//     }
// }

// class Car extends Bike {
//     constructor(airbag, name, color, maxspeed) {
//         super(name, color, maxspeed)
//         this.airbag = airbag
//     }
//     intro(){
//         PRINT(`${this.name} Car Color Is: ${this.color} , MaxSpeed Is: ${this.maxspeed} and Airbag is: ${this.airbag}`)
//     }
// }

// const bullet = new Bike("Bullet", "blue", 500)
// const avenger = new Bike("Avenger", "green", 300)

// bullet.intro()
// avenger.intro()

// const maruti = new Car(true, "Maruti", "White", 1000)
// const i20 = new Car(false, "i20", "Brown", 900)

// PRINT(maruti.airbag)
// PRINT(i20.airbag)

// maruti.intro()
// i20.intro()
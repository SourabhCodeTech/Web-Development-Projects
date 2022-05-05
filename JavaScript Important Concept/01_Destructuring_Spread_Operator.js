// Spread Operator and Destructuring

// arr = [1, 3, 5, 8, 3];
// function avg(a, b, c) {
//     return a + b + c /3;
// };
// let a1 = avg(...arr);

// if arr में तीन अधिक number ho OR function में तीन number पास किये jaya. to err nahi gaya ga because avg function first three lalaga.

// let a2 = [74, 9,...arr, 839] // Copy arr and a add of second arr so using this method.
// let a3 = [...arr] // Copy of a arr so using this method.
// let arr2 = [6, 2, 6, 36, 6];
// let a4 = [...arr, ...arr2] // Concatinate of two array so using this method.
// console.log(a);

let obj1 = {
    name1: "Sourabh",
    class1: "7th",
    favLang: "Java"
};

/*
// Long Method
    let obj2 = {}
    obj2.name1 = obj1.name1;
    obj2.class1 = obj1.class1;
    obj2.favLang= "Python";
*/
// let obj2 = {...obj1, favLang: "Python"} // Short Method in Spread Operator
// console.log(obj2);

/*
    // Long Method
    let name1 = obj1.name1;
    let class1 = obj1.class1;
    let favLang= obj1.favLang;
*/
let { name1, class1, favLang } = obj1; // Short Method in Destructuring

console.log(name1, class1, favLang);
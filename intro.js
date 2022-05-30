function addNums(a,b) {
    return a + b;
    
}
let summ = addNums(15,3);
console.log(summ);

let num1 = 10;
let num2 =3;
console.log(num1++);
console.log(++num1); 
console.log(--num2);
console.log(num1--);
let equality = (num1 != num2);
console.log(equality);

// Friday: data types
// 1. Undefined datatypes ==> when declared bu th value is not yet assigned
// 2. 



let myData = {name:'osman', age :'72'};
;
let bool = "3" *2;

function myLoop()
{ //define a function
for(i = 1; i<=10; i+=2){
    console.log(i);
}
}
myLoop(); //invoke /call a function

function add(a,b){ //a and b are paremeters
    let c = a % b;
    console.log(c);
}
// add("30","20");

function mult(a,b){
    let c = a * b;
    return c;
}
// mult(30, 20);
// console.log(mult(3,30));

// function person(name, age){ // function parameter are age, and name;
//    let newAge = age - 10;
//    console.log("Dear \n" + name + "\t");
//    console.log("Your new age is \t " + newAge);
//    return newAge;
// }
// person("Xavi",48);
// console.log(person("ronald", 25));


function Employee(name,position, salary){
    let statement ="Dear " + name + ",\n" + "you are the " + position + " earning " + salary;
    console.log(statement); 
    return statement;
}
// Employee("Ozzy", "Data Engineer", "$36000");

let ageCalculator = (yoName,birthYear)=>{
    const thisYear =  new Date().getFullYear();
    console.log(thisYear);
  let yoAge = thisYear - birthYear;
  console.log(`Hello my name is ${yoName} 
  and I was born in ${birthYear} 
   So i am ${thisYear - birthYear} years old`);
    return yoAge;
}
ageCalculator("Xavier", 1998);


let Car = (carName, color,model,make)
    this.carName,
    this.color,
    this.model,
    this.make

// 1. Write a program in JS that finds simple interest. Formula: ` (p * t * r) / 100`.
// function simpleInterest(p,t,r){
//     return (p*t*r)/100;
// }
// const simpleInt=simpleInterest(400,4,12);
// console.log(simpleInt);


// 2. Write a program to print the square of a number using user input. (use Prompt)

// let number=prompt("Enter the number you want to square");
// sqr(number);
// function sqr(num){
//     console.log(num*num+" is the square number of "+num);
// }


// 3. Write a program to print the full name from the first name and last name using user input.
// let firstName="raman"//prompt("enter the first name");
// let lastName="chaudhary"//prompt("enter the Last name");
// // let fullname=firstName+" "+lastName;
// // console.log(fullname)
// console.log(firstName.concat(lastName))


// 4. Write a program to find the quotient and remainder of two integers.

// function qr(num1,num2){
// let rem=num2%num1;
// let quotient=num2/num1;
//  console.log("the quotient of two integer number is :"+quotient)  ;
//  console.log("the quotient of two integer number is :"+rem)  ;

// }
// qr(4,19);
 

// 5. Write a program to swap two numbers.
// function swap(num1,num2){
 
//   let  a=num1;
//   let  b=num2;
//     console.log("before swapping num1:"+a+"\tnum2:"+b);
//    let c=b;
//    b=a;
//    a=c;
//    console.log("after swapping num1:"+a+"\tnum2:"+b);
// }
// swap(4,6)
// 6. Write a program in JS to remove all whitespaces from a string.
// let str="      my name is raman i am a full stack developer  "

// let ws=str.replace(/\s+/g,'');
// console.log(ws)

// 7. Write a JS program to convert a string to an integer.
// let str="123";
// let a=Number(str)
// console.log(typeof a)
// console.log( typeof str.split(''))



// 8. Suppose you often go to restaurants with friends and have to split the bill. Write a program to
// calculate the split amount of the bill. Formula: `(total bill amount) / number of people`.
// let totalamont=1000;
// let numberofpeople=5;
// let bill=totalamont/numberofpeople;
// console.log("amount split of the bill is"+bill);


// 9. Suppose your distance to the office from home is 25 km, and you travel at 40 km per hour. Write a
// program to calculate the time taken to reach the office in minutes. Formula: `(distance) / (speed)`.
// let distance=25;//km
// let speed=40;//km per hour
// // s=d/t;
// let time=distance/speed;
// console.log(time);


// 10. Write a JS program to check whether a character is a vowel or consonant.
// let vowel=['a','e','i','o','u'];

// let str="a my nadoijjsfoa"

//     if(vowel.includes(str)){
//         console.log('it is vowel')
//     }
//     else if (str >= 'a' && str <= 'z') {
//         console.log(str + " is a consonant.");
//     } 
//     else{
//         console.log("it is consonenet")
//     }

// 11. Write a JS program to check whether a number is positive, negative, or zero.
// let num=0;
// function check(num){
  
//     if(num>0){
//         console.log("it is number is positive")
//     }
//     if(num<0){
//         console.log("it is number is negative")
//     }
//     if(num===0){
//         console.log("it is number is zero")
//     }
   
// }
// check(-1)
// 12. Write a JS program to print your name 100 times.
// let name="raman";
// for(let i=0; i<100;i++){
//     console.log(name);
// }

// 13. Write a JS program to calculate the sum of natural numbers.
// function calculateSum(num){
//     let sum=0;
//     for(let i=1;i<=num;i++){
//         sum+=i;
//     }
//     return sum;
// }
// const sumof=calculateSum(5);
// console.log(sumof);


// 14. Write a JS program to generate the multiplication table of 5.
// function multi(num){
//     for(let i=1;i<=10;i++){
//         console.log(`${num}X${i}=${num*i}`)
//     }
// }
// multi(13);
// 15. Write a JS program to generate multiplication tables from 1 to 9.
// function multi(){
//     for(let j=1;j<=9;j++){
//         for(let i=1;i<=10;i++){
//             console.log(`${j}X${i}=${j*i}`)
//         }
//     }
// }
//     multi();

// 16. Write a JS program to create a simple calculator that performs addition, subtraction, multiplication,/ and division.
// function cal(num1,num2 ,func){
//     // let fun='add'
// switch(func){
//     case 'add':
//         console.log(`additon ${num1+num2}`);

//         break;
//     case 'sub':
//         console.log(`substraction ${num1-num2}`);
//         break;
//     case 'mul':
//         console.log(`multiplication ${num1*num2}`);
//         break;
//    case 'div':
//         console.log(`division ${num1/num2}`);
//         break;
// }
// }
// cal(30,20,'sub')

// 17. Write a JS program to print numbers from 1 to 100, but skip printing 41.
// for(let i=1; i<=100;i++){
//     if(i===41){
//         continue;
//      }
//     console.log(i);
      
        
//     }
// 18. Write a program in JS to print your name using a function.
// function meroname(name){
//     console.log("my name is "+name)
// }
// meroname("raman")
// 19. Write a program in JS to print even numbers between intervals using a function.
// function evenNum(start,end){
// for(let i=start;i<=end;i++){
//     if(i%2===0){
//         console.log("it is a even number"+i);
    // }
//    else{
//     console.log("it is odd number "+i);
//    }
// }
    
// }
// evenNum(20,30);
// 20. Create a function called `greet` that takes a name as an argument and prints a greeting message. For
// example, `greet("John")` should print “Hello, John”.
// function greet(name){
//     console.log("hello my name is"+name);

// }
// greet("raman");
// // 21. Write a program in JS that generates a random password.
// function pass(a,b,c){
//   for(let i=0;i<=50;i++){
//     for(let j=0;j<=50;j++){
//         console.log(j-1+a+c+"rsadjas"+b+i+30);
//     }

//   }


// }
// pass("rare","dafdf","dlkas");
// 22. Write a program in JS that finds the area of a circle using a function. Formula: `pi * r * r`.
// function areaOfCricle(radi){
//     let pi=3.143
//     console.log("the area of circle is "+ pi*radi*radi)
// }
// areaOfCricle(6)
// 23. Write a program in JS to reverse a string using a function.
// let str="the raman chaudary"
// let result='';
// function rev(str){
  
//     for(let i=str.length-1;i>=0;i--){
//         result+=str[i];
       
//     }
//   return result;
// }
// console.log(rev(str))


// 24. Write a program in JS to calculate the power of a number. For example, `5^3 = 125`.
// function power(num,pw){
//     let pow=num**pw;
//     console.log(`the power of ${num} is ${pow}`);
// }
// power(5,3);

// 25. Write a function in JS named `add` that takes two numbers as arguments and returns their sum.
// function add(num1,num2){
//     let sum=0;
//     return sum=num1+num2;

// }

// console.log(add(10,20));


// 26. Write a function in JS called `maxNumber` that takes three numbers as arguments and returns the
//largest number.
// function maxNumber(num1,num2,num3){
//     if(num1>num2&&num1>num3){
//         console.log("the number "+num1+" is greater than num2 and num3")
//     }
//     if(num2>num1&&num2>num3){
//         console.log("the number "+num2+" is greater than num1 and num3")
//     }

//     else{
//         console.log("the number "+num3+" is greater than num1 and num2")
//     }

// }
// maxNumber(4,1,9)

// 27. Write a function in JS called `isEven` that takes a number as an argument and returns `true` if the
// number is even and `false` otherwise.
// function isEven(num){
// if(num%2===0){
//     return true;
// }
// else{
//     return false;
// }
// }
// console.log(isEven(4))
//
// 28. Write a function in JS called `createUser` with parameters `name`, `age`, and `isActive`, where
// `isActive` has a default value of `true`.
// function createUser(name,age,isActive){
//     this.name=name;
//     this.age=age;
//     this.isActive=isActive;
//     console.log(` UserName=${this.name},\nAge=${this.age},\nActiveStatus=${this.isActive},`)


// }
// createUser("raman",30,true)

// 29. Write a function in JS called `calculateArea` that calculates the area of a rectangle. It should take
// `length` and `width` as arguments, with default values of 1 for both. Formula: `length * width`.
// function calculateArea(length,width){
// return area=length*width;

// }
// console.log(calculateArea(1,1));
// 30. Write a function that takes a list of objects and returns a list of a specific property from each object.
// let obj=[
//     {name:"raman",
//     address:"tikapur",
//     phone:"980202033"
// },
// {name:"kaman",
//     address:"tikapur",
//     phone:"9802022433"
// },
// ];

// function list(obj,property){
//    return obj.map(item => item[property]);
// }

// console.log(list(obj,"name"));
// 31. Write a function that takes an object and logs all its own properties.
// let obj=
//     {name:"raman",
//     address:"tikapur",
//     phone:"980202033"
// }

// function list(obj){
//     const ownProperties = Object.keys(obj)
//    return ownProperties.map(item => obj[item]);
// }

// console.log(list(obj));

// 32. Write a function that takes a string and returns the character that appears the most frequently.
// function mostFrequentChar(str) {
//     // Create an object to store the frequency of each character
//     const frequency = {};

//     // Iterate through the string and count the frequency of each character
//     for (const char of str) {
//         // Skip spaces or other non-alphanumeric characters if needed
//         if (char !== ' ') {
//             frequency[char] = (frequency[char] || 0) + 1;
//         }
//     }

//     // Find the character with the highest frequency
//     let maxChar = '';
//     let maxCount = 0;
    
//     for (const char in frequency) {
//         if (frequency[char] > maxCount) {
//             maxChar = char;
//             maxCount = frequency[char];
//         }
//     }

//     return maxChar;
// }

// Example usage
// console.log(mostFrequentChar("hello world")); // Output: "l"
// console.log(mostFrequentChar("aabbbc")); // Output: "b"
// console.log(mostFrequentChar("")); // Output: ""


// 33. Create a function that takes an array of numbers and returns the mode(s) of the array.


// function mode(arr){
//    let frequency={}

//   let maxfrequency=0;
//   arr.forEach(num => {
   
//     frequency[num]=(frequency[num]||0)+1;
  
//     if(frequency[num]>maxfrequency){
//         maxfrequency=frequency[num]
   

//     }
    
//   });
//   let modes=[]
//   for (const num in frequency) {
//  console.log(num)
//     if (frequency[num]==maxfrequency) {
//         modes.push(Number(num));
        
//     }
//   }
// return modes;


// }
// console.log(mode([1,2,3,4,4,4,4,4,5,5,5,5,5,40,20]));
// 34. Write a function that takes a matrix (2D array) and returns its transpose.
// 35. Create a function that finds the median of an array of numbers.
// 36. Create a function that takes a string and returns a new string with the letters in alphabetical order.
// 37. Write a function that takes an array of numbers and returns an array with each element incremented
// by one.
// 38. Create a function that takes a string and returns the first non-repeating character.
// 39. Write a function that takes an array of numbers and returns an array with all the prime numbers.
// 40. Create a function that takes an array of strings and returns an array with the strings sorted by length.
// 41. Write a function that takes an array and a callback function, and applies the callback to each element
// of the array.
// 42. Create a function that sorts an array of numbers in ascending order.

function arras(arr){

    return arr.sort((a,b)=>b-a);
   
     
    }
  

    console.log(arras([4,2,5,6,1,9]));

// 43. Write a function that takes an array and a value, and returns the index of the value in the array.
// 44. Create a class `Person` with the following properties:
//  - `firstName`
//  - `lastName`
//  - `age`
// Include a method to return the person's full name and a method to check if the person is an adult (age
// >= 18).
// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;

//     }
//     persons(){
//         console.log(`the Person full name is ${this.firstName} ${this.lastName}`)
//         if(this.age>=18){
//             console.log(` is adult which age is ${this.age}`);

//         }
//         else{
//             console.log(`is child which age is ${this.age}`);
//         }
//     }


    
// }
// let obj=new Person("kamal","chaudhary",12);
// obj.persons();
// let obj1=new Person("raman","chaudhary",18);
// obj1.persons();
// let obj2=new Person("roshan","chaudhary",24);
// obj2.persons();


// 
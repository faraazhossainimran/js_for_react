
// template string 
const student = {
    name: 'imran',
    age: 24,
    institute: 'Gov. Bangle College'
}
const studentDetails = `Name ${student.name}, age is ${student.age}, and institute is ${student.institute}`
console.log(studentDetails);
// arrow function
const fiftyFive = () => 55;
console.log(fiftyFive());
const addSixtyfive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (sum1, sum2) => {
    const sum = sum1 + sum2;
    return sum;
}
console.log(doMath(2,3));

// spread operator 
const numbers = [44, 55, 66, 77, 59];
// example of spread operator 
const newNumbers = [...numbers];
numbers.push(2);
numbers.push(2);
numbers.push(2000);
console.log(numbers);


console.log(newNumbers);
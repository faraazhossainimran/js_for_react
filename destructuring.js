const numbers = [44,55,66,77];
const [a,b,c,d] = numbers;
console.log(a,b,c,d);

// object destructuring
// const {name, age} = {name: 'alu', age: 33}

const employee = {
    name: 'imran',
    age: 24,
    machine: 'mac', 
    language: ['html', 'css', 'js'], 
    specification: {
        height: 66,
        weight: 67,
        address: 'Nadda',
        drink: 'water', 
        watch: {
            color: 'black',
            price: 500, 
            brand: 'garmin'
        }
    }
}

const {machine, name} = employee;
const {weight, address} = employee.specification;
const {brand} = employee.specification.watch
const [language] = employee.language;
console.log(weight);
console.log(brand);
console.log(language);
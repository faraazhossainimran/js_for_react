// 1. JSON => stringify, parse
const student = {
    name: 'imran',
    age: 24,
    institute: 'Gov. Bangle College'
}
// convert from object to json 
const studentJSON = JSON.stringify(student)
console.log(studentJSON);
// convert from json to object 
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
// const url = 'url'
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

// keys and values
const keys = Object.keys(student);
const values = Object.values(student);

// for of
// __________________

// for of on array like object 
const numbers = [23, 54, 67, 22];
// loop on an object using for in
const obj = {name: 'imran', age: 24}

// add or remove from an array
const products = [
    {
      name: 'laptop',
      price: 32000,
      brand: 'lenovo',
      color: 'silver'
    },
    {
      name: 'phone',
      price: 32000,
      brand: 'lenovo',
      color: 'mac'
    }
  ];
  const newProduct = {name: 'webcame', price: 500, brand: 'Lal'}

//   copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);


// create a new array without one specific item

// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone')
console.log(remaining);
console.log(remaining);
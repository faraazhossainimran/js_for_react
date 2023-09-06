const person = {
    name: 'Lal Nil', 
    profession: 'police', 
    age: 44,
    address: 'Bashundhara', 
    'son-name': 'abid'
}

// dot notation
const prof1 = person.profession;

// bracket notation
const prof2 = person['profession'];
const son = person['son-name'];
console.log(son);
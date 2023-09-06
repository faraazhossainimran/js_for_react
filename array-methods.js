// array of objects 
const products = [
    {
      name: 'laptop',
      price: 32000,
      brand: 'lenovo',
      color: 'silver'
    },
    {
      name: 'laptop',
      price: 32000,
      brand: 'lenovo',
      color: 'mac'
    },
    {
      name: 'laptop',
      price: 32000,
      brand: 'hp',
      color: 'silver'
    },
    {
      name: 'laptop',
      price: 32000,
      brand: 'asus',
      color: 'silver'
    },
    {
      name: 'mobile',
      price: 32000,
      brand: 'lenovo',
      color: 'silver'
    },
    {
      name: 'desktop',
      price: 45000,
      brand: 'Dell',
      color: 'black'
    },
    {
      name: 'tablet',
      price: 25000,
      brand: 'Samsung',
      color: 'white'
    },
    {
      name: 'smartphone',
      price: 28000,
      brand: 'Apple',
      color: 'rose gold'
    },
    {
      name: 'smartwatch',
      price: 12000,
      brand: 'Fitbit',
      color: 'blue'
    },
    {
      name: 'headphones',
      price: 1500,
      brand: 'Sony',
      color: 'black'
    },
    {
      name: 'camera',
      price: 35000,
      brand: 'Canon',
      color: 'silver'
    },
    {
      name: 'printer',
      price: 6000,
      brand: 'Epson',
      color: 'white'
    },
    {
      name: 'keyboard',
      price: 1000,
      brand: 'Logitech',
      color: 'black'
    },
    {
      name: 'mouse',
      price: 800,
      brand: 'HP',
      color: 'silver'
    },
    {
      name: 'external hard drive',
      price: 4000,
      brand: 'Seagate',
      color: 'black'
    },
    {
      name: 'tablet',
      price: 28000,
      brand: 'Microsoft',
      color: 'silver'
    },
    {
      name: 'smartphone',
      price: 32000,
      brand: 'OnePlus',
      color: 'black'
    },
    {
      name: 'gaming laptop',
      price: 55000,
      brand: 'MSI',
      color: 'red'
    },
    {
      name: 'e-reader',
      price: 8000,
      brand: 'Amazon',
      color: 'white'
    },
    {
      name: 'smart speaker',
      price: 3000,
      brand: 'Google',
      color: 'gray'
    }
  ];
  
  console.log(products);
// 1. map methods
  const brands = products.map((product => {
    const div = `name: ${product.name}, brand: ${product.brand}, price: ${product.price}, color: ${product.color}`;
    return div;
  }))

  console.log(brands);

// 2. foreach method 
products.forEach(product => {
    console.log(product);
})

// 3. filter
const cheap = products.filter(product => product.price > 12000);
console.log(cheap);
const spefificName = products.filter(product => product.color.includes('black'));
console.log(spefificName);

// 4. find
const special = products.find(product => product.name.includes('n'))
console.log(special);
const newNames = [
    'Pepsi',      'Colgate',
    'Snickers',   'Nescafe',
    'Dairy Milk', 'Maggi',  
    'Snickers',   'Nescafe',
    'Dairy Milk', 'Pepsi',  
    'Colgate',    'Maggi'   
  ];
  
  const products = [
    {
      name: 'Pepsi',
      price: 25.99,
      discount: '2%',
      supplier: 'Supplier A',  
      delivery: 'Not Available'
    },
    {
      name: 'Colgate',
      price: 39.95,
      discount: '5%',
      supplier: 'Supplier B',  
      delivery: 'Available'    
    },
    {
      name: 'Snickers',        
      price: 12.49,
      discount: '5%',
      supplier: 'Supplier C',  
      delivery: 'Available'    
    },
    {
      name: 'Nescafe',
      price: 8.99,
      discount: '2%',
      supplier: 'Supplier D',  
      delivery: 'Not Available'
    },
    {
      name: 'Dairy Milk',      
      price: 59,
      discount: 'None',        
      supplier: 'Supplier E',  
      delivery: 'Available'    
    },
    {
      name: 'Maggi',
      price: 18.75,
      discount: '3%',
      supplier: 'Supplier A',
      delivery: 'Available'
    },
    {
      name: 'Snickers',
      price: 7.89,
      discount: '2%',
      supplier: 'Supplier B',
      delivery: 'Not Available'
    },
    {
      name: 'Nescafe',
      price: 29.99,
      discount: '4%',
      supplier: 'Supplier C',
      delivery: 'Available'
    },
    {
      name: 'Dairy Milk',
      price: 14.5,
      discount: '5%',
      supplier: 'Supplier D',
      delivery: 'Not Available'
    },
    {
      name: 'Pepsi',
      price: 49.95,
      discount: '2%',
      supplier: 'Supplier E',
      delivery: 'Available'
    }
  ]
  
  for (let i = 0; i < products.length; i++) {
    products[i].name = newNames[i];
  }
  
  console.log(products);
  
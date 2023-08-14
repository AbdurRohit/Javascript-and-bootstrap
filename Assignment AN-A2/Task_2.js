//Task 2

const productMaster = [{id:'A441', name:'Pepsi',category:'Soft	Drink',	price:15,	quantity:2},
{id:'B234', name:'Coke',	category:'Soft	Drink',	price:10,	quantity:8},
{id:'A617', name:'Mirinda',	category:'Soft	Drink',	price:20,	quantity:20},
{id:'B003', name:'Sprite',	category:'Soft	Drink',	price:16,	quantity:5},
{id:'B225', name:'Minute	Maid',	category:'Soft	Drink',	price:25,	quantity:12},
{id:'A742', name:'5Star',	category:'Chocloate',	price:10,	quantity:3},
{id:'B388', name:'Appy',	category:'Soft	Drink',	price:35,	quantity:9},
{id:'A899', name:'Gems',	category:'Chocloate',	price:12,	quantity:11},
{id:'B635', name:'KitKat',	category:'Chocloate',	price:15,	quantity:7},
{id:'B408', name:'Perk',	category:'Chocloate',	price:8,	quantity:15},
{id:'A354', name:'Dairy	Milk',	category:'Chocloate',	price:30,	quantity:4}]

// //2.g
let pricedec = productMaster.sort(function(obj1,obj2){
  let price1 = obj1.price
  let price2 = obj2.price

  if(price1 > price2){
    return -1
  }
  else if(price1 < price2)
  {
    return 1
  }
  else{
    return 0
  }
  
})
console.log(pricedec)

//2.h

let idAsc = productMaster.sort(function(obj1,obj2){
  return -1*obj1.id.localeCompare(obj2.id)
})

console.log(idAsc)
//2.i

let quantityInc = productMaster.sort(function(obj1,obj2){
  let quant1 = obj1.quantity
  let quant2 = obj2.quantity
  if(quant1 > quant2){
    return 1
  }
  else if(quant1 < quant2)
  {
    return -1
  }
  else{
    return 0
  }
})

console.log(quantityInc)

//2.j
let task1 = productMaster.sort(function (obj1, obj2){
    return obj1.name.localeCompare(obj2.name)
})
let task2 = task1.sort(function(obj1, obj2){
    return obj1.category.localeCompare(obj2.category)
})

console.log(task2)
//comparing the name 1st then the catagory

//2.k
let softDrink = productMaster.filter(function(obj){
  return obj.category == 'Soft	Drink'
})
console.log(softDrink)

//2.l
let priceAndqu = productMaster.filter(function(obj){
  return obj.price > 16 && obj.quantity > 5
})
console.log(priceAndqu)

//2.m
let startsWithA = productMaster.filter(function(obj){
  return obj.id[0] == 'A'
})
console.log(startsWithA)

//2.n

let calValue =  productMaster.filter(function(obj){
    let value = obj.price*obj.quantity
    return value < 150
  })
  console.log(calValue)

// // 2.o

let highestProductArr = productMaster.sort(function(obj1,obj2){
  let price1 = obj1.price
  let price2 = obj2.price

  if(price1 > price2){
    return -1
  }
  else if(price1 < price2)
  {
    return 1
  }
  else{
    return 0
  }
})

console.log(highestProductArr[0].name)

// // 2.p
const productWithMilkInName = productMaster.find(containsMilk);
if (productWithMilkInName) {
  console.log(productWithMilkInName.name);
}
function containsMilk(product) {
  return product.name.includes('Milk');
}

//2.q

const productDescriptions = productMaster.map(function (product) {
  return product.name + ' belongs to the category ' + product.category + '. Its id is ' + product.id + ' and price is ' + product.price + '.';
});
console.log(productDescriptions);

// // 2.r
const updatedProductMaster = productMaster.map(function(product) {
  return {
    ...product, 
    type: 'Food'
  };
});
console.log(updatedProductMaster);

// // 2.s

const updatedMaster = productMaster.map(function (product) {
  const updatedProduct = { ...product };
  if (product.category === 'Soft Drink') {
    updatedProduct.price += 3; // Increase price by 3 for Soft Drinks
  } else if (product.category === 'Chocloate') {
    updatedProduct.price -= 2; // Decrease price by 2 for Chocolates
  }
  return updatedProduct;
});

console.log(updatedMaster);

// // 2.t
const purchaseDetails = { id: 'B635', purchaseQuantity: 6 };

function updateProductQuantity(purchaseDetails) {
  for (let i = 0; i < productMaster.length; i++) {
    if (productMaster[i].id == purchaseDetails.id) {
      productMaster[i].quantity += purchaseDetails.purchaseQuantity;
      break;
    }
  }
}
updateProductQuantity(purchaseDetails);

console.log(productMaster);

// // 2.u

function getCustomerOrderDetails(customerOrder) {
  
  function findProductById(productId) {
    return productMaster.find(function(product) {
      return product.id == productId;
    });
  }

  return customerOrder.map(function(order) {
    const product = findProductById(order.id);
    return {
      id: order.id,
      orderQuantity: order.orderQuantity,
      name: product ? product.name : 'Product not found',
      price: product ? product.price : 0
    };
  });
}

const customerOrder = [
  {id: 'A441', orderQuantity: 2},
  {id: 'A354', orderQuantity: 5},
  {id: 'B003', orderQuantity: 9}
];

const newOrderArray = getCustomerOrderDetails(customerOrder);
console.log(newOrderArray);
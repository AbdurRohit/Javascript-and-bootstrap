// //1.a
// const txt1 = "i enjoy coding and writing code is a lot of fun";
// const wordArray = txt1.split(" ");
// console.log(wordArray);

// // //1.b
// const upperCaseArray = wordArray.map(toUpperCase);

// function toUpperCase(word) {
//     return word.toUpperCase();
//   }
// console.log(upperCaseArray);

// //1.c
// const firstCharacters = wordArray.reduce(getFirstCharacter, "");
// function getFirstCharacter(result, word) {
//     return result + word[0];
//   }
// console.log(firstCharacters);

// //1.d
// const filteredArray = wordArray.filter(containsAorE);

// function containsAorE(word) {
//     for (let i = 0; i < word.length; i++) {
//       const char = word[i];
//       if (char === "a" || char === "e") {
//         return true;
//       }
//     }
//     return false;
//   }
// console.log(filteredArray);

// //1.e
  
// const countAE = wordArray.reduce(countWordsWithAorE, 0);

// function countWordsWithAorE(count, word) {
//     for (let i = 0; i < word.length; i++) {
//       const char = word[i];
//       if (char === "a" || char === "e") {
//         return count + 1;
//       }
//     }
//     return count;
//   }
// console.log(countAE);

// //1.f

// const jsonObjectArray = wordArray.map(createJSONObject);

// function createJSONObject(word) {
//     let vowelCount = 0;
//     for (let i = 0; i < word.length; i++) {
//       const char = word[i].toLowerCase();
//       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         vowelCount++;
//       }
//     }
//     return {
//       myWord: word,
//       wordLength: word.length,
//       vowelCount: vowelCount
//     };
//   }
// console.log(jsonObjectArray);


// //Task 2

// const productMaster = [{id:'A441', name:'Pepsi',category:'Soft	Drink',	price:15,	quantity:2},
// {id:'B234', name:'Coke',	category:'Soft	Drink',	price:10,	quantity:8},
// {id:'A617', name:'Mirinda',	category:'Soft	Drink',	price:20,	quantity:20},
// {id:'B003', name:'Sprite',	category:'Soft	Drink',	price:16,	quantity:5},
// {id:'B225', name:'Minute	Maid',	category:'Soft	Drink',	price:25,	quantity:12},
// {id:'A742', name:'5Star',	category:'Chocloate',	price:10,	quantity:3},
// {id:'B388', name:'Appy',	category:'Soft	Drink',	price:35,	quantity:9},
// {id:'A899', name:'Gems',	category:'Chocloate',	price:12,	quantity:11},
// {id:'B635', name:'KitKat',	category:'Chocloate',	price:15,	quantity:7},
// {id:'B408', name:'Perk',	category:'Chocloate',	price:8,	quantity:15},
// {id:'A354', name:'Dairy	Milk',	category:'Chocloate',	price:30,	quantity:4}]

// // //2.g
// let pricedec = productMaster.sort(function(obj1,obj2){
//   let price1 = obj1.price
//   let price2 = obj2.price

//   if(price1 > price2){
//     return -1
//   }
//   else if(price1 < price2)
//   {
//     return 1
//   }
//   else{
//     return 0
//   }
  
// })
// console.log(pricedec)

// //2.h

// let idAsc = productMaster.sort(function(obj1,obj2){
//   return -1*obj1.id.localeCompare(obj2.id)
// })

// console.log(idAsc)
// //2.i

// let quantityInc = productMaster.sort(function(obj1,obj2){
//   let quant1 = obj1.quantity
//   let quant2 = obj2.quantity
//   if(quant1 > quant2){
//     return 1
//   }
//   else if(quant1 < quant2)
//   {
//     return -1
//   }
//   else{
//     return 0
//   }
// })

// console.log(quantityInc)

// //2.j
// let task1 = productMaster.sort(function (obj1, obj2){
//     return obj1.name.localeCompare(obj2.name)
// })
// let task2 = task1.sort(function(obj1, obj2){
//     return obj1.category.localeCompare(obj2.category)
// })

// console.log(task2)
// //comparing the name 1st then the catagory

// //2.k
// let softDrink = productMaster.filter(function(obj){
//   return obj.category == 'Soft	Drink'
// })
// console.log(softDrink)

// //2.l
// let priceAndqu = productMaster.filter(function(obj){
//   return obj.price > 16 && obj.quantity > 5
// })
// console.log(priceAndqu)

// //2.m
// let startsWithA = productMaster.filter(function(obj){
//   return obj.id[0] == 'A'
// })
// console.log(startsWithA)

// //2.n

// let calValue =  productMaster.filter(function(obj){
//     let value = obj.price*obj.quantity
//     return value < 150
//   })
//   console.log(calValue)

// // // 2.o

// let highestProductArr = productMaster.sort(function(obj1,obj2){
//   let price1 = obj1.price
//   let price2 = obj2.price

//   if(price1 > price2){
//     return -1
//   }
//   else if(price1 < price2)
//   {
//     return 1
//   }
//   else{
//     return 0
//   }
// })

// console.log(highestProductArr[0].name)

// // // 2.p
// const productWithMilkInName = productMaster.find(containsMilk);
// if (productWithMilkInName) {
//   console.log(productWithMilkInName.name);
// }
// function containsMilk(product) {
//   return product.name.includes('Milk');
// }

// //2.q

// const productDescriptions = productMaster.map(function (product) {
//   return product.name + ' belongs to the category ' + product.category + '. Its id is ' + product.id + ' and price is ' + product.price + '.';
// });
// console.log(productDescriptions);

// // // 2.r
// const updatedProductMaster = productMaster.map(function(product) {
//   return {
//     ...product, 
//     type: 'Food'
//   };
// });
// console.log(updatedProductMaster);

// // // 2.s

// const updatedMaster = productMaster.map(function (product) {
//   const updatedProduct = { ...product };
//   if (product.category === 'Soft Drink') {
//     updatedProduct.price += 3; // Increase price by 3 for Soft Drinks
//   } else if (product.category === 'Chocloate') {
//     updatedProduct.price -= 2; // Decrease price by 2 for Chocolates
//   }
//   return updatedProduct;
// });

// console.log(updatedMaster);

// // // 2.t
// const purchaseDetails = { id: 'B635', purchaseQuantity: 6 };

// function updateProductQuantity(purchaseDetails) {
//   for (let i = 0; i < productMaster.length; i++) {
//     if (productMaster[i].id == purchaseDetails.id) {
//       productMaster[i].quantity += purchaseDetails.purchaseQuantity;
//       break;
//     }
//   }
// }
// updateProductQuantity(purchaseDetails);

// console.log(productMaster);

// // // 2.u

// function getCustomerOrderDetails(customerOrder) {
  
//   function findProductById(productId) {
//     return productMaster.find(function(product) {
//       return product.id == productId;
//     });
//   }

//   return customerOrder.map(function(order) {
//     const product = findProductById(order.id);
//     return {
//       id: order.id,
//       orderQuantity: order.orderQuantity,
//       name: product ? product.name : 'Product not found',
//       price: product ? product.price : 0
//     };
//   });
// }

// const customerOrder = [
//   {id: 'A441', orderQuantity: 2},
//   {id: 'A354', orderQuantity: 5},
//   {id: 'B003', orderQuantity: 9}
// ];

// const newOrderArray = getCustomerOrderDetails(customerOrder);
// console.log(newOrderArray);

// //t3

// salesMaster = [{id:'A441', sales:[10,12,13,10,16,22,30]	},
// {id:'B234', sales:[2,4,3,4,2,6,8,10]	},
// {id:'A617', sales:[5,5,5,5,5]	},
// {id:'C229', sales:[9,7,6,8,8,10,9,3,4,5,6]},
// {id:'D412', sales:[25,25,23,21]	},
// {id:'A054', sales:[2,2,3,1,5,6,7,11,2]	},
// {id:'B955', sales:[1,1,1,1,1,1]	},
// {id:'M341', sales:[4,5,4,5,4]	},
// {id:'H103', sales:[3,2,2,3,1,1]	},
// {id:'B199', sales:[6,5,4]	},
// {id:'D388', sales:[7,8,9,8,4,4,4,3,2,1]}]

// //3.a
// newArr1 = salesMaster.map(function(obj){
//     m = 0
//     for(let i = 0; i<obj.sales.length; i++){
//       m += obj.sales[i]
//     }
//     return {id : obj.id , totSales : m}
// })

// console.log(newArr1)

// //3.b
//  let totalUnitsSold = getTotalUnitsSold(salesMaster);

// function getTotalUnitsSold(salesData) {

//   return salesData.reduce(function(sum, item) {
//     return sum + item.sales.length;
//   }, 0);

// }

// console.log("Total Sold units = "+totalUnitsSold);

// //3.c

// newArr2 = salesMaster.map(function(obj){
//   let m = 0
//   for(let i = 0; i<obj.sales.length; i++){
//    if(obj.sales[i] > obj.sales[i+1]){
//     m = obj.sales[i]
//    }
//    else if (obj.sales[i+1] > obj.sales[i])
//       m = obj.sales[i+1]

//     else 
//       m = obj.sales[i]
//   }
//   return {id : obj.id , MaxSales : m}
// })

// console.log(newArr2)

// //3.d
// function updateSalesOrders(salesData, newSalesOrders) {
//   newSalesOrders.map(function(order) {
//     const productToUpdate = salesData.find(function(item) {
//       return item.id == order.id;
//     });
//     if (productToUpdate) {
//       productToUpdate.sales.push(order.quantity);
//     }
//     return order;
//   });
// }

// const newSalesOrders = [
//   {id: 'A054', quantity: 6},
//   {id: 'D412', quantity: 20},
//   {id: 'B234', quantity: 15}
// ];

// updateSalesOrders(salesMaster, newSalesOrders);
// console.log(salesMaster);


//correction 1.a
// const txt1 = "i enjoy coding and writing code is a lot of fun";
// const wordArray = [];
// let currentWord = "";

// for (let i = 0; i < txt1.length; i++) {
//   const char = txt1[i];
//   if (char !== " ") {
//     currentWord += char;
//   } else if (currentWord) {
//     wordArray.push(currentWord);
//     currentWord = "";
//   }
// }

// if (currentWord) {
//   wordArray.push(currentWord);
// }

// console.log(wordArray);

//correction 3.c
const salesMaster = [
  { id: 'A441', sales: [10, 12, 13, 10, 16, 22, 30] },
  { id: 'B234', sales: [2, 4, 3, 4, 2, 6, 8, 10] },
  { id: 'A617', sales: [5, 5, 5, 5, 5] },
  { id: 'C229', sales: [9, 7, 6, 8, 8, 10, 9, 3, 4, 5, 6] },
  { id: 'D412', sales: [25, 25, 23, 21] },
  { id: 'A054', sales: [2, 2, 3, 1, 5, 6, 7, 11, 2] },
  { id: 'B955', sales: [1, 1, 1, 1, 1, 1] },
  { id: 'M341', sales: [4, 5, 4, 5, 4] },
  { id: 'H103', sales: [3, 2, 2, 3, 1, 1] },
  { id: 'B199', sales: [6, 5, 4] },
  { id: 'D388', sales: [7, 8, 9, 8, 4, 4, 4, 3, 2, 1] },
];

const productMaxSales = salesMaster.map(function(product) {
  let maxSale = product.sales[0]; 

  for (let i = 1; i < product.sales.length; i++) {
    if (product.sales[i] > maxSale) {
      maxSale = product.sales[i]; 
    }
  }

  return { id: product.id, maxSale };
});

console.log(productMaxSales);
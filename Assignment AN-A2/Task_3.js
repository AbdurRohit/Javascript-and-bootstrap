//t3

salesMaster = [{id:'A441', sales:[10,12,13,10,16,22,30]	},
{id:'B234', sales:[2,4,3,4,2,6,8,10]	},
{id:'A617', sales:[5,5,5,5,5]	},
{id:'C229', sales:[9,7,6,8,8,10,9,3,4,5,6]},
{id:'D412', sales:[25,25,23,21]	},
{id:'A054', sales:[2,2,3,1,5,6,7,11,2]	},
{id:'B955', sales:[1,1,1,1,1,1]	},
{id:'M341', sales:[4,5,4,5,4]	},
{id:'H103', sales:[3,2,2,3,1,1]	},
{id:'B199', sales:[6,5,4]	},
{id:'D388', sales:[7,8,9,8,4,4,4,3,2,1]}]

//3.a
newArr1 = salesMaster.map(function(obj){
    m = 0
    for(let i = 0; i<obj.sales.length; i++){
      m += obj.sales[i]
    }
    return {id : obj.id , totSales : m}
})

console.log(newArr1)

//3.b
 let totalUnitsSold = getTotalUnitsSold(salesMaster);

function getTotalUnitsSold(salesData) {

  return salesData.reduce(function(sum, item) {
    return sum + item.sales.length;
  }, 0);

}

console.log("Total Sold units = "+totalUnitsSold);

//3.c

newArr2 = salesMaster.map(function(obj){
  let m = 0
  for(let i = 0; i<obj.sales.length; i++){
   if(obj.sales[i] > obj.sales[i+1]){
    m = obj.sales[i]
   }
   else if (obj.sales[i+1] > obj.sales[i])
      m = obj.sales[i+1]

    else 
      m = obj.sales[i]
  }
  return {id : obj.id , MaxSales : m}
})

console.log(newArr2)

//3.d
function updateSalesOrders(salesData, newSalesOrders) {
  newSalesOrders.map(function(order) {
    const productToUpdate = salesData.find(function(item) {
      return item.id == order.id;
    });
    if (productToUpdate) {
      productToUpdate.sales.push(order.quantity);
    }
    return order;
  });
}

const newSalesOrders = [
  {id: 'A054', quantity: 6},
  {id: 'D412', quantity: 20},
  {id: 'B234', quantity: 15}
];

updateSalesOrders(salesMaster, newSalesOrders);
console.log(salesMaster);

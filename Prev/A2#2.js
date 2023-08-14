// //json
// const employees = [
//     {
//       name: "John Doe",
//       age: 30,
//       department: "Sales",
//       salary: 50000
//     },
//     {
//       name: "Jane Smith",
//       age: 35,
//       department: "Marketing",
//       salary: 60000
//     },
//     {
//       name: "Mike Johnson",
//       age: 40,
//       department: "IT",
//       salary: 70000
//     },
//     {
//       name: "Emily Davis",
//       age: 28,
//       department: "HR",
//       salary: 55000
//     },
//     {
//       name: "David Brown",
//       age: 32,
//       department: "Finance",
//       salary: 65000
//     }
//   ];
  
//   for (let i = 0; i < employees.length; i++) {
//     employees[i].wfh = true; 
//   }
  
//   console.log(employees);
  
  
// Task 2
// json = {
//     name : "Mark",
//     email : "mark@email.com",
//     salary : 80000,
// }
// console.log(json)

// Task 3

// JSON = {
//     billid : 45661,
//     amount : 2500
// }
// console.log(JSON)
// JSON.amount = 2700;
// console.log(JSON)

//t 4
// arr=[
// obj1 =  {"billid":401, "amount":200},
// obj2 =  {"billid":402, "amount":500}
// ]
// let sum  = 0;
// for (i = 0; i<arr.length;i++){
//     sum += arr[i].amount 
// }
// // sum = obj1.amount + obj2.amount
// console.log("Amount = ", sum)

// //Task 5
// json = {}
// json.id = 'EMP1223'
// json.email = 'emp1223@email.com'
// json.company = 'EMP Inc.'
// // json = {id: "EMP1223" , email : "emp1223@email.com", company : "EMP Inc."}
// console.log(json)

//task 6
// let shop = {
//     product :[
//  product1 = {
//     code: "PX101",
//     stock: 15,
//     price: 30
//   },
  
//  product2 = {
//     code: "PX102",
//     stock: 24,
//     price: 20
//   },
  
//  product3 = {
//     code: "PX103",
//     stock: 33,
//     price: 10
//   },
// ]
// };
// let product4= { code:'PX104', stock: 10, price: 40 } 
// shop.product.push(product4)
// let totalstock = 0;
// for (i=0;i<shop.product.length;i++){
//     totalstock += shop.product[i].stock
    
// }
// // shop.totalStock = totalstock
// console.log(shop)
// const productsToUpdate = ["PX101", "PX103"];

// for (let i = 0; i < shop.product.length; i++) {
//     for(let j = 0; j<productsToUpdate.length;j++){
//   if (productsToUpdate[j] == shop.product[i].code) {
//     shop.product[i].price *= 1.1;
//   }
// }
// }
// console.log(shop)


//Task 7
const examResults = [
  {
    name: "Mark",
    subjects: {
      maths: 80,
      english: 75,
      science: 63
    }
  },
  {
    name: "Bob",
    subjects: {
      maths: 90,
      english: 81,
      science: 88
    }
  },
  {
    name: "Julia",
    subjects: {
      maths: 88,
      english: 87,
      science: 89
    }
  },
  {
    name: "Anthony",
    subjects: {
      maths: 60,
      english: 64,
      science: 61
    }
  }
];

const compMarks =[{name:'Mark', Computers:90},
{name:'Anthony', Computers:70},
{name:'Julia', Computers:88},
{name:'Bob', Computers:81}]

for (let i = 0 ; i<examResults.length; i++)
{
  examResults[i].subjects.Computers = compMarks[i].Computers
 
}

let totalmarks = 0
let newjson = []
let obj = {}
let maxMarks =0
for (j=0; j<examResults.length ; j++)
{
  totalmarks = (examResults[j].subjects.english + examResults[j].subjects.maths +examResults[j].subjects.science + examResults[j].subjects.Computers)
  examResults[j].TotalMarks = totalmarks;
  maxMarks = Math.max(examResults[j].subjects.english , examResults[j].subjects.maths ,examResults[j].subjects.science , examResults[j].subjects.Computers)
  let newName = examResults[j].name;
  obj = {'Name': newName,'AvgMarks': (totalmarks / 4),'MaxMarks' : maxMarks }
  newjson.push(obj)
}
let bobIndex = 0;
for(j=0;j<examResults.length;j++){
  if(examResults[j].name == 'Bob')
  {
    bobIndex = j;
  }
}
const removedBob = examResults.splice(bobIndex, 1);
console.log(removedBob); 

// console.log(newjson);
// console.log(examResults)

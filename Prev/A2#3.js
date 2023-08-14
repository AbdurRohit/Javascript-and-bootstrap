//Task 1

// function findElementGreaterThanX(numbers, x) {
//     var greaterThanX = numbers.find(function(num) {
//       return num > x;
//     });
//     console.log(greaterThanX);
//     return greaterThanX;
//   }
  
//   var numbers = [1, 2, 3, 4, 5, 6];
//   var x = 3;
//   findElementGreaterThanX(numbers, x);
  
//   function findIndexOfElement(array, element) {
//     var index = array.findIndex(function(item) {
//       return item === element;
//     });
//     console.log(index);
//     return index;
//   }
  
//   var fruits = ['apple', 'banana', 'orange'];
//   var element = 'banana';
//   findIndexOfElement(fruits, element);
  
//   var employees = [
//     { name: 'Alice', department: 'HR', city: 'New York' },
//     { name: 'Bob', department: 'IT', city: 'San Francisco' },
//     { name: 'Charlie', department: 'HR', city: 'Chicago' },
//     { name: 'Dave', department: 'Finance', city: 'New York' }
//   ];
  
//   function filterEmployeesByDeptAndCity(employees, department, city) {
//     var filteredEmployees = employees.filter(function(employee) {
//       return employee.department === department && employee.city === city;
//     });
//     console.log(filteredEmployees);
//     return filteredEmployees;
//   }
  
//   var department = 'HR';
//   var city = 'New York';
//   filterEmployeesByDeptAndCity(employees, department, city);
//TASK 2  
// function findNumberAndIndex(numbers, condition) {
//     var result = numbers.filter(function(number, index) {
//       return condition(number);
//     });
//     return result;
//   }
  
//   var numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

//   var equalsTo10 = findNumberAndIndex(numbers, function(number) {
//     return number === 10;
//   });
//   console.log("Numbers equal to 10:", equalsTo10);
  
//   var greaterThan30 = findNumberAndIndex(numbers, function(number) {
//     return number > 30;
//   });
//   console.log("Numbers greater than 30:", greaterThan30);

//   var multipleOf3 = findNumberAndIndex(numbers, function(number) {
//     return number % 3 === 0;
//   });
//   console.log("Numbers multiple of 3:", multipleOf3);

//TASK 2.2

// var numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// let check1 = numbers.find(function eq (num){
//   if (num == 10)
//     return num;
// })
// let check2 = numbers.findIndex(function eq (num){
//   if (num == 10)
//     return num;
// })
// console.log(check1)
// console.log("index = ",check2)

//3.1
// var fruits = ['apple', 'banana', 'orange', 'greaps', 'orange', 'Pineapple','Papaia',];
// let check1 = fruits.find( function lenMore10(str) {
//   if(str.length > 5){
//     return str;
//   }
// })

// let check2 = fruits.findIndex(function lenMore10I(str){
//   if(str.length > 5){
//     return str;
//   }
// })

// let check3 = fruits.find(function startsWithP(str){
//   if(str[0] == 'P' || str[0] == 'p'){
//     return str;
//   }
// })
// let check4 = fruits.findIndex(function startsWithP(str){
//   if(str[0] == 'P' || str[0] == 'p'){
//     return str;
//   }
// })

// console.log(check1+" - Have more thean 5 characters")
// console.log("Index = ", check2)
// console.log(check3+ " - Have P at first")
// console.log("Index = ", check4)

//task 3.2
// var fruits = ['apple', 'banana', 'orange', 'greaps', 'Pineapple','Papaia',];
// let check1 = fruits.filter( function lenMore10(str) {
//   if(str.length > 5){
//     return str;
//   }
// })

// let check2 = fruits.findIndex(function lenMore10I(str){
//   if(str.length > 5){
//     return str;
//   }
// })
// IndexArr1 = []
// let check3 = fruits.filter(function startsWithP(str){
//     return str[0] == 'P' || str[0] == 'p'
//   })
// let check4 = fruits.findIndex(function startsWithP(str){
//   if(str[0] == 'P' || str[0] == 'p'){
//     return str;
//   }
// })

// console.log(check1+" - Have more thean 5 characters")
// console.log("Index = ", check2)
// console.log(check3+ " - Have P at first")
// console.log("Index = ", check4)

//Task 4.1
// var employees = [
//   {
//     "name": "Sohn Doe",
//     "age": 30
//   },
//   {
//     "name": "Jane Smith",
//     "age": 35
//   },
//   {
//     "name": "Sike Johnson",
//     "age": 28
//   }
// ]

// // let check1 = employees.find(function age35(obj){
// //   return obj.age < 35 && obj.name[0] == 'S'
// // })

// // console.log(check1)

// // Task 4.2

// let check1 = employees.filter(function(obj){
//   return obj.age < 35 && obj.name[0] == 'S'
// })
// console.log(typeof(check1))
// console.log(check1)

//Task 5.1

// let arr = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript']

// let check1 = arr.find(function(str){
//   return str[str.length-1] == 't'
// })
// let check2 = arr.findIndex(function(str){
//   return str[str.length-1] == 't'
// })
// console.log(check1 + " With the index of " +check2)

// let check3 = arr.filter(function(str){
//   return str[str.length-1] == 't'
// })
// console.log("Filtered array = ",check3)

//5.2
// var ch = 'n'
// let arr = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript']

// let check1 = arr.find(function(str){
//   return str[str.length-1] == ch
// })
// let check2 = arr.findIndex(function(str){
//   return str[str.length-1] == ch
// })
// console.log(check1 + " With the index of " +check2)

// let check3 = arr.filter(function(str){
//   return str[str.length-1] == ch
// })
// console.log("Filtered array = ",check3)

//5.3

// var ch = 'n'
// let arr = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript']

// let check1 = arr.find(function(str){
//   for(let i = 0; i<str.length;i++){
//     if(str[i] == ch)
//       return str 
//   }
// })
// let check2 = arr.findIndex(function(str){
//   for(let i = 0; i<str.length;i++){
//     if(str[i] == ch)
//     return str 
//   }
// })
// console.log(check1 + " With the index of " +check2)

// let check3 = arr.filter(function(str){
//   for(let i = 0; i<str.length;i++){
//     if(str[i] == ch)
//     return str 
//   }
// })
// console.log("Filtered array = ",check3)

//6.1
// var students = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":72,"science":75},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":81}]

// let check1 = students.find(function(obj){
//   return obj.maths < 50
// })
// console.log (check1)

// let check2 = students.findIndex(function(obj){
//   return obj.maths < 50
// })

// console.log("At index = ",check2)

//6.2
// var students = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":72,"science":75},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":81}]

// let check1 = students.find(function(obj){
//   let totalmarks = obj.english+obj.maths+obj.science
//   return Math.max(totalmarks) > 200
// })
// console.log (check1)

// let check2 = students.findIndex(function(obj){
//   let totalmarks = obj.english+obj.maths+obj.science
//   return Math.max(totalmarks) > 200
// })
// console.log("At index = ",check2)

//6.3
// var students = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":72,"science":75},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":81}]

// let check1 = students.find(function(obj){
//   return obj.maths > obj.english
// })
// console.log (check1)

// //index
// let check2 = students.findIndex(function(obj){
//   return obj.maths > obj.english
// })
// console.log("At index = ",check2)

//6.4
// var students = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":72,"science":75},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":81}]
// let n = 60
// let check1 = students.find(function(obj){
//   return obj.english > n && obj.maths > n && obj.science >n
// })
// console.log (check1)

// let check2 = students.findIndex(function(obj){
//   return obj.english > n && obj.maths > n && obj.science >n
// })
// console.log("At index = ",check2)

//6.5
// var students = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":72,"science":75},
// {"name":"Steve","maths":46,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":81}]

// let check1 = students.filter(function(obj){
//   return obj.maths < 50
// })
// console.log (check1)

//6.6
// var students = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":72,"science":75},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":81}]

// let check1 = students.filter(function(obj){
//   let totalmarks = obj.english+obj.maths+obj.science
//   return Math.max(totalmarks) > 200
// })
// console.log (check1)

// let check2 = students.findIndex(function(obj){
//   let totalmarks = obj.english+obj.maths+obj.science
//   return Math.max(totalmarks) > 200
// })
// console.log("At index = ",check2)

//6.7
// var students = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":72,"science":75},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":81}]
// let n = 60
// let check1 = students.filter(function(obj){
//   return obj.english > n && obj.maths > n && obj.science >n
// })
// console.log (check1)

// let check2 = students.findIndex(function(obj){
//   return obj.english > n && obj.maths > n && obj.science >n
// })
// console.log("At index = ",check2)

//6.8
// var students = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":72,"science":75},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":81}]
// let n = 60
// let check1 = students.filter(function(obj){
//   return obj.english > n && obj.maths > n && obj.science >n
// })
// console.log (check1)

// let check2 = students.findIndex(function(obj){
//   return obj.english > n && obj.maths > n && obj.science >n
// })
// console.log("At index = ",check2)

//6.9
// var students = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":72,"science":75},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":81}]
// let n1 = 60
// let n2 = 70
// let check1 = students.find(function(obj){
//   return obj.maths > n1 && obj.science >n2
// })
// console.log (check1)

// let check2 = students.findIndex(function(obj){
//     return obj.maths > n1 && obj.science >n2
// })
// console.log("At index = ",check2)

//7.1
// var employee = [
//   {"name":"Jack","country":"USA","age":35},
//   {"name":"Amit","country":"India","age":38},
//   {"name":"Edward","country":"USA","age":41},
//   {"name":"Vishal","country":"India","age":30},
//   {"name":"Annie","country":"USA","age":27},
//   {"name":"Nick","country":"France","age":32},
//   {"name":"Francis","country":"France","age":44},
//   {"name":"Preeti","country":"India","age":25},
// {"name":"Sophie","country":"France","age":29},
// {"name":"Harpreet","country":"India","age":48},
// {"name":"Bob","country":"USA","age":21}
// ]

// let check1 = employee.filter(function(obj){
//   return obj.country == 'India'
// })
// console.log(check1)

// let check2 = employee.findIndex(function(obj){
//   return obj.country == 'India'
// })
// console.log("Index = "+check2)

//7.2
// var employee = [
//   {"name":"Jack","country":"USA","age":35},
//   {"name":"Amit","country":"India","age":38},
//   {"name":"Edward","country":"USA","age":41},
//   {"name":"Vishal","country":"India","age":30},
//   {"name":"Annie","country":"USA","age":27},
//   {"name":"Nick","country":"France","age":32},
//   {"name":"Francis","country":"France","age":44},
//   {"name":"Preeti","country":"India","age":25},
// {"name":"Sophie","country":"France","age":29},
// {"name":"Harpreet","country":"India","age":48},
// {"name":"Bob","country":"USA","age":21}
// ]

// let check1 = employee.filter(function(obj){
//   return obj.country == 'India' && obj.age < 35
// })
// console.log(check1)

// let check2 = employee.findIndex(function(obj){
//   return obj.country == 'India' && obj.age < 35
// })
// console.log("Index = "+check2)

//7.3
// var employee = [
//   {"name":"Jack","country":"USA","age":35},
//   {"name":"Amit","country":"India","age":38},
//   {"name":"Edward","country":"USA","age":41},
//   {"name":"Vishal","country":"India","age":30},
//   {"name":"Annie","country":"USA","age":27},
//   {"name":"Nick","country":"France","age":32},
//   {"name":"Francis","country":"France","age":44},
//   {"name":"Preeti","country":"India","age":25},
// {"name":"Sophie","country":"France","age":29},
// {"name":"Harpreet","country":"India","age":48},
// {"name":"Bob","country":"USA","age":21}
// ]

// let check1 = employee.filter(function(obj){
//   return obj.name.length < 6
// })
// console.log(check1)

// let check2 = employee.findIndex(function(obj){
//   return obj.name.length < 6
// })
// console.log("Index = "+check2)

//7.4
// var employee = [
//   {"name":"Jack","country":"USA","age":35},
//   {"name":"Amit","country":"India","age":38},
//   {"name":"Edward","country":"USA","age":41},
//   {"name":"Vishal","country":"India","age":30},
//   {"name":"Annie","country":"USA","age":27},
//   {"name":"Nick","country":"France","age":32},
//   {"name":"Francis","country":"France","age":44},
//   {"name":"Preeti","country":"India","age":25},
// {"name":"Sophie","country":"France","age":29},
// {"name":"Harpreet","country":"India","age":48},
// {"name":"Bob","country":"USA","age":21}
// ]

// let check1 = employee.filter(function(obj){
//   return obj.country == "USA" || obj.country == "India"
// })
// console.log(check1)

// let check2 = employee.findIndex(function(obj){
//   return obj.country == "USA" || obj.country == "India"
// })
// console.log("Index = "+check2)

//7,5
// var employee = [
//   {"name":"Jack","country":"USA","age":35},
//   {"name":"Amit","country":"India","age":38},
//   {"name":"Edward","country":"USA","age":41},
//   {"name":"Vishal","country":"India","age":30},
//   {"name":"Annie","country":"USA","age":27},
//   {"name":"Nick","country":"France","age":32},
//   {"name":"Francis","country":"France","age":44},
//   {"name":"Preeti","country":"India","age":25},
// {"name":"Sophie","country":"France","age":29},
// {"name":"Harpreet","country":"India","age":48},
// {"name":"Bob","country":"USA","age":21}
// ]

// var minAge = 30
// let check1 = employee.filter(function(obj){
//   return obj.age > minAge
// })
// console.log(check1)

// let check2 = employee.findIndex(function(obj){
//   return obj.age > minAge
// })
// console.log("Index = "+check2)

//7.6
// var employee = [
//   {"name":"Jack","country":"USA","age":35},
//   {"name":"Amit","country":"India","age":38},
//   {"name":"Edward","country":"USA","age":41},
//   {"name":"Vishal","country":"India","age":30},
//   {"name":"Annie","country":"USA","age":27},
//   {"name":"Nick","country":"France","age":32},
//   {"name":"Francis","country":"France","age":44},
//   {"name":"Preeti","country":"India","age":25},
// {"name":"Sophie","country":"France","age":29},
// {"name":"Harpreet","country":"India","age":48},
// {"name":"Bob","country":"USA","age":21}
// ]

// var cot = 'France'
// let check1 = employee.filter(function(obj){
//   return obj.country == cot
// })
// console.log(check1)

// let check2 = employee.findIndex(function(obj){
//   return obj.country == cot
// })
// console.log("Index = "+check2)

//8.1
// let student = [{"name":"Mary","marks":[72,65,55,71]},
// {"name":"Anita","marks":[66,70,75,53]},
// {"name":"Edward","marks":[44,54,64,58]},
// {"name":"Thomas","marks":[62,55,65,81]},
// {"name":"Robin","marks":[41,44,47,49]},
// {"name":"Sophia","marks":[71,73,67,77]},
// {"name":"Bruce","marks":[52,57,61,64]}]

// let check1 = student.filter(function(obj){
//   let m =0;
//   for(let i = 0; i<obj.marks.length; i++){
//     m += obj.marks[i]
//   }
//   return m < 250
// })

// console.log(check1)

//8.2
// let student = [{"name":"Mary","marks":[72,65,55,71]},
// {"name":"Anita","marks":[66,70,75,53]},
// {"name":"Edward","marks":[44,54,64,58]},
// {"name":"Thomas","marks":[62,55,65,81]},
// {"name":"Robin","marks":[41,44,47,49]},
// {"name":"Sophia","marks":[71,73,67,77]},
// {"name":"Bruce","marks":[52,57,61,64]}]

// let check1 = student.filter(function(obj){
  
//   for(let i = 0; i<obj.marks.length; i++){
//     return obj.marks[i] > 70
//   }
  
// })

// console.log(check1)

//8.3
// let student = [{"name":"Mary","marks":[72,65,55,71]},
// {"name":"Anita","marks":[66,70,75,53]},
// {"name":"Edward","marks":[44,54,64,58]},
// {"name":"Thomas","marks":[62,55,65,81]},
// {"name":"Robin","marks":[41,44,47,49]},
// {"name":"Sophia","marks":[71,73,67,77]},
// {"name":"Bruce","marks":[52,57,61,64]}]
// let count =0;
// let check1 = student.filter(function(obj){
  
//   for(let i = 0; i<obj.marks.length; i++){
//     if(obj.marks[i] > 70)
//     {
//         count++
//     }
//   }
//   if(count >=2){
//     return obj
//   }
// })

// console.log(check1)

//8.4
// let student = [{"name":"Mary","marks":[72,65,55,71]},
// {"name":"Anita","marks":[66,70,75,53]},
// {"name":"Edward","marks":[44,54,64,58]},
// {"name":"Thomas","marks":[62,55,65,81]},
// {"name":"Robin","marks":[41,44,47,49]},
// {"name":"Sophia","marks":[71,73,67,77]},
// {"name":"Bruce","marks":[52,57,61,64]}]

// let avgMarks  = 60

// let check1 = student.filter(function(obj){
//   let m =0
//   for(let i = 0; i<obj.marks.length; i++){
//     m+= obj.marks[i] 
//   }
//   if((m/4) > avgMarks){
//     return obj
//   }
// })

// console.log(check1)

//task 9
// var developer = [{"name":"Jack","tech":"Android"},
// {"name":"Mary","tech":"React"},
//  {"name":"Bob","tech":"Angular"},
//  {"name":"Steve","tech":"Spring"}, 
//  {"name":"James","tech":"Android"},
//  {"name":"Julia","tech":"Android"}, 
//  {"name":"Michel","tech":"React"},
//  {"name":"Bill","tech":"Angular"},
//   {"name":"Sonny","tech":"Spring"},
//   {"name":"Martins","tech":"React"}, 
//   {"name":"Bruce","tech":"Angular"},
//   {"name":"Sam","tech":"Spring"}]

// var button = true;
// let check1
// if (button == true){
//     let str = "Steve"
//     check1 = developer.filter(function(obj){
//         return obj.name == str
//     })
// }
// else{
//     let str = "Angular"
//     check1 = developer.filter(function(obj){
//         return obj.tech == str
//     })
// }
// console.log(check1)

// 10
// function userJoin(str,arr){
// let text = arr.join(str)
// console.log(text)
// }
// userJoin('#',["Hi","Hello","Bye"])
// userJoin('#',["A","B","C","X","Y"])
// userJoin('#',["AB","!2","EF"])

// 11
// function userJoin(arr,str){
//     let text = arr.join(str)
//     console.log(text)
//     }
//     userJoin(["Hi","Hello","Bye"], '**')
//     userJoin(["A","B","C"], 'Level:')
//     userJoin(["AB","!2","EF"], '#')

//12.a

// let arr = [12,5,-6,10,-9,4,0,-23,34]
// let result = arr.sort(Accending)
// function Accending(num1, num2){
//     if (num1 > num2){
//         return 1
//     }
//     else if(num1 < num2)
//         return -1
//     else
//         return 0

// }
// console.log(result)

//task 12.b
// let arr = [12,5,-6,10,-9,4,0,-23,34]
// let result = arr.sort(descending)
// function descending(num1, num2){
//     if (num1 > num2){
//         return -1
//     }
//     else if(num1 < num2)
//         return 1
//     else
//         return 0

// }
// console.log(result)

//13.a
// let arr = ["JavaScript","Hello","React","Java","Python","C","Node"]
// let result1 = arr.sort(dict)
// function dict (str1, str2){
//     return str1.localeCompare(str2)
// }
// console.log(result1)

// //13.b
// let result2 = arr.sort(dict1)
// function dict1 (str1, str2){
//     return -1*str1.localeCompare(str2)
// }
// console.log(result2)

//task 13.c
// let arr = ["JavaScript","Hello","React","Java","Python","C","Node"]
// let result = arr.sort(arrCal)
// function arrCal(str1, str2){
//     let num1 = str1.length
//     let num2 = str2.length
//     if (num1 > num2){
//         return 1
//     }
//     else if(num1 < num2)
//         return -1
//     else
//         return 0

// }
// console.log(result)

//13.d
// let arr = ["JavaScript","Hello","React","Java","Python","C","Node"]
// let result = arr.sort(numberOfa)
// function numberOfa(str1,str2){
//     let count1 = 0
//     let count2 = 0
//     for(let i = 0; i<str1.length;i++){
//         count1 ++
//     }
//     for (let j = 0; j<str2.length ; j++){
//         count2++
//     }
    
//     if (count1 > count2){
//         return 1
//     }
//     else if(count1 < count2)
//         return -1
//     else
//         return 0

//     }
//     console.log(result)

//14
// let student = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":58,"science":54},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":60}]

// let task1 = student.sort(ArrayName)
// function ArrayName(obj1, obj2){
//     return obj1.name.localeCompare(obj2.name)
// }
// console.log(task1)

//14.2
// let student = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":58,"science":54},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":60}]

// let task1 = student.sort(ArrayName)
// function ArrayName(obj1, obj2){
//     return -1*obj1.name.localeCompare(obj2.name)
// }
// console.log(task1)

//14.3
// let student = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":58,"science":54},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":60}]

// let task1 = student.sort(ArrayName)
// function ArrayName(obj1, obj2){
//     total1 = obj1.english+obj1.maths+obj1.science
//     total2 = obj2.english+obj2.maths+obj2.science
//     if(total1>total2)
//         return -1
//     else if (total1<total2)
//         return 1
//     else
//         return 0
// }
// console.log(task1)

//14.4
// let student = [{"name":"Jack","maths":55,"english":60,"science":62},
// {"name":"Anita","maths":62,"english":65,"science":56},
// {"name":"Thomas","maths":68,"english":58,"science":54},
// {"name":"Steve","maths":51,"english":56,"science":68},
// {"name":"Julia","maths":47,"english":77,"science":72},
// {"name":"Mary","maths":72,"english":55,"science":60}]

// let task1 = student.sort(ArrayName)
// function ArrayName(obj1, obj2){
//     total1 = obj1.maths
//     total2 = obj2.maths
//     if(total1>total2)
//         return 1
//     else if (total1<total2)
//         return -1
//     else
//         return 0
// }
// console.log(task1)

//15.1

// let jsonArr = [{"name":"Jack","country":"USA","age":35},
// {"name":"Amit","country":"India","age":38},
// {"name":"Edward","country":"USA","age":41},
// {"name":"Vishal","country":"India","age":30},
// {"name":"Annie","country":"USA","age":27},
// {"name":"Preeti","country":"India","age":25},
// {"name":"Sophie","country":"France","age":29},
// {"name":"Harpreet","country":"India","age":48},
// {"name":"Bob","country":"USA","age":21}]

// let task1 = jsonArr.sort(ArrayName)
// function ArrayName(obj1, obj2){
//     return obj1.name.localeCompare(obj2.name)
// }
// console.log(task1)

//15.2

// let jsonArr = [{"name":"Jack","country":"USA","age":35},
// {"name":"Amit","country":"India","age":38},
// {"name":"Edward","country":"USA","age":41},
// {"name":"Vishal","country":"India","age":30},
// {"name":"Annie","country":"USA","age":27},
// {"name":"Preeti","country":"India","age":25},
// {"name":"Sophie","country":"France","age":29},
// {"name":"Harpreet","country":"India","age":48},
// {"name":"Bob","country":"USA","age":21}]

// let task1 = jsonArr.sort(ArrayAge)
// function ArrayAge(obj1, obj2){
//     total1 = obj1.age
//     total2 = obj2.age
//     if(total1>total2)
//         return -1
//     else if (total1<total2)
//         return 1
//     else
//         return 0
// }
// console.log(task1)
//15.3 
let jsonArr = [{"name":"Jack","country":"USA","age":35},
{"name":"Amit","country":"India","age":38},
{"name":"Edward","country":"USA","age":41},
{"name":"Vishal","country":"India","age":30},
{"name":"Annie","country":"USA","age":27},
{"name":"Preeti","country":"India","age":25},
{"name":"Sophie","country":"France","age":29},
{"name":"Harpreet","country":"India","age":48},
{"name":"Bob","country":"USA","age":21}]


let task1 = jsonArr.sort(ArrayName)
function ArrayName(obj1, obj2){
    return obj1.name.localeCompare(obj2.name)
}
let task2 = task1.sort(ArrayContry)
function ArrayContry(obj1, obj2){
    return obj1.country.localeCompare(obj2.country)
}

console.log(task2)
//task 15.4 
// let jsonArr = [{"name":"Jack","country":"USA","age":35},
// {"name":"Amit","country":"India","age":38},
// {"name":"Edward","country":"USA","age":41},
// {"name":"Vishal","country":"India","age":30},
// {"name":"Annie","country":"USA","age":27},
// {"name":"Preeti","country":"India","age":25},
// {"name":"Sophie","country":"France","age":29},
// {"name":"Harpreet","country":"India","age":48},
// {"name":"Bob","country":"USA","age":21}]


// let task1 = jsonArr.sort(ArrayAge)
// function ArrayAge(obj1, obj2){
//     total1 = obj1.age
//     total2 = obj2.age
//     if(total1>total2)
//         return -1
//     else if (total1<total2)
//         return 1
//     else
//         return 0
// }
// let task2 = task1.sort(ArrayName)
// function ArrayName(obj1, obj2){
//     return obj1.country.localeCompare(obj2.country)
// }

// console.log(task1)

//15.5
// let jsonArr = [{"name":"Jack","country":"USA","age":35},
// {"name":"Amit","country":"India","age":38},
// {"name":"Edward","country":"USA","age":41},
// {"name":"Vishal","country":"India","age":30},
// {"name":"Annie","country":"USA","age":27},
// {"name":"Preeti","country":"India","age":25},
// {"name":"Sophie","country":"France","age":29},
// {"name":"Harpreet","country":"India","age":48},
// {"name":"Bob","country":"USA","age":21}]

// function CalDevs(str){
//     let task1 = jsonArr.filter(function(obj){
//         return obj.country == str
//     })

//     let task2 = task1.sort(ArrayAge)
//     function ArrayAge(obj1, obj2){
//     total1 = obj1.age
//     total2 = obj2.age
//     if(total1>total2)
//         return -1
//     else if (total1<total2)
//         return 1
//     else
//         return 0
// }
// console.log(task2)

// }
// CalDevs('USA')

//task 16.1
// let ObtainMarks = [{"name":"Mary","marks":[72,65,55,71]},
// {"name":"Anita","marks":[66,70,75,53]},
// {"name":"Edward","marks":[44,54,64,58]},
// {"name":"Thomas","marks":[62,55,65,81]},
// {"name":"Robin","marks":[41,44,47,49]},
// {"name":"Sophia","marks":[71,73,67,77]},
// {"name":"Bruce","marks":[52,57,61,64]}]

// let task1 = ObtainMarks.sort(ArrayAge)
// function ArrayAge(obj1, obj2){
//     let total1 = 0
//     let total2 = 0
//     for(let i = 0; i<obj1.length;i++){
//         total1+=obj1.marks[i]
//     }
//     for (let j = 0; j<obj2.length;j++){
//         total2+=obj2.marks[j]
//     }
//     if(total1>total2)
//         return 1
//     else if (total1<total2)
//         return -1
//     else
//         return 0
// }
// console.log(task1)

//task 16.2
// let ObtainMarks = [{"name":"Mary","marks":[72,65,55,71]},
// {"name":"Anita","marks":[66,70,75,53]},
// {"name":"Edward","marks":[44,54,64,58]},
// {"name":"Thomas","marks":[62,55,65,81]},
// {"name":"Robin","marks":[41,44,47,49]},
// {"name":"Sophia","marks":[71,73,67,77]},
// {"name":"Bruce","marks":[52,57,61,64]}]

// let task1 = ObtainMarks.sort(ArrayAge)
// function ArrayAge(obj1, obj2){
//     let total1 = 0
//     let total2 = 0
//     for(let i = 0; i<obj1.length;i++){
//         if(obj1.marks[i] > obj1.marks[i+1])
//             total1 = obj1.marks[i]
//     }

//     for (let j = 0; j<obj2.length;j++){
//         if(obj2.marks[j] > obj2.marks[j+1])
//             total2 = obj2.marks[j]
//     }

//     if(total1>total2)
//         return 1
//     else if (total1<total2)
//         return -1
//     else
//         return 0
// }
// console.log(task1)

//task 16.3

// let ObtainMarks = [{"name":"Mary","marks":[72,65,55,71]},
// {"name":"Anita","marks":[66,70,75,53]},
// {"name":"Edward","marks":[44,54,64,58]},
// {"name":"Thomas","marks":[62,55,65,81]},
// {"name":"Robin","marks":[41,44,47,49]},
// {"name":"Sophia","marks":[71,73,67,77]},
// {"name":"Bruce","marks":[52,57,61,64]}]
// let cutoff = 50
// let task1 = ObtainMarks.sort(ArrayAge)
// function ArrayAge(obj1, obj2){
//     let count1 = 0
//     let count2 = 0
//     for(let i = 0; i<obj1.length;i++){
//         if(obj1.marks[i] > cutoff){
//             count1 ++
//         }
//     }

//     for (let j = 0; j<obj2.length;j++){
//         if(obj2.marks[j] > cutoff)
//             count2++
//     }

//     if(count1>count2)
//         return 1
//     else if (count1<count2)
//         return -1
//     else
//         return 0
// }
// console.log(task1)

//17

// function AbcCal (arr){
//     let task1 = arr.sort(calculate)
//     function calculate(str1,str2){
//         let count1 = 0;
//         let count2 = 0;
//         for(let i=0; i<str1.length;i++){
//             if(str1[i]=='a' || str1[i]=='b' || str1[i]=='c'){
//                 count1++
//             }
//         }
//         for (let j = 0;j<str2.length;j++){
//             if(str1[j]=='a' || str1[j]=='b' || str1[j]=='c')
//                 count2++
//         }
//     if(count1>count2)
//         return -1
//     else if (count1<count2)
//         return 1
//     else
//         return 0
// }
// console.log(task1)
// }

// AbcCal (["aa","car","is","going"])
// AbcCal(["q","w1","c2","cat","abcd","e34","a",])

//18
// function AbcCal (arr){
//     let task1 = arr.sort(calculate)
//     function calculate(str1,str2){
//         let count1 = 0;
//         let count2 = 0;
//         for(let i=0; i<str1.length;i++){
//             if(str1[i] >= 0 || str1[i]<= 9)
//             count1++
//         }
//         for (let j = 0;j<str2.length;j++){
//             if(str2[j]>=0||str2[j]<=9)
//                 count2++
//         }
//     if(count1>count2)
//         return 1
//     else if (count1<count2)
//         return -1
//     else
//         return 0
// }
// console.log(task1)
// }

// AbcCal(['c101',"mB24x","a4b6n7","zzz2z"])

//19

// function AbcCal (arr){
//  let task1 = arr.filter(function(str){
//     flag = 0;
//     for(let i = 0 ; i<str.length; i++){
//     if (str[i] == 'a' ||str[i] == 'b' ||str[i] == 'c' )
//         flag++
//     }
//     if(flag>0){
//         return str
//     }
//  })
// console.log(task1)
// }
// AbcCal(["aa","car","is","going"])
// AbcCal(["q","w1","c2","cat","abcd","e34","a"])

//20
// function AbcCal (arr){
//  let task1 = arr.filter(function(str){
//     flag = 0;
//     for(let i = 0 ; i<str.length; i++){
//     if (str[i].toUpperCase() == str[i])
//         flag++
//     }
//     if(flag>0){
//         return str
//     }
//  })
// console.log(task1)
// }
// AbcCal(["name","Java","Master","tech"])

//21.1
// let PersonArray = [{"name":"Mary","city":"London"},
// {"name":"Anita","city":"Paris" },
// {"name":"Edward","city":"New York"},
// {"name":"Thomas","city":"Rome"},{"name":"Robin","city":"Seattle"},
// {"name":"Sophia","city":"Los Angeles"},
// {"name":"Bruce","city":"Delhi"}]

// let ContinentArray = [{"city":"London","continent":"Europe"},
// {"city":"Delhi","continent":"Asia"},{"city":"Seattle","continent":"North America"},
// {"city":"Paris","continent":"Europe"},{"city":"New York","continent":"North America"},
// {"city":"Rome","continent":"Europe"},{"city":"Bengaluru","continent":"Asia"},
// {"city":"Los Angeles","continent":"North America"}]

// function check(str){
//     let task1 = PersonArray.filter(function(obj){
//       let cityName = ContinentArray.find(function(obj1){
//             if(str == obj1.continent)
//                 return obj1.city 
//         })
//         // console.log(typeof(cityName))
//         // console.log(cityName)
//         if (cityName.city == obj.city)
//             return obj
//     })
//     console.log(task1)
// }

// check('North America')
// check('Europe')

//21.2
let PersonArray = [{"name":"Mary","city":"London"},
{"name":"Anita","city":"Paris" },
{"name":"Edward","city":"New York"},
{"name":"Thomas","city":"Rome"},{"name":"Robin","city":"Seattle"},
{"name":"Sophia","city":"Los Angeles"},
{"name":"Bruce","city":"Delhi"}]

let ContinentArray = [{"city":"London","continent":"Europe"},
{"city":"Delhi","continent":"Asia"},{"city":"Seattle","continent":"North America"},
{"city":"Paris","continent":"Europe"},{"city":"New York","continent":"North America"},
{"city":"Rome","continent":"Europe"},{"city":"Bengaluru","continent":"Asia"},
{"city":"Los Angeles","continent":"North America"}]

let task1 = PersonArray.sort(checkfn)

function checkfn(objj1,objj2){

    let contName1 = ContinentArray.find(function(obj1){
                    if( objj1.city == obj1.city)
                        return obj1.continent 
                })
    let contName2 = ContinentArray.find(function (obj2){
        if(objj2.city == obj2.city){
            return obj2.continent
        }
    })
return contName1.continent.localeCompare(contName2.continent)
}
console.log(task1)


    


//task 1.1
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(function(num) {
//   return num * num;
// });

// console.log(squares); 

//1.2
// const numbers = [-2, -1, 0, 1, 2];
// const absolutes = numbers.map(function(num) {
//   return Math.abs(num);
// });

// console.log(absolutes); 


//1.3
// const strings = ["Hello", "World", "OpenAI"];
// const wrappedStrings = strings.map(function(str) {
//   return "<p>" + str + "</p>";
// });

// console.log(wrappedStrings);

//1.4
// const string = "Hello, World!";
// const maxlen = 5;
// const extracted = string.substring(0, maxlen);

// console.log(extracted); 

//1.5
// const products = ["Apple", "Banana", "Orange"];
// const value = 10;
// const productJSON = products.map(function(product) {
//   return { product: product, value: value };
// });

// console.log(productJSON);

//1.6

// const firstNames = ["John", "Jane", "Michael"];
// const lastNames = ["Doe", "Smith", "Johnson"];
// const namesJSON = firstNames.map(function(firstName, index) {
//   return { firstName: firstName, lastName: lastNames[index] };
// });

// console.log(namesJSON);

//TASK 2
// const numbers = [4,8,12,20,6];
// const squares = numbers.map(function(num) {
//   return num * 2;
// });
// console.log(squares); 

//task 3
// const numbers = [10,2,25,20,30];
// const squares = numbers.map(function(num) {
//   return num * num;
// });

// console.log(squares); 

// //task 4
// const numbers = [5,10, 5,10,5,10];
// const modifiedNumbers = numbers.map(function(num) {
//   return num % 2 === 0 ? num : 0;
// });

// console.log(modifiedNumbers);

//task 5
// const numbers = [1, 2, 3, 4, 5];
// const modifiedArray = numbers.map(function(num) {
//   return num % 2 === 0 ? 'Even' : 'Odd';
// });

// console.log(modifiedArray);

//task 6
// numbers = ["Hi","Hello","Bye"]
// const squares = numbers.map(function(num) {
//   return num + num;
// });
// console.log(squares)

//task 7
// const jsonArray = [
//   { "name": "Mark", "age": 23 },
//   { "name": "Steve", "age": 28 },
//   { "name": "Mary", "age": 25 },
//   { "name": "Bill", "age": 34 }
// ];

// const outputArray = jsonArray.map(function(obj) {
//   return obj.name + " is " + obj.age + " years old";
// });

// console.log(outputArray);


// task 8
// const names = ["Mark", "James", "Martha"];
// const listString = "<ul>" + names.map(function(name) {
//   return "<li>" + name + "</li>";
// }).join("") + "</ul>";

// console.log(listString);

//task 9
// const jsonArray = [
//   { "id": 101, "name": "Mark" },
//   { "id": 105, "name": "Steve" },
//   { "id": 78, "name": "James" }
// ];

// const buttonString = jsonArray.map(function(obj) {
//   return "<button onClick=clicked(" + obj.id + ")>" + obj.name + "</button>";
// }).join(" ");

// console.log(buttonString);

//10
// const jsonArray = [
//   { "name": "Mary", "marks": 72 },
//   { "name": "Anita", "marks": 75 },
//   { "name": "Thomas", "marks": 81 },
//   { "name": "Bruce", "marks": 64 }
// ];

// const tableString = jsonArray.map(function(obj) {
//   return "<tr><td>" + obj.name + "</td><td>" + obj.marks + "</td><td><button onClick=show('" + obj.name + "')>Show More</button></td></tr>";
// }).join("");

// const finalString = "<table>" + tableString + "</table>";

// console.log(finalString);


//11
// const jsonArray = [
//     { "name": "Mary", "marks": 72 },
//     { "name": "Anita", "marks": 75 },
//     { "name": "Thomas", "marks": 81 },
//     { "name": "Bruce", "marks": 64 }
//   ];
  
//   const tableString = jsonArray.map(function(obj) {
//     return "<tr><td>" + obj.name + "</td><td>" + obj.marks + "</td><td><button onClick=show('" + obj.name + "')>Show More</button></td></tr>";
//   }).join("");
  
//   console.log(tableString);
  
  //12
  // const jsonArray = [
  //   { "fname": "Jack", "lname": "Smith", "city": "London" },
  //   { "fname": "Mary", "lname": "Markle", "city": "Amsterdam" },
  //   { "fname": "Ed", "lname": "May", "city": "Paris" },
  //   { "fname": "Tim", "lname": "Gates", "city": "Rome" }
  // ];
  
  // const citiesArray = jsonArray.map(function(obj) {
  //   return obj.city;
  // });
  
  // console.log(citiesArray);

//13
// let rawData = [{"fname":"Jack","lname":"Smith","city":"London"},
// {"fname":"Mary","lname":"Markle","city":"Amsterdam"},
// {"fname":"Ed","lname":"May","city":"Paris"},
// {"fname":"Tim","lname":"Gates","city":"Rome"}]

// let NameArray = rawData.map(function(obj){
//   return obj.fname + " "+ obj.lname 

// })

// console.log(NameArray)

//14
// const numbers = [5,10, 5,100,50,10];
// let sum = numbers.reduce(function(m,int){
//   return m + int
// },0)
// console.log('sum = ',sum)

// let product = numbers.reduce(function(m,int){
//   return m*int
// },1)
// console.log("Product = ", product)

// let max = numbers.reduce(function(m,int){
//   return m < int ? int : m
// })

// console.log("Max = ",max)

// let min = numbers.reduce(function(m,int){
//   return m > int ? int : m
// })

// console.log("Min = ",min)

// let count = numbers.reduce(function(m,int){
//   return int > 10 ? m+1 : m
// },0)
// console.log("Count = ",count)


//15
// const strings = ["Hello", "World", "facebook", "Chatst", "Array", "String"];
// let concate = strings.reduce(function(m,str){
//   return m +'::'+str
// },"")

// console.log(concate)

// let sum = strings.reduce(function(m,str){
//   return m + str.length
// },0)

// console.log(sum)

// let conc = strings.reduce (function(m,str){
//   return m + str[0]
// },'')
// console.log(conc)

//task 16
// let rawData = [{"name" : "Mark", "age" : 23},
// {"name" : "Steve", "age" : 28},
// {"name" : "Mary", "age" : 25},
// {"name" : "Bill", "age" : 34}]

// let sumofAge = rawData.reduce(function(m,obj){
//   return m + obj.age
// },0)

// console.log("sum of age =", sumofAge)

// let count = rawData.reduce(function(m,obj){
//   return obj.age > 27 ? m+1 : m
// },0)

// console.log("Number = ", count)


// let youngest = rawData.reduce(function(m,obj){
//   return obj.age < m.age  ? obj : m
// })

// console.log(youngest)

// let oldest = rawData.reduce(function(m,obj){
//   return m.age < obj.age ? obj : m
// })

// console.log(oldest)

//task 16.e

// let startM = rawData.reduce(function(m,obj){
//   return obj.name[0] == 'M' ? obj : m
// })

// console.log(startM)

//task 17

let strArray = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"]

// let hastag = strArray.reduce(function(m,str){
//   return m + "#" + str
// },"")

// console.log(hastag)

// let aApp = strArray.reduce(function(m,str){
//   for (let i = 0; i<str.length ;i++){
//     str[i] == 'a' ? m++ : m
//   }
//   return m
// },0)

// console.log(aApp)

//17.3
// let arrL = strArray.reduce(function(m,str){
//     return str.length > m.length ? str : m
//   })
  
//   console.log(arrL)
  
//17.4

// function calRep (ch){
//   let aApp = strArray.reduce(function(m,str){
//     return str[0]==ch ? m+1 : m
    
//   },0)
// console.log(aApp)
// }

// calRep("H")
// calRep("J")
// calRep("A")

//18
let rawData = [{"name":"Jack","maths":55,"english":60,"science":62},
{"name":"Anita","maths":62,"english":65,"science":56},
{"name":"Thomas","maths":68,"english":72,"science":75},
{"name":"Steve","maths":51,"english":56,"science":68},
{"name":"Julia","maths":47,"english":77,"science":72},
{"name":"Mary","maths":72,"english":55,"science":81}]

// let marksMath = rawData.reduce(function(m,obj){
//   return m + obj.maths
// },0)
// console.log("marks = ", marksMath)

// let more60 = rawData.reduce(function(m,obj){
//   return obj.maths > 60 ? m+1 : m
// },0)
// console.log("count = ", more60)

//18.3

// const highestEnglishScorer = rawData.reduce((highest, current) => {
//   return current.english > highest.english ? current : highest;
// });
// console.log(highestEnglishScorer.name); 


// const mathsGreaterThan60 = rawData.reduce((result, current) => {
//   if (current.maths > 60) {
//     result.push(current);
//   }
//   return result;
// }, []);
// console.log(mathsGreaterThan60);

// const totalMarksLessThan200 = rawData.reduce(function(result, current) {
//   const totalMarks = current.maths + current.english + current.science;
//   if (totalMarks < 200) {
//     result.push(current);
//   }
// //   return result;
// // }, []);
// console.log(totalMarksLessThan200);

//19
// const data = [
//   {"fname": "Jack", "lname": "Smith", "city": "London"},
//   {"fname": "Mary", "lname": "Markle", "city": "London"},
//   {"fname": "Ed", "lname": "May", "city": "Paris"},
//   {"fname": "Tim", "lname": "Gates", "city": "Rome"}
// ];

// const countLondonResidents = data.reduce(function(count, person) {
//   return person.city === "London" ? count + 1 : count;
// }, 0);
// console.log(countLondonResidents);

// function countPeopleInCity(arr, city) {
//   return arr.reduce(function(count, person) {
//     return person.city === city ? count + 1 : count;
//   }, 0);
// }
// console.log(countPeopleInCity(data, "London"));
// console.log(countPeopleInCity(data, "Paris"));
// console.log(countPeopleInCity(data, "Rome"));

// function findCityByFirstName(arr, firstName) {
//   const person = arr.find(function(item) {
//     return item.fname === firstName;
//   });
//   return person ? person.city : "City not found";
// }
// console.log(findCityByFirstName(data, "Jack"));
// console.log(findCityByFirstName(data, "Mary"));
// console.log(findCityByFirstName(data, "Ed"));
// console.log(findCityByFirstName(data, "Tim"));
// console.log(findCityByFirstName(data, "John"));

//20
// const cars = [
//   {model: "Swift Dzire VXi", make: "Maruti", fuel: "Diesel", colors: ["White", "Silver", "Blue", "Red"]},
//   {model: "Etios SMi", make: "Toyota", fuel: "Diesel", colors: ["White", "Grey", "Black"]},
//   {model: "City AXi", make: "Honda", fuel: "Petrol", colors: ["Grey", "Blue", "Black"]},
//   {model: "Swift DXi", make: "Maruti", fuel: "Diesel", colors: ["White", "Red", "Black"]},
//   {model: "Etios VXi", make: "Toyota", fuel: "Diesel", colors: ["White", "Silver", "Black", "Yellow"]},
//   {model: "City ZXi", make: "Honda", fuel: "Petrol", colors: ["Silver", "Blue", "Red"]},
//   {model: "Alto SXi", make: "Maruti", fuel: "Petrol", colors: ["White", "Red", "Blue", "Yellow"]},
//   {model: "Alto VXi", make: "Maruti", fuel: "Petrol", colors: ["White", "Silver", "Yellow", "Black"]}
// ];

// function findCarModelsByColor(cars, color) {
//   return cars.filter(function(car) {
//     return car.colors.find(function(c) {
//       return c === color;
//     });
//   }).map(function(car) {
//     return car.model;
//   });
// }

// const color = "Blue";
// const carModels = findCarModelsByColor(cars, color);
// console.log(carModels); 

//21

const students = [
  {"name": "Mary", "marks": [72, 65, 55, 71]},
  {"name": "Anita", "marks": [66, 70, 75, 53]},
  {"name": "Edward", "marks": [44, 54, 64, 58]},
  {"name": "Thomas", "marks": [62, 55, 65, 81]},
  {"name": "Robin", "marks": [41, 44, 47, 49]},
  {"name": "Sophia", "marks": [71, 73, 67, 77]},
  {"name": "Bruce", "marks": [52, 57, 61, 64]}
];

// const sortedByTotalMarks = students.sort(function(a, b) {
//   const totalMarksA = a.marks.reduce(function(sum, mark) {
//     return sum + mark;
//   }, 0);
//   const totalMarksB = b.marks.reduce(function(sum, mark) {
//     return sum + mark;
//   }, 0);
//   return totalMarksA - totalMarksB;
// });
// console.log(sortedByTotalMarks);


// const studentsMoreThan70 = students.filter(function(student) {
//   const maxMark = student.marks.reduce(function(max, mark) {
//     return mark > max ? mark : max;
//   }, 0);
//   return maxMark > 70;
// });
// console.log(studentsMoreThan70.length);



// const highestTotalMarksStudent = students.reduce(function(highest, current) {
//   const totalMarksHighest = highest.marks.reduce(function(sum, mark) {
//     return sum + mark;
//   }, 0);
//   const totalMarksCurrent = current.marks.reduce(function(sum, mark) {
//     return sum + mark;
//   }, 0);
//   return totalMarksCurrent > totalMarksHighest ? current : highest;
// });
// console.log(highestTotalMarksStudent.name);

// const studentsWithTotalMarks = students.map(function(student) {
//   const totalMarks = student.marks.reduce(function(sum, mark) {
//     return sum + mark;
//   }, 0);
//   return {"name": student.name, "totalMarks": totalMarks};
// });
// console.log(studentsWithTotalMarks);

//21.5
// let maxMaks = students.map(function(obj){
//   return obj.marks.reduce(function(m,int){
//     return int > m ? int : m
//   })

// })

// let newArr = []
// for (let i = 0; i<students.length ; i++)
// {
//   let element  = students[i]
//   const newobj = {
//     name:element.name,
//     maxMaks : maxMaks[i]
//   }
//   newArr.push(newobj)
// }

// console.log(newArr)

let sty = "sdasda"
console.log(typeof sty)
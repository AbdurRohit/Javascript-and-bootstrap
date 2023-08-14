//a
const students = [
  {"name":"Dave","js":59,"react":64,"node":67},
  {"name":"George","js":58,"react":82,"node":65},
  {"name":"William","js":51,"react":56,"node":68},
  {"name":"Anita","js":62,"react":65,"node":56},
  {"name":"Thomas","js":68,"react":72,"node":75},
  {"name":"Steve","js":56,"react":51,"node":63},
  {"name":"Julia","js":47,"react":77,"node":72},
  {"name":"Mary","js":72,"react":55,"node":81}
];

let totalMarksJS = 0;
for (const student of students) {
  totalMarksJS += student.js;
}

console.log(totalMarksJS); 
console.log('------------------------'); 
//b
let count = 0;
for (const student of students) {
  if (student.react > 70) {
    count++;
  }
}

console.log(count); 
console.log('------------------------'); 
//c
let highestNodeScore = -Infinity;
let studentWithHighestNodeScore = "";

for (const student of students) {
  if (student.node > highestNodeScore) {
    highestNodeScore = student.node;
    studentWithHighestNodeScore = student.name;
  }
}

console.log(studentWithHighestNodeScore);
console.log('------------------------'); 
//d
const studentsWithScoreAbove60JS = students.filter(student => student.js > 60);
console.log(studentsWithScoreAbove60JS); 
console.log('------------------------'); 
//e
const studentsWithTotalScoreAbove175 = students.filter(student => student.js + student.react + student.node > 175);

console.log(studentsWithTotalScoreAbove175); 
console.log('------------------------'); 
//f
const gradedStudents = students.map(student => {
  return {
    name: student.name,
    js: student.js >= 75 ? "A" : student.js >= 60 ? "B" : "C",
    react: student.react >= 75 ? "A" : student.react >= 60 ? "B" : "C",
    node: student.node >= 75 ? "A" : student.node >= 60 ? "B" : "C"
  };
});

console.log(gradedStudents);
console.log('------------------------'); 





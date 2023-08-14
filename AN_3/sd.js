const jsonData = [
    { empcode: 'A102', name: 'James', age: 37, gender: 'Male', department: 'Finance', designation: 'Manager', salary: 65000 },
    { empcode: 'A106', name: 'Mary', age: 24, gender: 'Female', department: 'Technology', designation: 'Vice-President', salary: 68000 },
    { empcode: 'A122', name: 'Bob', age: 23, gender: 'Male', department: 'Marketing', designation: 'Manager', salary: 51000 },
    { empcode: 'A088', name: 'Julia', age: 33, gender: 'Female', department: 'Finance', designation: 'Vice-President', salary: 70000 },
    { empcode: 'A055', name: 'Steve', age: 27, gender: 'Male', department: 'Technology', designation: 'Manager', salary: 53000 },
    { empcode: 'A208', name: 'Katherine', age: 29, gender: 'Female', department: 'Marketing', designation: 'Manager', salary: 61000 },
    { empcode: 'A181', name: 'Edwards', age: 31, gender: 'Male', department: 'Finance', designation: 'Trainee', salary: 49000 },
    { empcode: 'A029', name: 'Margaret', age: 32, gender: 'Female', department: 'Technology', designation: 'President', salary: 53000 },
    { empcode: 'A029', name: 'Bill', age: 27, gender: 'Male', department: 'Operations', designation: 'Manager', salary: 58000 }
];

function fullDump() {
    main.innerHTML = jsonData.map(obj => {
        return JSON.stringify(obj,'::');
    }).join('<br>');
}

// function filterData(department, designation) {
//     let filteredArray = jsonData;

//     if (department) {
//         filteredArray = filteredArray.filter(employee => employee.department === department);
//     }

//     if (designation) {
//         filteredArray = filteredArray.filter(employee => employee.designation === designation);
//     }

//     return filteredArray;
// }

// // Call the function with department and designation
// const filteredData1 = filterData('Finance', 'Manager');
// console.log('Filtered Data by Department and Designation:', filteredData1);

// // Call the function with department only
// const filteredData2 = filterData('Technology');
// console.log('Filtered Data by Department:', filteredData2);

// // Call the function with designation only
// const filteredData3 = filterData(undefined, 'Vice-President');
// console.log('Filtered Data by Designation:', filteredData3);

// // Original jsonData array remains unchanged
console.log('Original Data:', jsonData);

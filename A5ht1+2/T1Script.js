init()
function init(){
  let str = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="#">Store System</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" onclick="showAllProducts()">Show Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="addProductForm()">Add a Product</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="show2nd()">Show Product-2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="makePurchaseForm()">Purchase</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="stockView()">Stock</a>
      </li>
    </ul>
  </div>
</div>
</nav>

<!-- Main content -->
<div class="container mt-4" id="main-content">

</div>`
document.getElementById('init').innerHTML = str
}
const products = [
  { name: 'Product A', price: 25.99, discount: '2%', supplier: 'Supplier A', delivery: 'Not Available' },
  { name: 'Product B', price: 39.95, discount: '5%', supplier: 'Supplier B', delivery: 'Available' },
  { name: 'Product C', price: 12.49, discount: '5%', supplier: 'Supplier C', delivery: 'Avilabel' },
  { name: 'Product E', price: 8.99, discount: '2%', supplier: 'Supplier D', delivery: 'Not Available' },
  { name: 'Product D', price: 59.00, discount: 'None', supplier: 'Supplier E', delivery: 'Available' },
];
const main = document.getElementById('main-content')//main-div
const disArr = [
  { percentage: '2%', value: 0.02 },
  { percentage: '5%', value: 0.05 },
  { percentage: 'None', value: 0 },
];
const suppliers = ["Supplier A", "Supplier B", "Supplier C", "Supplier D"]

const purchase = [
{
Product: "Product E",
Quantity: 10,
Price: 5.99,
Supplier: "Supplier A"
},
{
Product: "Product C",
Quantity: 25,
Price: 12.49,
Supplier: "Supplier B"
},
{
Product: "Product A",
Quantity: 5,
Price: 2.99,
Supplier: "Supplier A"
}
]
const puProd = [
'Product D','Product E','Product C','Product B','Product A'
]

function removeProduct(index) {
  products.splice(index, 1)
  console.log(products)
  showAllProducts()
}
function makeinput(label, type, value, id, ph) {
  return str = `<label class="form-label">` + label + `</label> <input type="` + type + `" value="` + value + `" class="form-control" id="` + id + `" placeholder="` + ph + `" required>`
}

function editProd(index) {
  let productName = document.getElementById('product-name').value
  let productPrice = document.getElementById('product-price').value
  let productDiscount = document.getElementById('product-discount').value
  let productSupplier = document.getElementById('product-supplier').value
  let productDelivery = document.getElementById('product-delivery').value
  products[index].name = productName
  products[index].price = productPrice
  products[index].discount = productDiscount
  products[index].supplier = productSupplier
  products[index].delivery = productDelivery


  showAllProducts()
}
function addNewPro() {
  let productName = document.getElementById('product-name').value
  let productPrice = document.getElementById('product-price').value
  let productSupplier = document.getElementById('supplierDD').value
  let productDiscount =  disArr.map(obj=>{
    if(document.getElementById(obj.percentage).checked)
        return obj.percentage
  }).join('')
  let productDelivery = ''
  if(document.getElementById('DelCb').checked)
    productDelivery = 'Delivery Available'
  else 
    productDelivery = 'Not Available'

  let newObj = { name: productName, price: productPrice, discount: productDiscount, supplier: productSupplier, delivery:productDelivery  }
  products.push(newObj)
  showAllProducts()
}
//Add product
function addProductForm() {
  main.innerHTML = `<h1>Add Product</h1>
  <div class="mb-3">`+
    makeinput('product name', 'text', '', 'product-name', 'Enter name')
    + `</div>
  <div class="mb-3">`+
    makeinput('Price', 'number', '', 'product-price', 'Enter price')
    + `</div> Discount`+makeRB(disArr)
    + makeDD(suppliers, "Supplier","supplierDD") + `<div class="form-check">
<input class="form-check-input" type="checkbox" value="Deliver" id="DelCb">
<label class="form-check-label" for="flexCheckDefault">
Delivery avilable
</label>
</div>`+
    `<button type="submit" class="btn btn-primary" onclick="addNewPro()">Submit</button>`
}

function makeRB(arr) {
  let str = `<div class="form-check">`
  str+= arr.map(obj=>{
    return `<input class="form-check-input" type="radio" name="flexRadioDefault" id="`+obj.percentage+`" value="`+obj.value+`"> <label class="form-check-label" for="flexRadioDefault1">`+obj.percentage+`</label>`
  }).join('<br>')
  str+=`</div>`
  console.log(str)
  return str
}

function makeDD(arr, text,id) {
  let str = `<select class="form-select" aria-label="Default select example" id = "`+id+`"><option selected disabled>` + text + `</option>`
  str += arr.map(obj => {
    return `<option value="`+ obj + `">` + obj + `</option>`
  })
  str+= `</select>`
  return str
  }
function showAllProducts() {
  main.innerHTML = ` <h1 id="store-system">Store System</h1>
<p>Content related to Store System goes here.</p>

<h1 id="show-product">Show a Product</h1>
<div class="table-responsive">
  <table class="table table-bordered ">
    <thead class="table-primary">
      <tr>
        <th onclick="sortTable1(1)">Product Name</th>
        <th onclick="sortTable1(2)">Price</th>
        <th onclick="sortTable1(3)">Discount</th>
        <th onclick="sortTable1(4)">Supplier</th>
        <th onclick="sortTable1(5)">Delivery</th>
      </tr>
    </thead>
    <tbody id="product-table-body">
  
    </tbody>
  </table>`
  let tableBody = document.getElementById('product-table-body');
  let tableRows = '';
  products.map((product, index) => {
    tableRows += `
    <tr>
      <td>`+ product.name + `</td>
      <td>`+ product.price + `</td>
      <td>`+ product.discount + `</td>
      <td>`+ product.supplier + `</td>
      <td>`+ product.delivery + `</td>
    </tr>
  `;
  });
  tableBody.innerHTML = tableRows;
}

function sortTable1(index){

if(index == 1){
   let srt = products.sort((a, b) => a.name.localeCompare(b.name));
   console.log(srt)
   showAllProducts()
}
else if(index == 2){
 products.sort((a, b) => a.price - b.price);
 showAllProducts()
}
else if(index == 3){
const discountMapping = disArr.reduce((acc, dis) => {
acc[dis.percentage] = dis.value;
return acc;
}, {});
console.log(discountMapping)
products.sort((a, b) => {
const discountA = discountMapping[a.discount];
const discountB = discountMapping[b.discount];
return discountA - discountB;
});
console.log("yes")
showAllProducts()
}
else if(index ==4){
products.sort((a, b) => a.supplier.localeCompare(b.supplier));
showAllProducts()
}
else if(index ==5){
products.sort((a, b) => a.delivery.localeCompare(b.delivery));
showAllProducts()
}
}
//Added this line

// Call the function to generate the table on page load
function show2nd() {
let contentDiv = document.getElementById("main-content");
let employeesHtml = '<h2>Product view 2</h2><ul class="list-group">';
employeesHtml+= `
<div class="row row-cols-3">`
products.map(obj => {
    employeesHtml += '<button class="col" id = "show2" ><li class="list-group-item">';
    employeesHtml += '<strong>Name:</strong> ' + obj.name + '<br>';
    employeesHtml += '<strong>Price:</strong> ' + obj.price + '<br>';
    employeesHtml += '<strong>discount:</strong> ' + obj.discount+'<br>'
    employeesHtml += '<strong>supplier:</strong> ' + obj.supplier+'<br>'
    employeesHtml += '<strong>delivery:</strong> ' + obj.delivery+'<br>'
    employeesHtml += '</li></buttons>';
});
contentDiv.innerHTML = employeesHtml 
}

function makePurchaseForm(){
let contentDiv = document.getElementById("main-content");
contentDiv.innerHTML = 
`<h1>New purchase form</h1>
  <div class="mb-3">Name
  `+ makeDD(puProd,"Product Name","product-name") +
    `
  <div class="mb-3">
    `+ makeinput('Quantity', 'number', '', 'product-quantity', 'Enter quantity') + `
  </div>
  <button onclick="addmakepurchase()" class="btn btn-dark">Submit</button>`
}
function addmakepurchase(){
let name = document.getElementById('product-name').value
let quantity = document.getElementById('product-quantity').value
console.log("Name = ",name)
let object = products.find(obj=>{
  return obj.name === name
})
let price = object.price
let supplier = object.supplier
console.log("price = ",price)
let newObj = {
Product: name,
Quantity: quantity,
Price: price,
Supplier: supplier
}
purchase.push(newObj)
stockView()
}
function stockView(){
let contentDiv = document.getElementById("main-content");
let str1 = `<div class="container mt-5">
<h1>Purchase Table</h1>
<table class="table">
  <thead>
      <th onclick ="sortTable(1)">Product</th>
      <th onclick ='sortTable(2)'>Quantity</th>
      <th onclick ='sortTable(3)'>Price</th>
      <th onclick ='sortTable(4)'>Supplier</th>
    </tr>
  </thead>
  <tbody id="tableBody">
  </tbody>
</table>
</div>`
contentDiv.innerHTML = str1
let table = document.getElementById("tableBody");
let str2 = purchase.map(item =>
  "<tr>" +
    "<td  >" + item.Product + "</td>" +
    "<td  >" + item.Quantity + "</td>" +
    "<td  >" + item.Price + "</td>" +
    "<td  >" + item.Supplier + "</td>" +
  "</tr>"
).join(''); 
table.innerHTML = str2
}
// Function to sort 
function sortTable(index){
if(index == 1){
purchase.sort((a, b) => {
return a.Product.localeCompare(b.Product)
});
stockView()  
}
else if(2){
purchase.sort((a, b) => a.Quantity - b.Quantity);
stockView()  
}
else if(3){
purchase.sort((a, b) => a.Price - b.Price);
stockView()
}
else if(4){
purchase.sort((a, b) => a.Supplier.localeCompare(b.Supplier));
stockView()
}
}

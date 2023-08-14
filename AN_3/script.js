const products = [
    { "prodcode": "PEP122", "prodname": "Pepsi", "price": 12, "category": "Food", "offer": "10%" },
    { "prodcode": "COK238", "prodname": "Coke", "price": 15, "category": "Food", "offer": "15%" },
    { "prodcode": "MIR411", "prodname": "Mirinda", "price": 30, "category": "Food", "offer": "20%" },
    { "prodcode": "RB0277", "prodname": "Red	Bull", "price": 80, "category": "Food", "offer": "None" },
    { "prodcode": "LUX831", "prodname": "Lux", "price": 10, "category": "Soap", "offer": "15%" },
    { "prodcode": "DOV672", "prodname": "Dove", "price": 25, "category": "Soap", "offer": "20%" },
    { "prodcode": "DET810", "prodname": "Dettol", "price": 15, "category": "Soap", "offer": "None" },
    { "prodcode": "PAN590", "prodname": "Pantene", "price": 60, "category": "Shampoo", "offer": "None" },
    { "prodcode": "SUN677", "prodname": "Sunsilk", "price": 48, "category": "Shampoo", "offer": "15%" },
    { "prodcode": "GAR004", "prodname": "Garnier", "price": 75, "category": "Shampoo", "offer": "10%" }
];

const locations = ['Sector	14A', 'Sector	15B', 'Sector	22', 'Pioneer	Chowk']

const deliverySlots = ['Before	10AM', '10AM-12PM', '12PM-2PM', '2PM-4PM', '4PM-6PM', 'After	6PM']
var orders = [
    {
        "custname": "Jack Smith",
        "mobile": "425361434",
        "location": "Sector 14",
        "slot": "12PM-2PM",
        "value": 72.6,
        "items": [
            { "prodcode": "PEP122", "quantity": 2 },
            { "prodcode": "COK238", "quantity": 4 }
        ]
    },
    {
        "custname": "Mary Gomes",
        "mobile": "723476123",
        "location": "Sector 22",
        "slot": "4PM-6PM",
        "value": 130.60,
        "items": [
            { "prodcode": "SUN677", "quantity": 2 },
            { "prodcode": "LUX831", "quantity": 4 },
            { "prodcode": "DET810", "quantity": 1 }
        ]
    },
    {
        "custname": "Tim May",
        "mobile": "835099614",
        "location": "Pioneer Chowk",
        "slot": "Before 10AM",
        "value": 705,
        "items": [
            { "prodcode": "GAR004", "quantity": 6 },
            { "prodcode": "RB0277", "quantity": 3 },
            { "prodcode": "MIR411", "quantity": 2 }
        ]
    }
];
const Quantity = [1,2,3,4,5,6]

let currentOrder = {
    custname: "",
    mobile: "",
    location: "",
    slot: "",
    items: []
};


function makeDD(array, text) {
    let dropdownHtml = "<select id='" + text + "'><option value=''>Select " + text + "</option>";
    array.map(item=>{
        dropdownHtml += "<option value='" + item + "'>" + item + "</option>";
    }) 
    dropdownHtml += "</select>";
    return dropdownHtml;
}

function showProducts() {
    const productsTable = `
        <table>
            <tr>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Offer</th>
            </tr>
            ` + products.map(function (product) {
        return `
                <tr>
                    <td>` + product.prodcode + `</td>
                    <td>` + product.prodname + `</td>
                    <td>` + product.price + `</td>
                    <td>` + product.category + `</td>
                    <td>` + product.offer + `</td>
                </tr>
                `;
    }).join('') + `
        </table>
    `;
    document.getElementById("content").innerHTML = productsTable;
}

function enterOrder() {
    const dropdownsHtml = `
        <label for="custname">Customer Name:</label>
        <input type="text" id="custname"><br>
        <label for="mobile">Mobile Number:</label>
        <input type="text" id="mobile"><br>
        <label for="location">Location:</label>
        ` + makeDD(locations, "Location") + `<br>
        <label for="slot">Delivery Slot:</label>
        ` + makeDD(deliverySlots, "Delivery Slot") + `<br>
        <label for="product">Product:</label>
        ` + makeDD(products.map(function (product) { return product.prodname; }), "Product") + `<br>
        <label for="quantity">Quantity:</label>
        `+makeDD(Quantity, "quantity")+`<br>
        <button onclick="addToOrder()">Add to Order</button>
        <button onclick="cancelOrder()">Cancel Order</button>
        <button onclick="completeOrder()">Order Complete</button>
    `;
    document.getElementById("content").innerHTML = dropdownsHtml;
}

function addToOrder() {
    const selectedProductName = document.getElementById("Product").value;
    const selectedProduct = products.find(function (product) { return product.prodname === selectedProductName; });
    // if (!selectedProduct) return;

    const quantity = parseInt(document.getElementById("quantity").value);
    // if (isNaN(quantity) || quantity <= 0) return;
if(selectedProduct && quantity){
    const existingItem = currentOrder.items.find(function (item) { return item.prodcode === selectedProduct.prodcode; });
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        currentOrder.items.push({
            prodcode: selectedProduct.prodcode,
            quantity: quantity
        });
    }
    updateOrderTable();
}
else{
    alert("Product name or quantity missing !")
    return
}

}


function updateOrderTable() {
    const orderTable = `
        <table>
            <tr>
                <th>Product Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Net Amount</th>
                <th>Remove</th>
            </tr>
            ` + currentOrder.items.map(function (item) {
        const product = products.find(function (prod) { return prod.prodcode === item.prodcode; });
        return `
                    <tr>
                        <td>` + product.prodcode + `</td>
                        <td>` + product.prodname + `</td>
                        <td>` + product.price + `</td>
                        <td>` + item.quantity + `</td>
                        <td>` + product.offer + `</td>
                        <td>` + calculateNetAmount(product, item.quantity) + `</td>
                        <td><button onclick="removeItem('` + product.prodcode + `')">Remove</button></td>
                    </tr>
                `;
    }).join('') + `
        </table>
    `;
    document.getElementById("currenttbl").innerHTML = orderTable;
}

function removeItem(prodcode) {
    currentOrder.items = currentOrder.items.filter(item => item.prodcode !== prodcode);
    updateOrderTable();
}

function calculateNetAmount(product, quantity) {
    const price = product.price;
    const offer = product.offer;
    let discount = 0;

    if (offer !== "None") {
        discount = parseFloat(offer) * price / 100;
    }

    return (price - discount) * quantity;
}

function formValid(){
    let currName = document.getElementById('custname').value
    let mobileNo = document.getElementById('mobile').value
    let location = document.getElementById('Location').value
    let slot = document.getElementById('Delivery Slot').value
    console.log(currName)
    console.log(mobileNo)
    console.log(location)
    console.log(slot)
    if(currName){
        currentOrder.custname = currName
    }
    else{
        alert("Customer name missing !")
    }
    if(mobileNo){
        if(mobileNo.length >= 10 ){ 

            if(!isNaN(mobileNo)){
                currentOrder.mobile = mobileNo
            }
            else{
                alert("Mobile number cannot contain letters/symbols")
            }
        }
        else{   
            alert("Mobile number must be in 10 digits")
        }
    }
    else{
        alert("Customer mobile number missing !")
    }
    if(location){
        currentOrder.location = location
    }
    else{
        alert("Customer location missing !")
    }
    if(slot){
        currentOrder.slot = slot
    }
    else{
        alert("Customer delivery slot missing !")
    }
        
}

function completeOrder() {
    console.log(currentOrder.items.length)
    if (formValid() && currentOrder.items.length > 0) {
        // push to orders array
        console.log("Valid ✔")
        orders.push(currentOrder);
        currentOrder = {
            custname: "",
            mobile: "",
            location: "",
            slot: "",
            items: []
        };
        alert("Order completed successfully ✔")
        showAllOrders()
    } 
    else {
        alert('Order compilation failed ❌')
    }
}

function cancelOrder() {
    currentOrder = {
        custname: "",
        mobile: "",
        location: "",
        slot: "",
        items: []
    };
    document.getElementById("currenttbl").innerHTML = ''
    enterOrder();
}

function showAllOrders() {
    const allOrdersHtml = "<div>" + orders.map(function (order) {
        return "<p>" +
            "Customer Name: " + order.custname + "<br>" +
            "Mobile Number: " + order.mobile + "<br>" +
            "Location: " + order.location + "<br>" +
            "Delivery Slot: " + order.slot + "<br>" +
            "Order Value: " + calculateOrderValue(order).toFixed(2) + "<br>" +
            "Number of Items: " + order.items.length + "<br>" +
            "Order Details:" +
            "<table>" +
            "<tr><th>Product Code</th><th>Product Name</th><th>Quantity</th></tr>" +
            order.items.map(function (item) {
                const product = products.find(function (prod) { return prod.prodcode === item.prodcode; });
                return "<tr><td>" + product.prodcode + "</td><td>" + product.prodname + "</td><td>" + item.quantity + "</td></tr>";
            }).join('') +
            "</table>" +
            "</p>";
    }).join('') + "</div>";
    document.getElementById("currenttbl").innerHTML = ''
    document.getElementById("content").innerHTML = allOrdersHtml;
}

function calculateOrderValue(order) {
    return order.items.reduce((total, item) => {
        const product = products.find(prod => prod.prodcode === item.prodcode);
        return total + calculateNetAmount(product, item.quantity);
    }, 0);
}

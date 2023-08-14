function calculateBill({ price, quantity, discount = 0.05, paymentType = 'Credit Card', ...rest }) {
  let totalCost = price * quantity;
  let discountAmount = totalCost * discount;
  let discountedCost = totalCost - discountAmount;

  let additionalFees =
    paymentType === 'Credit Card' ? discountedCost * 0.02 :
    paymentType === 'Wallet' ? discountedCost * 0.01 :
    paymentType === 'Net Banking' ? discountedCost * 0.005 : 0;

  let totalAmount = discountedCost + additionalFees;

  return { ...rest, totalAmount };
}

// Example usage
const bill1 = calculateBill({ price: 10, quantity: 2, discount: 0.1, paymentType: 'Net Banking' });
console.log(bill1); 
const bill2 = calculateBill({ price: 20, quantity: 3, discount: 0.15, paymentType: 'Wallet' });
console.log(bill2); 
const bill3 = calculateBill({ price: 15, quantity: 1 });
console.log(bill3); 
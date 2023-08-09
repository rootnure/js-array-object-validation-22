const shoppingCart = [
    {itemName: 'Shoe', price: 2490, quantity: 3},
    {itemName: 'Shirt', price: 1490, quantity: 1},
    {itemName: 'Pant', price: 1990, quantity: 2},
    {itemName: 'Belt', price: 1250, quantity: 2},
    {itemName: 'Panjabi', price: 2700, quantity: 1}
];

function totalCost (products) {
    let total = 0;
    for(const product of products) {
        total += product.price * product.quantity;
    }
    return total;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);
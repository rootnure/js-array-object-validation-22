const shoppingCart = [
    {itemName: 'Shoe', price: 2490},
    {itemName: 'Shirt', price: 1490},
    {itemName: 'Pant', price: 1990},
    {itemName: 'Belt', price: 1250},
    {itemName: 'Panjabi', price: 2700}
];

function totalCost (products) {
    let total = 0;
    for(const product of products) {
        total += product.price;
    }
    return total;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);
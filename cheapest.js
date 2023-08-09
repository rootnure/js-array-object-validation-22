// [45, 21, 7, 79, 99];

const allPhones = [
    {brand: 'Samsung', camera: '12MP', storage: '64GB', price: 21000, color: 'Aura Blue'},
    {brand: 'Walton', camera: '8MP', storage: '32GB', price: 16999, color: 'Light Sky Blue'},
    {brand: 'iPhone', camera: '12MP', storage: '128GB', price: 65000, color: 'Red Chary'},
    {brand: 'Xiaomi', camera: '16MP', storage: '128GB', price: 20990, color: 'Midnight black'},
    {brand: 'Oppo', camera: '32MP', storage: '64GB', price: 19999, color: 'Cyan Gray'},
    {brand: 'Nokia', camera: '12MP', storage: '32GB', price: 30000, color: 'Black'},
    {brand: 'HTC', camera: '8MP', storage: '32GB', price: 27999, color: 'Gray'},
    {brand: 'Vivo', camera: '8MP', storage: '64GB', price: 20499, color: 'Golden'}
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for(const phone of phones) {
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(allPhones);
console.log(mySelection);
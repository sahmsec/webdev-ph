

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min.price = phone.price;
        }
    }
    return min;
}

const phones = [
    
    {name: "samsung", price: 45000, model: "S25+" },
    {name: "Iphone", price: 151000, model: "17 Pro Max" },
    {name: "Google Pixel", price: 120000, model: "25 Pro" },
    {name: "samsung", price: 21000, model: "A21" }
]

const cheapestPhone = getCheapestPhone(phones);

console.log("Cheapest phone is: ", cheapestPhone);
function SmartPhone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let iPhone8 = new SmartPhone("Apple","Iphone 8", "$1000");
let samsungNote10 = new SmartPhone("Samsung","Samsung Galaxy Edge 10 Limited Edition", "$1500");

console.log(iPhone8);
console.log(samsungNote10);


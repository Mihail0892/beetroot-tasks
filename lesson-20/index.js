// Створи масив «Список покупок»

const shopList = [
  {
    productName: "milk",
    productAmount: 2,
    buyStatus: "notBuy",
    price: 35,
    summ() {
      return this.price * this.productAmount;
    },
  },
  {
    productName: "eggs",
    productAmount: 20,
    buyStatus: "notBuy",
    price: 1,
    summ() {
      return this.price * this.productAmount;
    },
  },
  {
    productName: "meat",
    productAmount: 2,
    buyStatus: "notBuy",
    price: 130,
    summ() {
      return this.price * this.productAmount;
    },
  },
  {
    productName: "tomatoes",
    productAmount: 1,
    buyStatus: "buy",
    price: 50,
    summ() {
      return this.price * this.productAmount;
    },
  },
  {
    productName: "water",
    productAmount: 2,
    buyStatus: "notBuy",
    price: 12,
    summ() {
      return this.price * this.productAmount;
    },
  },
  {
    productName: "sugar",
    productAmount: 2,
    buyStatus: "buy",
    price: 30,
    summ() {
      return this.price * this.productAmount;
    },
  },
  {
    productName: "rice",
    productAmount: 1,
    buyStatus: "buy",
    price: 40,
    summ() {
      return this.price * this.productAmount;
    },
  },
];

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.+

// const notBuyProduct = shopList.filter(function (item, index, array) {
//   return item.buyStatus === "notBuy";
// });
// console.log(notBuyProduct);

// const buyProduct = shopList.filter(function (item, index, array) {
//   return item.buyStatus === "buy";
// });
// console.log(buyProduct);

// const newShopList = [...notBuyProduct, ...buyProduct];
// console.log(newShopList);

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.+

// const CheckBuyProduct = shopList.filter(function (item, index) {
//    if (item.productName ==="meat"||item.productName ==="water") item.buyStatus = "buy";return item;
// });

// console.log(CheckBuyProduct);

// Створення списку (не) придбаних продуктів.+

// const notBuyProduct = shopList.filter(function (item, index) {
//   return item.buyStatus === "notBuy";
// });
// console.log(notBuyProduct);

// НОРМА
// Видалення продукту зі списку+

// const deleteProduct=shopList.filter(function(item,index){
// 	if (item.productName !== "sugar"){return item};
// })

// console.log (deleteProduct);

// Додавання покупки в список. НЕ СДЕЛАНО!

// function newList(x) { shopList.map(function (item) {
//   if (item.productName === x) {
//     return { ...item, productAmount:item.productAmount + 1};
//   }
//   else  {shopList.push({
//     productName: x,
//     productAmount: 1,
//     buyStatus: "notBuy",
//     price: 40,
//     summ() {
//       return this.price * this.productAmount;
//     },
//   },)}
// return item;})}; 
// console.log(newList("milk"));

// ВТОРАЯ ПОПЫТКА

const newList = shopList.map(function (item) {
  if (item.productName === "milk") {
    return { ...item, productAmount:item.productAmount + 1};
  }
  else  {shopList.push({
    productName: "cola",
    productAmount: 1,
    buyStatus: "notBuy",
    price: 40,
    summ() {
      return this.price * this.productAmount;
    },
  },)}
return item;});
console.log(newList);

// ТРЕТЬЯ ПОПЫТКА

// const newList = shopList.map(function (item) {
//   if (item.productName === "rice") {
//     return { ...item, productAmount:item.productAmount + 1};
//   } return item;
//   else  {shopList.push({
//     productName: "cola",
//     productAmount: 1,
//     buyStatus: "notBuy",
//     price: 40,
//     summ() {
//       return this.price * this.productAmount;
//     },
//   },)}
// });
// console.log(newList);


// МАКСИМУМ
// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

// const summTotal = shopList.reduce((acc, item) => acc + item.summ(), 0);
// console.log(summTotal);

// Підрахунок суми всіх (не) придбаних продуктів.

// const notBuyItems = shopList.filter((item) => item.buyStatus === 'notBuy');
// const notBuyTotal = notBuyItems.reduce((acc, item) => acc + item.summ(), 0);
// console.log(notBuyItems);
// console.log(notBuyTotal);

// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого)

// function sortList (x, y) {
//   if (x==='fromMinToMax') y.sort((a, b) => a.summ() - b.summ());
// 	if (x==='fromMaxToMin') y.sort((a, b) => b.summ() - a.summ());
// 	return y;
// }

// console.log(sortList('fromMinToMax', shopList));

// console.log(shopList);






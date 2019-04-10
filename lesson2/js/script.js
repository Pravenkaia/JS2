const list = new GoodsList(GOODS);
list.render();


//корзина
const cart = new Cart();
//сумма корзины
console.log('Сумма корзины: ' + cart.calcSum());

console.log('Кол-во товаров в корзине: ' + cart.calcAmount());

document.getElementById('divCart').innerHTML = `<p>Кол-во товаров в корзине: ${cart.calcAmount()}</p><p>Сумма корзины: ${cart.calcSum()}  р.</p> ` ;
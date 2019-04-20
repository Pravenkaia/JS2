// корзина
const cart = new Cart();
cart.fetchGoods();

// слушатель кликов по div модального окна корзины
document.getElementById('cart_window').addEventListener('click', (e) => {
    e = e || event;
    var target = e.target || e.srcElement;

    //console.log(target);
    //console.log(target.id);

    if (target.id) {
        let arrId = target.id.split('-');
        console.log('arrId ' + arrId);
        switch (arrId[0]) {
            case 'plus':
                cart.addAmount(arrId[1], 1);
                break;
            case 'minus':
                cart.addAmount(arrId[1], -1);
                break;
            case 'del':
                cart.delGood(arrId[1]);
                break;
            default:
                console.log('Не сработал ни один клик по окну корзины');
        }
    }

});

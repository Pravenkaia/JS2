const list = new GoodsList();
list.fetchGoods();



//list.fetchGoods((goods) => {
//    list.render();
//});


// слушатель кликов по кнопке "добавить в корзину" списка товаров на странице
document.getElementById('goods-list').addEventListener('click', (e) => {
    e = e || event;
    var target = e.target || e.srcElement;

    //console.log(target);
    //console.log(target.id);
    
    if (target.id) {
        let arrId = target.id.split('addToCart_');
        let id = +arrId[1];
        console.log(id);
        if (!cart) new Cart();
        cart.addAmount(id, 1);
    }

});


const list = new GoodsList();
//list.fetchGoods();


//  С обычным callback
// list.fetchGoods((goods) => {
//    list.render();
// });


// слушатель кликов по кнопке "добавить в корзину" списка товаров на странице
document.getElementById('goods-list').addEventListener('click', (e) => {
    e = e || event;
    var target = e.target || e.srcElement;

    //console.log(target);
    //console.log(target.id);

    if (target.id) {
        let arrId = target.id.split('addToCart_');

        let idOfGood = +arrId[1];
        if (idOfGood > 0) {
            //console.log(idOfGood);
            if (!cart) cart = new Cart();
            cart.addAmount(idOfGood, 1);
        }
    }

});

// слушатель кнопки поиск
let searchButton = document.getElementById('search-button');
if (searchButton)
    searchButton.addEventListener('click', (e) => {
        let searchInput = document.getElementById('search-input');
        if (searchInput) {
            const inputValue = searchInput.value;
            //alert(inputValue);
            //searchInput.value = '';
            list.goods = list.filterGoods(inputValue);
            list.render();

        }
    });

class GoodsList {
    constructor(list) {
        this.goods = [];
        //this.goods = this.fetchGoods();
    }



    fetchGoods() {

        makeGETRequest(`${API_URL}/catalogData.json`)
            .then(response => {
                this.goods = JSON.parse(response);
                //console.log(this.goods);
            })
            .then(() => this.render())
            .catch((error) => {
                throw new Error(`${error}! ААААА! ошибка вывода списка товаров на страницу`);
            });

    }

// вывод товаров на страницу
    render() {
        let listHtml = '';
        this.goods.map(good => {
            // создает новый объект GoodsItem для каждого товара
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
            // вывод объекта товара на страницу
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    //С обычным fllback
    //fetchGoods(callback_render) {
    //
    //    var ajaxReqest =
    //    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
    //        this.goods = JSON.parse(goods);
    //        // только после выполнения  можно применять другие методы
    //        callback_render();
    //    });
    //    
    //}
}

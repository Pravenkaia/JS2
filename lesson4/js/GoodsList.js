class GoodsList {
    constructor(list) {
        this.goods = [];
        this.goods = this.fetchGoods();
    }



    fetchGoods() {

        makeGETRequest(`${API_URL}/catalogData.json`)
            .then(response => {
                this.goods = JSON.parse(response);
                this.searchGoods = JSON.parse(response);
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
        if (!listHtml) listHtml = '<p align=center><br><br>Ничего не найдено</p><br><br><br><br><br>';
        document.querySelector('.goods-list').innerHTML = listHtml;
    }



    // поиск
    // слушатель кнопки поиск находится в js/script.js
    filterGoods(value) {
        let newArr = [];
        if (value) {
            let regexp = new RegExp(value, 'i');
            this.goods = this.goods.filter((item) => {
                // ищем образец целиком без учета регистра с флагом i
                if (regexp.test(item['product_name'])) {
                    // alert(item['product_name']);
                    return item;
                }
            })
            return this.goods;
        }
        return this.goods;
    }



    // С обычным callback
    // fetchGoods(callback_render) {
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

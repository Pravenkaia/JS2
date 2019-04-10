class GoodsList {
    constructor(list) {
        this.goods = [];
        this.goods = this.setGoods(list);
    }
    
    
    setGoods(list) {
        // какие-то преобразования с заданным массивом
        // если этот массив нужно изменить
        // например, удалить пустые элементы
        return list.filter(el => {
            if (Object.keys(el).length) return el;
        });
    }
    
    
    render() {
        let listHtml = '';
        this.goods.map(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

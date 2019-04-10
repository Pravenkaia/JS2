class Cart {
    constructor() {
        this.goodsList = this.setGoods(GOODS); // 
        this.sum = 0; // сумма корзины
        this.goodsAmount = 0; //кол-во товаров в корзине
    }

    setGoods(list) {
        return list.filter(el => {
            if (Object.keys(el).length) return el;
        });
    };

    getGoods() {
        return this.goodsList;
    };

    //calcSum() {
    //    return this.goodsList.reduce(function (sum, currentItem) {
    //        //console.log(sum);
    //        return sum + currentItem.amount*currentItem.price;
    //    }, 0);
    //    
    //};
    //
    
    // переписала стрелочной функцией... Ура!
    // сумма корзины
    calcSum() {
        return this.goodsList.reduce((sum, currentItem) =>  sum + (+currentItem.amount)*(+currentItem.price), 0);
    };
    
    // 
    calcAmount() {
        return this.goodsList.reduce((sum, currentItem) =>  sum + (+currentItem.amount), 0);
    };
    
    // удалить товар
    delGood(id) {};
    
    // уменьшить кол-во товара
    reduceAmount(id) {};
    
    // увеличить кол-во товара
    addAmount(id) {};
    
    // изменить кол-во товара
    changeAmount(id, newAmout) {};
    

}

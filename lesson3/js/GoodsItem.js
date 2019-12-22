class GoodsItem {
    constructor(id_product = 1, product_name = 'Не задан', price = 0, img = GOODS_IMG) {
        this.product_name = product_name;
        this.id_product = id_product;
        this.price = price;
        this.img = img; // GOODS_IMG определена в config.js

    }

    render() {
        return `<div class="goods-item"><div class="card"><img  class="card-img-top" alt="${this.product_name}" src="${this.img}"><div class="card-body"><h3 class="card-title"> ${this.product_name} </h3><p> ${this.price} </p><p><button type="button" class="btn btn-warning add-to-cart" id="addToCart_${this.id_product}">Добавить в корзину</button></p></div></div></div>`;

    }
}

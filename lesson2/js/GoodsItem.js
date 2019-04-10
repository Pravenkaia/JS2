class GoodsItem {
    constructor(title = 'Не задан', price = 0, img = GOODS_IMG) {
        this.title = title;
        this.price = price;
        this.img = img; // GOODS_IMG определена в config.js

    }

    render() {
        return `<div class="goods-item"><div class="card"><img  class="card-img-top" alt="${this.title}" src="${this.img}"><div class="card-body"><h3 class="card-title"> ${this.title} </h3><p> ${this.price} </p></div></div></div>`;

    }
}

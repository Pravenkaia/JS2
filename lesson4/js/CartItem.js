class CartItem {
    
    constructor(id_product = 1, product_name = 'Не задан', price = 0, quantity = 1, img = GOODS_IMG) {
        this.id_product = id_product
        this.product_name = product_name;
        this.price = price;
        this.quantity = quantity;
        this.img = img; // GOODS_IMG определена в config.js
}

    render() {
        // отключаем событие мыши на кнопке "-", если кол-во товара == 1
        // обавляем название класса к div c id="minus-..."
        let disabled = '';
        if (this.quantity == 1)  disabled = ' disabled-button';
        
        //делаю с плюсами, чтобы видеть структуру
        return `<div class="row">` +
            `<div class="col-sm-1">` + 
            `<img  class="img-in-cart" alt="${this.product_name}" src="${this.img}">` + 
            `</div>` +
            `<div class="col-sm-3">${this.product_name}</div>` +
            `<div class="col-sm-2">${this.price}</div>` +
            `<div class="col-sm-1${disabled}"><i class="far fa-minus-square" id="minus-${this.id_product}"></i></div>` +
            `<div class="col-sm-1">${this.quantity}</div>` +
            `<div class="col-sm-1"><i class="far fa-plus-square" id="plus-${this.id_product}"></i></div>` +
            `<div class="col-sm-2">${this.quantity*this.price}</div>` +
            `<div class="col-sm-1"><i class="far fa-trash-alt" id="del-${this.id_product}"></i></div>` +
            `</div><hr>`;
    }
}
// глификонки  + <i class="far fa-plus-square"></i>
        // - <i class="far fa-minus-square"></i>

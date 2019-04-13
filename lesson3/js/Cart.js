class Cart {

    constructor() {
        // совершенно лишние данные в файле getBasket.json
        // вместо отдельных полей на сумму корзины и кол-во товаров 
        // нужны "user" : "Вася" и "user_id" : "123"

        this.cart = this.fetchGoods();
        this.amount = 0; // сумма корзины
        this.countGoods = 0; //кол-во товаров в корзине
        this.goodsList = [];

    }

    // присваиваем значения свойствам Cart
    setCartItems(list) {
        this.amount = this.cart['amount'];
        console.log(`this.amount: ${this.amount}`);
        this.countGoods = this.cart['countGoods'];
        this.goodsList = this.cart['contents'];
        console.log('this.goodsList[0].id_product ' + this.goodsList[0].id_product);

    }

    // парсим файл с сервера getBasket.json
    fetchGoods() {

        makeGETRequest(`${API_URL}/getBasket.json`)
            .then(response => {
                this.cart = JSON.parse(response);
                console.log('this.cart ' + this.cart['amount']);
            })
            .then(() => this.setCartItems(this.cart))
            .then(() => this.calcAmount())
            .then(() => this.calcCountGoods())
            .then(() => this.renderAmount())
            .then(() => this.renderList())
            .then(() => this.render())
            .catch((error) => {
                throw new Error(`${error}! В корзине проблемы!`);
            });

    }


    getGoods() {
        return this.goodsList;
    };

    // возвращает строку JSON для отправки на сервер
    getCartToJson() {
        this.cart['amount'] = this.amount;
        this.cart['countGoods'] = this.countGoods;
        this.cart['contents'] = this.goodsList;
        return JSON.stringify(this.Cart);
    };



    // сумма корзины
    calcAmount() {
        this.amount = this.goodsList.reduce((sum, currentItem) => sum + (+currentItem.quantity) * (+currentItem.price), 0);

        return this.amount;
    };

    // кол-во товаров в корзине
    calcCountGoods() {
        this.countGoods = this.goodsList.reduce((sum, currentItem) => sum + (+currentItem.quantity), 0);

        return this.countGoods;
    };

    // выводит на странице в кнопку кол-во таров в корзине 
    renderAmount() {
        document.getElementById('cart-item-number').innerHTML = this.countGoods;
    }

    // выводит в окно корзины товаров  сумму и кол-во товаров
    render() {
        document.getElementById('cart-results').innerHTML = `<p>Кол-во товаров в корзине: ${this.countGoods}</p><p>Сумма корзины: ${this.amount}  р.</p> `;

        // сумма корзины
        console.log('Сумма корзины: ' + this.amount);
        // кол-во товаров
        console.log('Кол-во товаров в корзине: ' + this.countGoods);
    }

    // выводит список товаров  в окно корзины товаров
    renderList() {
        let listHtml = '';
        this.goodsList.map(good => {
            // создается новый объект CartItem для товара в корзине: 
            const goodItem = new CartItem(good.id_product, good.product_name, good.price, good.quantity);

            listHtml += goodItem.render();

        });
        document.getElementById('cart-list').innerHTML = listHtml;

    }




    // увеличить кол-во товара
    addAmount(id, howMany = 1) {

        this.goodsList.forEach(function (item, i) {

            if (item.id_product == id) {

                this.goodsList[i].quantity += howMany;

                console.log('this.goodsList[i].quantity ' + this.goodsList[i].quantity);
                this.calcCountGoods();
                this.calcAmount();

                // выполняем передаем данные  ТАК?????
                // makePOSTRequest(`${API_URL}/addToBasket.json`, this.getCartToJson())
                // сервер их обрабатывает, возвращает новый файл getBasket.json и к нему снова обратиться...

                // заглушка действия на сервере
                makeGETRequest(`${API_URL}/addToBasket.json`)
                    .then(response => {
                        let result = JSON.parse(response);
                        if (result.result === 1) {
                            console.log('add result.result = ' + result.result);
                        }
                    })

                    //.then(() => this.fetchGoods()) // в реальности снова загружаем обновленную корзину
                    .then(() => this.renderAmount())
                    .then(() => this.renderList())
                    .then(() => this.render())
                    .catch((error) => {
                        throw new Error(`${error}! Не пудалось добавить товар в корзину!`);
                    });

            }
        }.bind(this));
    };



    // удалить товар
    delGood(id) {
        this.goodsList.forEach(function (item, i) {

            if (item.id_product == id) {

                this.goodsList.splice(i, 1);

                this.calcCountGoods();
                this.calcAmount();

                // выполняем передаем данные  ТАК?????
                // makePOSTRequest(`${API_URL}/addToBasket.json`, this.getCartToJson())
                // сервер их обрабатывает, возвращает новый файл getBasket.json и к нему снова обратиться...

                // заглушка действия на сервере
                makeGETRequest(`${API_URL}/deleteFromBasket.json`)
                    .then(response => {
                        let result = JSON.parse(response);
                        if (result.result === 1) {
                            console.log('del result.result = ' + result.result);
                        }
                    })

                    //.then(() => this.fetchGoods()) // в реальности снова загружаем обновленную корзину
                    .then(() => this.renderAmount())
                    .then(() => this.renderList())
                    .then(() => this.render())
                    .catch((error) => {
                        throw new Error(`${error}! Не пудалось удвлить товар из корзины!`);
                    });
            }

        }.bind(this));
    };



    // изменить кол-во товара
    changeAmount(id, newAmout) {};


}

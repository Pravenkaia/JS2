'use strict';
// Фэйк АПИ
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        addCartUrl: '/addToBasket.json',
        products: [],
        filteredProducts: [],
        imgCatalog: 'http://placehold.it/250x150',
        imgCart: 'http://placehold.it/250x150',
        searchLine: '',
        cartProducts: [],
        showCart: false,
        cartAmount: 0,
        cartQuantity: 0,
        errorAjax: ''
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                this.ajaxError()
                })

        },
        ajaxError() {
            this.errorAjax = 'Ошибка соединения с сервером';
            //console.log(error)
        },
        setInitialFilteredProducts() {
            this.filteredProducts = this.products;
            //console.dir(this.filteredProducts);
        },
        addProduct(product) {
            // обращаемся к заглушке
            this.getJson(`${API + this.addCartUrl}`)
                .then(data => {
                    if (data.result) {
                        let findProd = this.cartProducts.find(el => el.id_product === product.id_product);
                        if (findProd) {
                            findProd.quantity++;
                        } else {
                            let createProd = Object.assign({
                                quantity: 1
                            }, product);
                            this.cartProducts.push(createProd);
                        }
                        this.calcCountGoods();
                        this.calcAmount();
                    }
                })
        },
        minusProduct(product) {
            // обращаемся к заглушке
            this.getJson(`${API + this.addCartUrl}`)
                .then(data => {
                    if (data.result) {
                        if (product.quantity > 1) {
                            product.quantity--;
                        }
                        this.calcCountGoods();
                        this.calcAmount();
                    }
                    return false;
                });
        },
        // удалить товар
        delProduct(product) {
            // обращаемся к заглушке
            this.getJson(`${API + this.addCartUrl}`)
                .then((data) => {
                    if (data.result) {
                        this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
                        this.calcCountGoods();
                        this.calcAmount();
                    }
                });
        },
        // кол-во товаров в корзине
        calcCountGoods() {
            this.cartQuantity = this.cartProducts.reduce((sum, currentItem) => sum + (+currentItem.quantity), 0);

            return this.cartQuantity;
        },
        // сумма корзины
        calcAmount() {
            this.cartAmount = this.cartProducts.reduce((sum, currentItem) => sum + (+currentItem.quantity) * (+currentItem.price), 0);

            return this.cartAmount;
        },
        // поиск
        FilterGoods() {
            console.log('searchLine() : ' + this.searchLine);
            if (this.searchLine) {
                let regexp = new RegExp(this.searchLine, 'i');
                this.filteredProducts = this.products.filter((item) => {
                    // ищем образец целиком без учета регистра с флагом i
                    if (regexp.test(item['product_name'])) {
                        console.log(item['product_name']);
                        return item;
                    }
                })
                this.searchLine = '';
                return this.filteredProducts;
            }
            this.searchLine = '';
            return this.filteredProducts = this.products;

        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        
        this.setInitialFilteredProducts();

        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                console.log(data['amount']);
                this.cartProducts = data['contents'];
                this.cartAmount = data['amount'];
                this.calcCountGoods();
                console.dir(this.cartProducts);
            });


        //this.getJson(`getProducts.json`)
        //    .then(data => {
        //        for (let el of data) {
        //            this.products.push(el)
        //        }
        //    });

        //this.filteredProducts = this.products;

    }
});

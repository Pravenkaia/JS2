Vue.component('cart', {

    data() {
        return {
            cartitems: [],
            img: 'https://placehold.it/50x100',
            cartUrl: '/getBasket.json',
            addCartUrl: '/addToBasket.json',
            error: '',
            showCart: false,
            cartAmount: 0,
            cartQuantity: 0,
        }
    },

    getCartQuantity() {
        return this.cartQuantity;
    },
    toggleShowCart() {
        return !this.showCart;
    },
    methods: {

        add(product) {
            // обращаемся к заглушке
            this.$parent.getJson(`${API + this.addCartUrl}`)
                .then(data => {
                    if (data.result) {
                        let findProd = this.cartitems.find(el => el.id_product === product.id_product);
                        if (findProd) {
                            findProd.quantity++;
                        } else {
                            let createProd = Object.assign({
                                quantity: 1
                            }, product);
                            this.cartitems.push(createProd);
                        }
                        this.calcCountGoods();
                        this.calcAmount();
                    }
                })
        },
        minus(product) {
            // обращаемся к заглушке
            this.$parent.getJson(`${API + this.addCartUrl}`)
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
        del(product) {
            // обращаемся к заглушке
            this.$parent.getJson(`${API + this.addCartUrl}`)
                .then((data) => {
                    if (data.result) {
                        this.cartitems.splice(this.cartitems.indexOf(product), 1);
                        this.calcCountGoods();
                        this.calcAmount();
                    }
                });
        },
        // кол-во товаров в корзине
        calcCountGoods() {
            this.cartQuantity = this.cartitems.reduce((sum, currentItem) => sum + (+currentItem.quantity), 0);

            return this.cartQuantity;
        },
        // сумма корзины
        calcAmount() {
            this.cartAmount = this.cartitems.reduce((sum, currentItem) => sum + (+currentItem.quantity) * (+currentItem.price), 0);

            return this.cartAmount;
        },
        // видимость корзины
        toggleCart() {
            this.showCart = !this.showCart;
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.cartUrl}`)
            .then(response => {

                this.cartitems = response['contents'];
                this.cartAmount = response['amount'];
                this.calcCountGoods();
                console.dir(this.cartitems);
                console.log(response['amount']);
                console.log(this.cartQuantity);

            });
    },
    template: `<div>
   <!--Кнопка корзины товаров-->
    <button ref="cart" @click="showCart = !showCart" class="cart-button btn btn-default btn-lg " type="button" id="open-cart-window"><i class="fas fa-cart-arrow-down"></i>&nbsp;<span id="cart-item-number">{{ cartQuantity }}</span>
    </button>
    <!======================-->

    <!--внешнее модальное окно -->
    <div v-show="showCart" id="cart-window" class="modal-window">

        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Ваши товары в корзине</h5>
                    <button @click="showCart = !showCart" type="button" class="close close-cart-window" data-dismiss="modal" id="close-cart-window">
                        <i class="fas fa-times close-cart-window"></i>
                    </button>
                </div>


                <div class="modal-body">
                    <div v-if="cartitems.length" class="row">

                        <cart-item v-for="cartitem of cartitems" :key="cartitem.id_product" :img="img" :cartitem="cartitem" @add="add" @minus="minus" @del="del"></cart-item>
                    </div>

                    <error-ajax v-else-if="error" :error="error" class="modal-body"></error-ajax>

                    <div v-else class="modal-body">
                        <h3>Нет данных!</h3>
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="showCart = !showCart" type="button" class="btn btn-secondary close-cart-window" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary">Оформить покупку</button>
                </div>
            </div>
        </div>
        
    </div>
    <!--внешнее модальное окно -->

</div>`

});




Vue.component('cart-item', {
    props: ['cartitem', 'img'],

    methods: {
        disabled(m) {
            if (m === 1) return 'buy-btn disabled-button';
            return 'buy-btn';
        }
    },
    mounted() {
        this.disabled()
    },
    template: `<div class="card">
                        <img 
                            :src="img" 
                            :alt=cartitem.product_name :title=cartitem.product_name>
                        <div class="desc">
                            <h3> {{ cartitem.product_name }} </h3>
                            <p> {{ cartitem.price }} </p>
                            <p> {{ cartitem.quantity }} </p>
                            <p> {{ cartitem.quantity*cartitem.price }} </p>
                            <button type="button" @click="$emit('add', cartitem)" class="buy-btn">+</button>
                            <button @click="$emit('minus', cartitem)" :class=disabled(cartitem.quantity)>-</button>
                            <button  @click="$emit('del', cartitem)">Del</button>
                        </div>
                </div>`
});

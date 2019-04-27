Vue.component('products', {
    props: ['products', 'img', 'error'],
    template: `<div class="container fluid">
                    <div v-if="products.length" class="products row align-items-start justify-content-center" id="products">

                        <product 
                        class="product-item" 
                        v-for="product of products"
                        :key="product.id_product"
                        :img="img"
                        :product="product">
                        </product>
                    </div>

                    <error-ajax v-else-if="error" :error="error"></error-ajax>

                    <div v-else class="empty">
                        <h3>Нет данных</h3>
                    </div>
                </div>`
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="card">
                        <img class="card-img-top" :src="img" :alt=product.product_name :title=product.product_name>
                        <div class="desc">
                            <h3> {{ product.product_name }} </h3>
                            <p> {{ product.price }} </p>
                            <button type="button" class="btn btn-warning add-to-cart" @click="$parent.$emit('add-product', product)">Добавить в корзину</button>
                        </div>
                </div>
`
});

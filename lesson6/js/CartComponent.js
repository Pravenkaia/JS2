Vue.component('cart', {
    props: ['cartitems', 'img', 'error'],
    template: `<div  class="modal-body">
                    <div v-if="cartitems.length" class="row">
                        <cart-item
                        v-for="cartitem of cartitems" :key="cartitem.id_product"
                        :img="img"
                        :cartitem="cartitem"></cart-item>
                    </div>

                    <error-ajax v-else-if="error" :error="error" class="modal-body"></error-ajax>

                    <div v-else class="modal-body">
                        <h3>Пусто? Выбирайте! </h3>
                    </div>
              </div>`

});

Vue.component('cart-item', {
    props: ['cartitem', 'img'],
    template: `<div class="card">
                        <img 
                            :src="img" 
                            :alt=cartitem.product_name :title=cartitem.product_name>
                        <div class="desc">
                            <h3> {{ cartitem.product_name }} </h3>
                            <p> {{ cartitem.price }} </p>
                            <p> {{ cartitem.quantity }} </p>
                            <p> {{ cartitem.quantity*cartitem.price }} </p>
                            <button type="button" @click="$parent.$emit('add-product', cartitem)" class="buy-btn">+</button>
                            <button @click="$parent.$emit('minus-product', cartitem)" class="buy-btn">-</button>
                            <button class="buy-btn" @click="$parent.$emit('del-product', cartitem)">Del</button>
                        </div>
                </div>`
});

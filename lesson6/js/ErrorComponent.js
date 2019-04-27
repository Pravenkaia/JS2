Vue.component('error-ajax', {
    props: ['error'],
    template: `<div class="error">
                    <h3> {{ error }} </h3>
             </div>`
});

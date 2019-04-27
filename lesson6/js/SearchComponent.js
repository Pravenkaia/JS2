Vue.component('search-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
     id="search-input" class="search-input form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
  `
})
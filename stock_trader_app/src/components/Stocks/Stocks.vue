<template>
  <div>
    <app-stock v-for="stock in stocks"></app-stock>
  </div>
</template>
<script>
  import Stock from './Stock.vue';
  export default {
    components: {
      appStock: Stock
    },
    data(){
      return {
        stocks: [
          { id: 1, name: 'Google', price: 100},
          { id: 2, name: 'Amazon', price: 100},
          { id: 3, name: 'Twitter', price: 100},
          { id: 4, name: 'Facebook', price: 100}
        ]
      }
    }
  }
</script>

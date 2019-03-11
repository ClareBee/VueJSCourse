<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">{{ stock.name }}</h3>
        <small class="card-subtitle">{{ stock.price }}</small>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity">
          <button
            class="btn btn-success float-right m-2"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0">
            {{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['stock'],
    data(){
      return {
        quantity: 0
      }
    },
    computed: {
      funds(){
        return this.$store.getters.funds;
      },
      insufficientFunds(){
        const price = this.quantity * this.stock.price;
        console.log(price)
        return price > this.funds;
      }
    },
    methods: {
      buyStock(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>

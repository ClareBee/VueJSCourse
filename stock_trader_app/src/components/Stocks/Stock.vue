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
            :disabled="quantity <= 0">Buy</button>
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
    methods: {
      buyStock(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        console.log(order)
        this.quantity = 0;
      }
    }
  }
</script>

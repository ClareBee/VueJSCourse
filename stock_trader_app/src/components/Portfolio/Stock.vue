<template>
<div class="col-sm-6 col-md-4">
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{ stock.name }}</h3>
      <small class="card-subtitle">Price:{{ stock.price }}, Quantity:{{ stock.quantity }}</small>
    </div>
    <div class="card-body">
      <div class="form-group">
        <input
          type="number"
          class="form-control"
          placeholder="Quantity"
          v-model="quantity"
          :class="{danger: insufficientQuantity}">
        <button
          class="btn btn-success float-right m-2"
          @click="sellStock"
          :disabled="insufficientQuantity || quantity <= 0">
          {{ insufficientQuantity ? 'Not Enough' : 'Sell'}}
        </button>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.danger {
  border: 1px solid red;
}
</style>
<script>
  import { mapActions } from 'vuex';
  export default {
    props: ['stock'],
    data(){
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity(){
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions({
        placeOrder: 'sellStock'
      }),
      sellStock(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.placeOrder(order);
        this.quantity = 0;
      }
    }
  }
</script>

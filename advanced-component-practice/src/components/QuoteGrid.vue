<template>
  <div class="row">
    <quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</quote>
  </div>
</template>
<script>
  import Quote from './Quote.vue';
  export default {
    props: ['quotes'],
    components: {
      quote: Quote
    },
    methods: {
      deleteQuote(index){
        this.$emit('quoteDeleted', index);
      }
    }
  }
</script>
<style></style>

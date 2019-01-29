<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <app-quote>
                <h2>A wonderful quotation</h2>
              </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    export default {
      data: function(){
        return {
          maxQuotes: 10,
          quotes: [
            'just to render sth'
          ]
        }
      },
      components: {
        appQuote: Quote
      }
    }
</script>

<style>
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <quote-grid :quotes="quotes"></quote-grid>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
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
        quoteGrid: QuoteGrid
      }
    }
</script>

<style>
</style>

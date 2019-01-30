<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <!-- listen to the quoteAdded event emitted by NewQuote component  -->
              <new-quote @quoteAdded="newQuote"></new-quote>
              <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
              <div class="row">
                <div class="col-sm-12 text-center">
                  <div class="alert alert-info">Click on a quotation to delete it</div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    export default {
      data: function(){
        return {
          maxQuotes: 10,
          quotes: [
            'just to render sth'
          ]
        }
      },
      methods: {
        // Vue implicitly passes in the data even though line 5 doesn't have params
        newQuote(quote){
          this.quotes.push(quote);
        },
        deleteQuote(index){
          this.quotes.splice(index, 1);
        }
      },
      components: {
        quoteGrid: QuoteGrid,
        newQuote: NewQuote
      }
    }
</script>

<style>
</style>

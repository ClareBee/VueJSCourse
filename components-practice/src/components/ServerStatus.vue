<template>
  <div class="row">
      <div class="col-xs-12">
          <header>
              <h1>Server Status: {{ date }}</h1>
          </header>
      </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        date: new Date().getFullYear()
      }
    }
  }
</script>

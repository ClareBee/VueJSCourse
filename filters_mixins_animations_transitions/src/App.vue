<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUpperCase }}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <app-list></app-list>

                <app-animation></app-animation>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import AnimationExample from './AnimationExample.vue';
    import { fruitMixin } from './fruitMixin.js';
    export default {
      data(){
        return {
          text: 'Hello world'
        }
      },
      filters: {
        toUpperCase(value){
          return value.toUpperCase();
        }
      },
      components: {
        appList: List,
        appAnimation: AnimationExample
      },
      mixins: [fruitMixin]
    }
</script>

<style>

</style>

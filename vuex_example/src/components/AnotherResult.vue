<template>
  <div>
    <p>Double Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringContent }}</p>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
      computed: mapGetters([
        'doubleCounter', 'stringContent'
      ])
      //   counter(){
      //     return this.$store.getters.doubleCounter;
      //   },
      //   clicks(){
      //     return this.$store.getters.stringContent;
      //   }
      // }
    }
</script>

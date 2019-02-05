<template>
  <div>
    <h1>Animations</h1>
    <button @click="show = !show" class="btn btn-primary">Show alert</button>
    <br /><br />
    <transition name="fade">
      <div v-if="show" class="alert alert-info">This is some info</div>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show: false
    }
  }
}
</script>
<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
    /* no need to specify 1 as fade-enter gets removed and 1 is default */
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>

<template>
  <div>
    <h1>Animations</h1>
    <button @click="show = !show" class="btn btn-primary">Show alert</button>
    <br /><br />
    <transition>
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
</style>

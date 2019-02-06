<template>
  <div>
    <h1>Animations</h1>
    <hr>
    <select v-model="alertAnimation" class="form-control">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </select>
    <br />
    <button @click="show = !show; launch = !launch" class="btn btn-primary">Show alert</button>
    <br /><br />
    <transition :name="alertAnimation">
      <div v-if="show" class="alert alert-info">This is some info</div>
    </transition>
    <transition :name="alertAnimation" type="animation">
      <div v-if="show" class="alert alert-info">This is some info</div>
    </transition>
    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
      appear>
      <div v-if="launch" class="alert alert-info">This is some info</div>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show: false,
      launch: true,
      alertAnimation: 'fade'
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
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    /* forwards keeps the animation in its end state  */
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity .5s;
    opacity: 0;
  }
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>

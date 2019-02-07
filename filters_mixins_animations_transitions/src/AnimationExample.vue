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
    <transition :name="alertAnimation" mode="out-in">
      <div v-if="show" key="info" class="alert alert-info">This is some info</div>
      <div v-else key="warning" class="alert alert-warning">This is a warning</div>
    </transition>
    <hr>
    <button class="btn btn-primary" @click="load = !load">Toggle element</button>
    <br/></br/>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      >
      <div v-if="load" class="loaded"></div>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show: false,
      launch: true,
      alertAnimation: 'fade',
      load: false,
      elementWidth: 100
    }
  },
  methods: {
    beforeEnter(el){
      console.log('before enter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done){
      console.log(el, 'enter');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el){
      console.log('after enter');
    },
    enterCancelled(el){
      console.log('enter cancelled');
    },
    beforeLeave(el){
      console.log('before leave');
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done){
      console.log('leave', el);
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el){
      console.log('after leave');
    },
    leaveCancelled(el){
      console.log('leave cancelled');
    }
  }
}
</script>
<style>
  .loaded {
    width: 300px;
    height: 100px;
    background-color: lightgreen;
  }
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
    transition: opacity 1s;
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
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

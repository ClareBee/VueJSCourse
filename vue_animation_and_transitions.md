### Animations
- can use w v-if and v-show
<transition> can only be used for a single element
Adding css-classes (name-enter, name-enter-active, name-leave, name-leave-active -> defaults to v-enter)
e.g. <transition name="fade">
      <!-- html  -->
      </transition>
=> give you .fade-enter/.fade-enter-active/.fade-leave/.fade-leave-active for css
- add type attribute to transition to tell it which to use - animation/transition (in case of clashing durations)
- add appear attribute to transition to trigger animation on load
- add enter-class/leave-active-class etc to overwrite defaults e.g. when using Animate.css etc

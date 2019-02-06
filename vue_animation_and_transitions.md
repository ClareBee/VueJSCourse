### Animations
- can use w v-if and v-show
<transition> can only be used for a single element
Adding css-classes (name-enter, name-enter-active, name-leave, name-leave-active -> defaults to v-enter)
e.g. <transition name="fade">
      <!-- html  -->
      </transition>
=> give you .fade-enter/.fade-enter-active/.fade-leave/.fade-leave-active for css
- add `type` attribute to transition to tell it which to use - animation/transition (in case of clashing durations)
- add `appear` attribute to transition to trigger animation on load
- add `enter-class/leave-active-class` etc to overwrite defaults e.g. when using Animate.css etc
- name can be bound to a data property with `v-model` on a select (for example) and `:name` on transition
#### multiple elements
if more than one element in a transition, add a unique key attribute to each element for Vue to be able to handle them individually
- sync old and new elements using a `mode` attribute on the transition: either 'out-in'/'in-out'

#### Transition JS Hooks
- before-enter, enter, after-enter, after-enter-cancelled
- before-leave, leave, after-leave, after-leave-cancelled
=> can be mixed w css
e.g. on transition @enter="enter" where enter is a method that takes (el, done)
- done() tells Vue that the animation is complete

import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringContent: state => {
      return state.counter + ' Clicks';
    }
  },
  mutations: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    increment: context => {
      // used for async actions (just example here)
      context.commit('increment');
    },
    // can use ES6 destructuring
    decrement: ({commit}) => {
      commit('decrement');
    },
    asyncIncrement: ({commit}) => {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
    asyncDecrement: ({commit}) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    }
  }
});

const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringContent: state => {
    return state.counter + ' Clicks';
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: state => {
    state.counter--;
  }
};

const actions = {
  increment: (context, payload) => {
    // used for async actions (just example here)
    context.commit('increment', payload);
  },
  // can use ES6 destructuring
  decrement: ({commit}) => {
    commit('decrement');
  },
  asyncIncrement: ({commit}, payload) => {
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.duration);
  },
  asyncDecrement: ({commit}, payload) => {
    setTimeout(() => {
      commit('decrement', payload.by);
    }, payload.duration);
  }
}

export default {
  state, getters, mutations, actions
};

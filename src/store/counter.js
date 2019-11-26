export default {
  namespaced: true,
  state: {
    counter: 20
  },
  getters: {
    computedCounter(state) {
      return state.counter * (7 - 2 * (5 + 4))
    }
  },
  mutations: {
    changeCounter(state, payload) {
      state.counter += payload
    }
  },
  actions: {
    asyncChangeCounter(/*context*/ { commit }, payload) {
      setTimeout(() => {
        //context это объект содержащий поле commit
        //context.commit("changeCounter", payload.counterVal)
        //поэтому можно сделать так:
        commit("changeCounter", payload.counterVal)
      }, payload.timeoutDelay)
    }
  }
}

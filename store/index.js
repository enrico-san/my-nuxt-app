import axios from 'axios'
export const state = () => ({
  counter: 0
})

export const mutations = {
  save (state, value) {
    state.counter = value
  }
}

export const actions = {
  incrementAsync ({ commit, state }) {
    axios.post(`/api?counter=${state.counter}`)
      .then(function (response) {
        const data = response.data
        commit('save', data.counter)
        // eslint-disable-next-line no-console
        console.log(state.counter)
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }
}

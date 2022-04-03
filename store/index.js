import axios from 'axios'
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

export const actions = {
  incrementAsync ({ commit, state }) {
    axios.post('https://ldkkdd2lui.execute-api.eu-central-1.amazonaws.com/staging/?counter=2')
      .then(function (response) {
        const data = response.data
        // eslint-disable-next-line no-console
        console.log(data.counter)
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }
}

import { createStore } from 'vuex'

const store = createStore({
  state: {
    birthday: {
      year: 0,
      month: 0,
      day: 0,
      time: 0
    }
  },
  mutations: {
    setBirthday (state, value) {
      const birthday = state.birthday
      birthday.year = value.year
      birthday.month = value.month
      birthday.day = value.day
      birthday.time = value.time
    }
  }
})
export default store

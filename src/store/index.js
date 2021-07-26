import { createStore } from 'vuex'

const store = createStore({
  state: {
    birthday: {
      year: 0,
      month: 0,
      day: 0,
      time: 0,
      lunerMonth: 0
    }
  },
  mutations: {
    setBirthday (state, value) {
      const birthday = state.birthday
      birthday.year = value.year
      birthday.month = value.month
      birthday.day = value.day
      birthday.time = value.time
      birthday.lunerMonth = value.lunerMonth
    }
  }
})
export default store

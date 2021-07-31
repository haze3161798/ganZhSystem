import { createStore } from 'vuex'
const store = createStore({
  state: {
    birthday: {
      year: 1993,
      month: 12,
      day: 28,
      time: 0,
      lunerMonth: 0
    },
    ganZhNum: {
      yearGan: 0,
      yearZh: 0,
      monthGan: 0,
      monthZh: 0,
      dayGan: 0,
      dayZh: 0,
      time: 0
    }
  },
  mutations: {
    setGanZhNum (state, value) {
      const ganZhNum = state.ganZhNum
      ganZhNum.yearGan = value.yearGan
      ganZhNum.yearZh = value.yearZh
      ganZhNum.monthGan = value.monthGan
      ganZhNum.monthZh = value.monthZh
      ganZhNum.dayGan = value.dayGan
      ganZhNum.dayZh = value.dayZh
      ganZhNum.time = value.time
    },
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

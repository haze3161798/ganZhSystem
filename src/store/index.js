import { createStore } from 'vuex'
const store = createStore({
  state: {
    birthday: {
      year: 0,
      month: 0,
      day: 0,
      time: 0,
      name: '',
      sex: null
    },
    ganZhNum: {
      yearGan: 0,
      yearZh: 0,
      monthGan: 0,
      monthZh: 0,
      dayGan: 0,
      dayZh: 0,
      timeGan: 0,
      timeZh: 0
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
      ganZhNum.timeGan = value.timeGan
      ganZhNum.timeZh = value.timeZh
    },
    setBirthday (state, value) {
      const birthday = state.birthday
      birthday.year = value.year
      birthday.month = value.month
      birthday.day = value.day
      birthday.time = value.time
      birthday.sex = value.sex
      birthday.name = value.name
    }
  }
})
export default store

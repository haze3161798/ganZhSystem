<template>
  <div class="container">
    <form action="">
      <div class="py-5">
        <div class="d-md-flex justify-content-center py-md-2">
          <div class="d-flex py-2 py-md-0">
            <div class="form-text-left">
              <span>姓名/暱稱</span>
            </div>
            <div class="col">
              <input class="form-control input-md-width" type="text" placeholder="不填也沒關係" v-model="birthdayData.name">
            </div>
          </div>
          <div>
            <div class="d-flex">
                <div class="form-text-left">
                  <span>性別</span>
                </div>
                <div class="d-flex input-md-width">
                  <div class="mx-2 d-flex align-items-center">
                    <input class="radio-box-input" type="radio" name="flexRadioDefault" id="radio-box1" value="1" v-model="birthdayData.sex"/>
                    <label class="radio-box-label position-relative" for="radio-box1"> </label>
                    <label class="d-block px-2" for="radio-box1">男</label>
                  </div>
                  <div class="mx-2 d-flex align-items-center">
                    <input class="radio-box-input" type="radio" name="flexRadioDefault" id="radio-box2" value="2" v-model="birthdayData.sex"/>
                    <label class="radio-box-label position-relative" for="radio-box2"> </label>
                    <label class="d-block px-2" for="radio-box2">女</label>
                  </div>
                </div>
            </div>
            <div class="d-flex">
              <div class="form-text-left"></div>
              <small class="text-danger">{{errMsg.sex}}</small>
            </div>
          </div>
        </div>
        <div class="d-md-flex justify-content-center py-md-2">
          <div class="d-flex py-2 py-md-0">
            <div class="form-text-left">
              <span>出生年(西元)</span>
            </div>
            <div class="col">
              <select class="form-control input-md-width" v-model="birthdayData.year" @change="dayCount">
                <option value="0" disabled="disabled">請選擇年份</option>
                <option :value="item + 1900" v-for="item in selectBirthdayYear" :key="item">{{ '西元' + (item + 1900) + '年'}}</option>
              </select>
              <small class="text-danger">{{errMsg.year}}</small>
            </div>
          </div>
          <div class="d-flex ">
            <div class="form-text-left">
              <span>出生月(國曆)</span>
            </div>
            <div class="col">
              <select class="form-control input-md-width" v-model="birthdayData.month" @change="dayCount">
                <option value="0" disabled="disabled">請選擇月份</option>
                <option :value="item" v-for="item in 12" :key="item">{{item + '月'}}</option>
              </select>
              <small class="text-danger">{{errMsg.month}}</small>
            </div>
          </div>
        </div>
        <div class="d-md-flex justify-content-center py-md-2">
          <div class="d-flex py-2 py-md-0">
            <div class="form-text-left">
              <span>出生日(國曆)</span>
            </div>
            <div class="col">
              <select class="form-control input-md-width" v-model="birthdayData.day">
                <option value="0" disabled="disabled">請選擇日期</option>
                <option :value="item" v-for="item in selectBirthdayDay" :key="item">{{item + '日'}}</option>
              </select>
              <small class="text-danger">{{errMsg.day}}</small>
            </div>
          </div>
          <div class="d-flex">
            <div class="form-text-left">
              <span>出生時間</span>
            </div>
            <div class="col">
              <select class="form-control input-md-width" v-model="birthdayData.time">
                <option value="0" disabled="disabled">請選擇時間</option>
                <option :value="item - 1" v-for="item in 24" :key="item">{{item - 1 + '點'}}</option>
              </select>
              <small class="text-danger">{{errMsg.time}}</small>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
          <button class="btn btn-primary" type="submit" @click.prevent="submit">送出</button>
      </div>
    </form>
  </div>
</template>

<script>
import solarLunar from 'solarlunar'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      ganZhNumData: {
        yearGan: 0,
        yearZh: 0,
        monthGan: 0,
        monthZh: 0,
        dayGan: 0,
        dayZh: 0,
        timeGan: 0,
        timeZh: 0
      },
      selectBirthdayYear: 148,
      selectBirthdayDay: 31,
      birthdayData: {
        year: 0,
        month: 0,
        day: 0,
        time: 0,
        name: '',
        sex: null
      },
      errMsg: {}
    }
  },
  methods: {
    ...mapMutations([
      'setBirthday', 'setGanZhNum'
    ]),
    writeGanZhNum () {
      // 干支序號
      const ganZhNumData = this.ganZhNumData
      const birthdayData = this.birthdayData
      const solar2lunarData = solarLunar.solar2lunar(birthdayData.year, birthdayData.month, birthdayData.day)
      const yearGan = solar2lunarData.gzYear.split('')
      const yearGanZhNum = this.GanZhNum(yearGan[0], yearGan[1])
      const monthGan = solar2lunarData.gzMonth.split('')
      const monthGanZhNum = this.GanZhNum(monthGan[0], monthGan[1])
      const dyaGan = solar2lunarData.gzDay.split('')
      const dayGanZhNum = this.GanZhNum(dyaGan[0], dyaGan[1])
      ganZhNumData.yearGan = yearGanZhNum.gan
      ganZhNumData.yearZh = yearGanZhNum.zh
      ganZhNumData.monthGan = monthGanZhNum.gan
      ganZhNumData.monthZh = monthGanZhNum.zh
      ganZhNumData.dayGan = dayGanZhNum.gan
      ganZhNumData.dayZh = dayGanZhNum.zh
    },
    timeGanZh () {
      /*
      時支計算公式
      五鼠遁
      甲己還生甲，
      乙庚丙作初，
      丙辛從戊起，
      丁壬庚子居，
      戊癸何方發，
      壬子是真途。
       */
      const ganZhNumData = this.ganZhNumData
      const time = Math.ceil(this.birthdayData.time / 2) + 1
      const dayGan = this.ganZhNumData.dayGan
      const timeTianGan = () => {
        const num = () => {
          switch (true) {
            case dayGan === 1 || dayGan === 6:
              return this.tianGanConvert(time)
            case dayGan === 2 || dayGan === 7:
              return this.tianGanConvert(time + 2)
            case dayGan === 3 || dayGan === 8:
              return this.tianGanConvert(time + 4)
            case dayGan === 4 || dayGan === 9:
              return this.tianGanConvert(time + 6)
            case dayGan === 5 || dayGan === 0:
              return this.tianGanConvert(time + 8)
          }
        }
        return this.tianGanConvert(num())
      }
      const timeDiZh = () => {
        switch (true) {
          case time === 12:
            return 0
          case time === 13:
            return 1
          default:
            return time
        }
      }
      ganZhNumData.timeGan = timeTianGan()
      ganZhNumData.timeZh = timeDiZh()
    },
    tianGanConvert (gan) {
      // 計算天干數字
      const Convert = () => {
        if (gan > 9) {
          return gan - 10
        } else {
          return gan
        }
      }
      return Convert()
    },
    GanZhNum (gan, zh) {
      // 干支換算成序號
      const ganNum = () => {
        switch (true) {
          case gan === '甲':
            return 1
          case gan === '乙':
            return 2
          case gan === '丙':
            return 3
          case gan === '丁':
            return 4
          case gan === '戊':
            return 5
          case gan === '己':
            return 6
          case gan === '庚':
            return 7
          case gan === '辛':
            return 8
          case gan === '壬':
            return 9
          case gan === '癸':
            return 0
        }
      }
      const zhNum = () => {
        switch (true) {
          case zh === '子':
            return 1
          case zh === '丑':
            return 2
          case zh === '寅':
            return 3
          case zh === '卯':
            return 4
          case zh === '辰':
            return 5
          case zh === '巳':
            return 6
          case zh === '午':
            return 7
          case zh === '未':
            return 8
          case zh === '申':
            return 9
          case zh === '酉':
            return 10
          case zh === '戌':
            return 11
          case zh === '亥':
            return 0
        }
      }
      return {
        gan: ganNum(),
        zh: zhNum()
      }
    },
    earlyLateZSh () {
    // 早晚子判斷
      const birthdayData = this.birthdayData
      if (birthdayData.time === 23 && birthdayData.day < this.selectBirthdayDay) {
        birthdayData.day += 1
        birthdayData.time = 0
      } else if (birthdayData.time === 23 && birthdayData.day >= this.selectBirthdayDay) {
        birthdayData.day = 1
        birthdayData.time = 0
        if (birthdayData.month >= 12) {
          birthdayData.month = 1
        } else {
          birthdayData.month += 1
        }
      }
    },
    mustWrite () {
      // 必填驗證
      const content = {
        year: '請選擇年分',
        month: '請選擇月份',
        day: '請選擇日期',
        time: '請選擇時間',
        sex: '請勾選性別'
      }
      const key = ['year', 'month', 'day', 'time', 'sex']
      key.forEach(element => {
        const data = this.birthdayData[element]
        if (data === 0 || data === null || data === undefined || isNaN(data) || !data) {
          this.errMsg[element] = content[element]
        } else {
          delete this.errMsg[element]
        }
      })
    },
    submit () {
      this.mustWrite()
      this.earlyLateZSh()
      this.writeGanZhNum()
      this.timeGanZh()
      this.setGanZhNum(this.ganZhNumData)
      this.setBirthday(this.birthdayData)
      if (Object.keys(this.errMsg).length === 0) {
        this.$router.replace('/Index')
      }
    },
    dayCount () {
      // 計算選擇的月有幾天
      const leepmonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      const noleepmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      const month = this.birthdayData.month
      if (!((this.birthdayData.year) % 4)) {
        this.selectBirthdayDay = leepmonth[month - 1]
      } else {
        this.selectBirthdayDay = noleepmonth[month - 1]
      }
    }
  },
  computed: {
    ...mapState({
      birthday: state => state.birthday,
      ganZhNum: state => state.ganZhNum
    })
  }

}
</script>

<style lang="scss" scoped>
.form-text-left {
  margin-top: 7px;
  width: 100px;
  text-align: right;
  margin-right:12px
}
@media (min-width:768px) {
  .input-md-width{
    width: 205px;
  }
}
.radio-box-input {
  display: none;
  pointer-events: none;

  &:checked ~ .radio-box-label {
    border: 0;

    &::after {
      transform: rotate(45deg) scale(1);
    }
    &::before {
      transform: rotate(-45deg) scale(1);
    }
  }
}

.radio-box-label {
  border: 2px solid black;
  width: 18px;
  height: 18px;
  border-radius: 50%;

  &::after {
    content: '';
    top: 6px;
    left: 0px;
    position: absolute;
    width: 7px;
    height: 2px;
    background-color: black;
    transform: rotate(45deg) scaleX(0);
    transform-origin: left;
    transition: all 0.2s;
  }
  &::before {
    content: '';
    top: 11px;
    left: 4px;
    position: absolute;
    width: 12px;
    height: 2px;
    background-color: black;
    transform: rotate(-45deg) scaleX(0);
    transition: all 0.2s 0.1s;
    transform-origin: left;
  }
}
</style>

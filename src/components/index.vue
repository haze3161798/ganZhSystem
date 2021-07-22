<template>
  <div>
    <div>{{yearGanZh}}</div>
    <div>{{monthGanZh}}</div>
    <div>{{dayGanZh}}</div>
    <div>{{timeGanZh}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      birthday: {
        year: 2021,
        month: 6,
        day: 22,
        time: 3
      },
      tianGan: {
        1: '甲',
        2: '乙',
        3: '丙',
        4: '丁',
        5: '戊',
        6: '己',
        7: '庚',
        8: '辛',
        9: '壬',
        0: '癸'
      },
      diZh: {
        1: '子',
        2: '丑',
        3: '寅',
        4: '卯',
        5: '辰',
        6: '巳',
        7: '午',
        8: '未',
        9: '申',
        10: '酉',
        11: '戌',
        0: '亥'
      },
      jiaZi: ['癸亥',
        '甲子', '乙丑', '丙寅', '丁卯', '戊辰', '已巳', '庚午', '辛未', '壬申', '癸酉', '甲戌', '乙亥',
        '丙子', '丁丑', '戊寅', '已卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉', '丙戌', '丁亥',
        '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '已亥',
        '庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '已酉', '庚戌', '辛亥',
        '壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '已未', '庚申', '辛酉', '壬戌'
      ],
      dayCount: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]
    }
  },
  methods: {
    tianGanConvert (gan) {
      const Convert = () => {
        if (gan > 9) {
          return gan - 10
        } else {
          return gan
        }
      }
      return Convert()
    }
  },
  computed: {
    yearGanZh () {
      // 年干支計算公式
      const year = this.birthday.year
      const yearTianGan = (year - 3) % 10
      const yearDiZh = (year - 3) % 12
      return {
        yearGan: [this.tianGan[yearTianGan], yearTianGan],
        yearZh: [this.diZh[yearDiZh], yearDiZh]
      }
    },
    monthGanZh () {
      /*
      月干支計算公式
      五虎遁
      甲己之年丙作首
      乙庚之年戊為頭
      丙辛之歲尋庚上
      丁壬壬寅順水流
      若問戊癸何方發
      甲寅之上好追求
      */
      const month = this.birthday.month
      const monthTianGan = () => {
        if (this.yearGanZh.yearGan[1] === 1 || this.yearGanZh.yearGan[1] === 6) {
          return this.tianGan[this.tianGanConvert(month + 2)]
        } else if (this.yearGanZh.yearGan[1] === 2 || this.yearGanZh.yearGan[1] === 7) {
          return this.tianGan[this.tianGanConvert(month + 4)]
        } else if (this.yearGanZh.yearGan[1] === 3 || this.yearGanZh.yearGan[1] === 8) {
          return this.tianGan[this.tianGanConvert(month + 6)]
        } else if (this.yearGanZh.yearGan[1] === 4 || this.yearGanZh.yearGan[1] === 9) {
          return this.tianGan[this.tianGanConvert(month + 8)]
        } else if (this.yearGanZh.yearGan[1] === 5 || this.yearGanZh.yearGan[1] === 0) {
          return this.tianGan[this.tianGanConvert(month)]
        }
      }
      const monthDiZh = () => {
        if (month <= 9) {
          return this.diZh[month + 2]
        } else {
          return this.diZh[month - 10]
        }
      }
      return {
        monthGan: monthTianGan(),
        monthZh: monthDiZh()
      }
    },
    dayGanZh () {
      let day = this.birthday.day
      const month = this.birthday.month
      const year = this.birthday.year
      if (this.birthday.time === 23) {
        // 早晚子判斷
        day = this.birthday.day + 1
      }
      const leapYear = () => {
        // 閏年計算 1為平年
        switch (true) {
          case year % 4 === 0:
            return 1
          default:
            return 0
        }
      }
      const dayNum = () => {
        const monthSum = this.dayCount.reduce((acc, item, index) => {
          if (index >= month - 1) {
            return acc
          }
          return acc + item
        }, 0)
        return monthSum + day
      }
      const dayGanZhNumber = () => {
        /*
        1、1901年——2000年日柱計算公式：干支序數＝(5×（公元年最後兩位數－1）﹢〔（公元年最後兩位數－1）÷4〕﹢出生日在當年的天數﹢15) % 60

        2、2001年——2100年公曆計算日柱公式：干支總序數＝(5×（公元年最後兩位數－1）﹢〔（公元年最後兩位數－1）÷4〕﹢出生日在當年的天數) % 60

        */
        const miangou = year - 1911
        if (leapYear === 1 && month > 3) {
          return ((miangou - 10) * 5 + Math.floor((miangou - 10) / 4) + dayNum() + leapYear()) % 60
        } else {
          return ((miangou - 10) * 5 + Math.floor((miangou - 10) / 4) + dayNum()) % 60
        }
        // if (year <= 2000 && year >= 1901) {
        //   return (5 * (year - 1901) + Math.floor((year - 1901) / 4) + dayNum() + 15 + leapYear()) % 60
        // } else if (year > 2000 && year <= 2099) {
        //   return (5 * (year - 2001) + Math.floor((year - 2001) / 4) + dayNum() + leapYear()) % 60
        // }
      }
      const toStr = this.jiaZi[dayGanZhNumber()].split('')
      return {
        dayGan: toStr[0],
        dayZh: toStr[1]
      }
    },
    timeGanZh () {
      /*
      日干支計算公式
      五鼠遁
      甲己還生甲，
      乙庚丙作初，
      丙辛從戊起，
      丁壬庚子居，
      戊癸何方發，
      壬子是真途。
       */
      const time = Math.ceil(this.birthday.time / 2) + 1
      const dayGan = this.dayGanZh.dayGan
      const diZh = this.diZh
      const timeTianGan = () => {
        const num = () => {
          switch (true) {
            case dayGan === '甲' || dayGan === '己':
              return this.tianGanConvert(time)
            case dayGan === '乙' || dayGan === '庚':
              return this.tianGanConvert(time + 2)
            case dayGan === '丙' || dayGan === '辛':
              return this.tianGanConvert(time + 4)
            case dayGan === '丁' || dayGan === '壬':
              return this.tianGanConvert(time + 6)
            case dayGan === '戊' || dayGan === '癸':
              return this.tianGanConvert(time + 8)
          }
        }
        return this.tianGan[num()]
      }
      const timeDiZh = () => {
        switch (true) {
          case time === 12:
            return diZh[0]
          case time === 13:
            return diZh[1]
          default:
            return this.diZh[time]
        }
      }
      return {
        timeGan: timeTianGan(),
        timeZh: timeDiZh()
      }
    }
  }
}
</script>

<style>

</style>

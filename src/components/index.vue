<template>
  <div>
    <div class="container py-4">
      <table class="mx-auto">
        <colgroup>
          <col style="width:22.5%"/>
          <col style="width:22.5%"/>
          <col style="width:22.5%"/>
          <col style="width:22.5%"/>
          <col style="width:10%"/>
        </colgroup>
        <tr class="table-border text-center">
          <td class="table-border table-width">時柱</td>
          <td class="table-border table-width">日柱</td>
          <td class="table-border table-width">月柱</td>
          <td class="table-border table-width">年柱</td>
          <td class="table-border table-width">四柱</td>
        </tr>
        <tr class="table-border text-center">
          <td class="table-border table-width">{{ganTenGod(tianGan[ganZhNum.timeGan][1], tianGan[ganZhNum.timeGan][2])}}</td>
          <td class="table-border table-width">日元</td>
          <td class="table-border table-width">{{ganTenGod(tianGan[ganZhNum.monthGan][1], tianGan[ganZhNum.monthGan][2])}}</td>
          <td class="table-border table-width">{{ganTenGod(tianGan[ganZhNum.yearGan][1], tianGan[ganZhNum.yearGan][2])}}</td>
          <td class="table-border table-width">干十神</td>
        </tr>
        <tr class="table-border text-center">
          <td class="table-border table-width">
            <button @click="addTainGan(ganZhNum, 'timeGan',)" class="btn">+</button>
            <div>{{tianGan[ganZhNum.timeGan][0]}}</div>
            <button @click="minusTainGan(ganZhNum, 'timeGan')" class="btn">-</button>
          </td>
          <td class="table-border table-width">
            <button @click="addTainGan(ganZhNum, 'dayGan')" class="btn">+</button>
            <div>{{tianGan[ganZhNum.dayGan][0]}}</div>
            <button  @click="minusTainGan(ganZhNum, 'dayGan')" class="btn">-</button>
          </td>
          <td class="table-border table-width">
            <button @click="addTainGan(ganZhNum, 'monthGan')" class="btn">+</button>
            <div>{{tianGan[ganZhNum.monthGan][0]}}</div>
            <button @click="minusTainGan(ganZhNum, 'monthGan')" class="btn">-</button>
          </td>
          <td class="table-border table-width">
            <button @click="addTainGan(ganZhNum, 'yearGan')" class="btn">+</button>
            <div>{{tianGan[ganZhNum.yearGan][0]}}</div>
            <button @click="minusTainGan(ganZhNum, 'yearGan')" class="btn">-</button>
          </td>
          <td class="table-border table-width">天干</td>
        </tr>
        <tr class="table-border text-center">
          <td class="table-border table-width">
            <button @click="addDiZh(ganZhNum, 'timeZh')" class="btn">+</button>
            <div>{{diZh[ganZhNum.timeZh][0]}}</div>
            <button @click="minusDiZh(ganZhNum, 'timeZh')" class="btn">-</button>
          </td>
          <td class="table-border table-width">
            <button @click="addDiZh(ganZhNum, 'dayZh')" class="btn">+</button>
            <div>{{diZh[ganZhNum.dayZh][0]}}</div>
            <button @click="minusDiZh(ganZhNum, 'dayZh')" class="btn">-</button>
          </td>
          <td class="table-border table-width">
            <button @click="addDiZh(ganZhNum, 'monthZh')" class="btn">+</button>
            <div>{{diZh[ganZhNum.monthZh][0]}}</div>
            <button @click="minusDiZh(ganZhNum, 'monthZh')" class="btn">-</button>
          </td>
          <td class="table-border table-width">
            <button @click="addDiZh(ganZhNum, 'yearZh')" class="btn">+</button>
            <div>{{diZh[ganZhNum.yearZh][0]}}</div>
            <button @click="minusDiZh(ganZhNum, 'yearZh')" class="btn">-</button>
          </td>
          <td class="table-border table-width">地支</td>
        </tr>
        <tr class="table-border text-center">
          <td class="table-border table-width">{{hideGan(diZh[ganZhNum.timeZh])}}</td>
          <td class="table-border table-width">{{hideGan(diZh[ganZhNum.dayZh])}}</td>
          <td class="table-border table-width">{{hideGan(diZh[ganZhNum.monthZh])}}</td>
          <td class="table-border table-width">{{hideGan(diZh[ganZhNum.yearZh])}}</td>
          <td class="table-border table-width">藏干</td>
        </tr>
        <tr class="table-border text-center">
          <td class="table-border table-width">十神</td>
          <td class="table-border table-width">十神</td>
          <td class="table-border table-width">十神</td>
          <td class="table-border table-width">十神</td>
          <td class="table-border table-width">支十神</td>
        </tr>
      </table>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import solarLunar from 'solarlunar'
export default {
  data () {
    return {
      tenGod: {
        0: ['劫財', '比肩'], // 同我
        1: ['食神', '傷官'], // 我生
        2: ['偏財', '正財'], // 我剋
        3: ['七殺', '正官'], // 剋我
        4: ['偏印', '正印'], // 生我
        5: ['比肩', '劫財'], // 同我
        6: ['食神', '傷官'], // 我生
        7: ['偏財', '正財'], // 我剋
        8: ['七殺', '正官'], // 剋我
        9: ['偏印', '正印'] // 生我
      },
      tianGan: {
        // 天干, 五行 木1 火2 土3 金4 水5, 陰陽
        1: ['甲', 1, 1],
        2: ['乙', 1, 0],
        3: ['丙', 2, 1],
        4: ['丁', 2, 0],
        5: ['戊', 3, 1],
        6: ['己', 3, 0],
        7: ['庚', 4, 1],
        8: ['辛', 4, 0],
        9: ['壬', 5, 1],
        0: ['癸', 5, 0]
      },
      diZh: {
        // 地支, 五行, 藏干
        1: ['子', 5, [0]],
        2: ['丑', 3, [6, 0, 8]],
        3: ['寅', 1, [1, 3, 3]],
        4: ['卯', 1, [2]],
        5: ['辰', 3, [5, 2, 0]],
        6: ['巳', 2, [3, 5, 7]],
        7: ['午', 2, [4, 6]],
        8: ['未', 3, [6, 2, 4]],
        9: ['申', 4, [7, 9, 5]],
        10: ['酉', 4, [8]],
        11: ['戌', 3, [5, 8, 4]],
        0: ['亥', 5, [9, 1]]
      }
      // jiaZi: ['癸亥',
      //   '甲子', '乙丑', '丙寅', '丁卯', '戊辰', '已巳', '庚午', '辛未', '壬申', '癸酉', '甲戌', '乙亥',
      //   '丙子', '丁丑', '戊寅', '已卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉', '丙戌', '丁亥',
      //   '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '已亥',
      //   '庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '已酉', '庚戌', '辛亥',
      //   '壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '已未', '庚申', '辛酉', '壬戌'
      // ]
    }
  },
  methods: {
    hideGan (gan) {
      const arr = gan[2].map(element =>
        this.tianGan[element][0]
      ).join(' ')
      return arr
    },
    ganTenGod (gan, ganIanYong) {
      const IanYong = Math.abs(ganIanYong - this.tianGan[this.ganZhNum.dayGan][2])
      const me = this.tianGan[this.ganZhNum.dayGan][1]
      const tenGodNum = gan + 5 - me
      return this.tenGod[tenGodNum][IanYong]
    },
    addTainGan (obj, key) {
      console.log(obj)
      if (obj[key] >= 9) {
        obj[key] = 0
      } else {
        obj[key] += 1
      }
    },
    minusTainGan (obj, key) {
      if (!(obj[key])) {
        obj[key] = 9
      } else {
        obj[key] -= 1
      }
    },
    addDiZh (obj, key) {
      console.log(obj)
      // const end = Object.key(obj)
      // console.log(end)
      if (obj[key] >= 11) {
        obj[key] = 0
      } else {
        obj[key] += 1
      }
    },
    minusDiZh (obj, key) {
      if (!(obj[key])) {
        obj[key] = 11
      } else {
        obj[key] -= 1
      }
    }
  },
  computed: {
    ...mapState({
      birthday: state => state.birthday,
      ganZhNum: state => state.ganZhNum
    }),
    GanZhNum (gan, zh) {
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
        gan: ganNum,
        zh: zhNum
      }
    },
    GanZh () {
      const birthday = this.birthday
      const solar2lunarData = solarLunar.solar2lunar(birthday.year, birthday.month, birthday.day)
      return solar2lunarData
    },
    yearGanZh () {
      const year = this.GanZh.gzYear.split('')
      return {
        yearGan: year[0],
        yearzh: year[1]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table-border{
  border:1px solid black
}
</style>

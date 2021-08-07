<template>
  <div>
    <div class="container py-4" style="max-width:500px">
      <div class="pt-2 pb-5">
        <div class="text-center pb-2">
          <h1 class="fw-bold">命主資料</h1>
        </div>
        <div>
          <div  class="d-flex justify-content-between">
            <div>
              <div>
                <span class="me-2">姓名</span>
                <span>{{birthday.name}}</span>
              </div>
              <div>
                <span class="me-2">生日</span>
                <span>{{birthday.year}}年</span>
                <span>{{birthday.month}}月</span>
                <span>{{birthday.day}}日</span>
                <span>{{diZh[ganZhNum.yearZh][0]}}時</span>
              </div>
            </div>
            <div>
                <div>
                <span class="me-2">{{ianYong[tianGan[ganZhNum.dayGan][2]]}}</span>
                <span>{{chianQun[birthday.sex] + '造'}}</span>
              </div>
              <div>
                <span class="me-2">命主五行</span>
                <span>{{wuXin[tianGan[ganZhNum.dayGan][1]]}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="mx-auto">
        <colgroup>
          <col style="width:22.5%"/>
          <col style="width:22.5%"/>
          <col style="width:22.5%"/>
          <col style="width:22.5%"/>
          <col style="width:10%"/>
        </colgroup>
        <tr class="text-center">
          <td >時柱</td>
          <td >日柱</td>
          <td >月柱</td>
          <td >年柱</td>
          <td >四柱</td>
        </tr>
        <tr class=" text-center bg-gray">
          <td >{{ganTenGod(tianGan[ganZhNum.timeGan][1], tianGan[ganZhNum.timeGan][2])}}</td>
          <td >元{{sex}}</td>
          <td >{{ganTenGod(tianGan[ganZhNum.monthGan][1], tianGan[ganZhNum.monthGan][2])}}</td>
          <td >{{ganTenGod(tianGan[ganZhNum.yearGan][1], tianGan[ganZhNum.yearGan][2])}}</td>
          <td >干十神</td>
        </tr>
        <tr class=" text-center">
          <td >
            <button @click="addTainGan(ganZhNum, 'timeGan',)" class="btn">+</button>
            <div :class="wuXingColor(tianGan[ganZhNum.timeGan][1])">{{tianGan[ganZhNum.timeGan][0]}}</div>
            <button @click="minusTainGan(ganZhNum, 'timeGan')" class="btn">-</button>
          </td>
          <td >
            <button @click="addTainGan(ganZhNum, 'dayGan')" class="btn">+</button>
            <div :class="wuXingColor(tianGan[ganZhNum.dayGan][1])">{{tianGan[ganZhNum.dayGan][0]}}</div>
            <button  @click="minusTainGan(ganZhNum, 'dayGan')" class="btn">-</button>
          </td>
          <td >
            <button @click="addTainGan(ganZhNum, 'monthGan')" class="btn">+</button>
            <div :class="wuXingColor(tianGan[ganZhNum.monthGan][1])">{{tianGan[ganZhNum.monthGan][0]}}</div>
            <button @click="minusTainGan(ganZhNum, 'monthGan')" class="btn">-</button>
          </td>
          <td >
            <button @click="addTainGan(ganZhNum, 'yearGan')" class="btn">+</button>
            <div :class="wuXingColor(tianGan[ganZhNum.yearGan][1])">{{tianGan[ganZhNum.yearGan][0]}}</div>
            <button @click="minusTainGan(ganZhNum, 'yearGan')" class="btn">-</button>
          </td>
          <td >天干</td>
        </tr>
        <tr class=" text-center bg-gray">
          <td >
            <button @click="addDiZh(ganZhNum, 'timeZh')" class="btn">+</button>
            <div :class="wuXingColor(diZh[ganZhNum.timeZh][1])">{{diZh[ganZhNum.timeZh][0]}}</div>
            <button @click="minusDiZh(ganZhNum, 'timeZh')" class="btn">-</button>
          </td>
          <td >
            <button @click="addDiZh(ganZhNum, 'dayZh')" class="btn">+</button>
            <div :class="wuXingColor(diZh[ganZhNum.dayZh][1])">{{diZh[ganZhNum.dayZh][0]}}</div>
            <button @click="minusDiZh(ganZhNum, 'dayZh')" class="btn">-</button>
          </td>
          <td >
            <button @click="addDiZh(ganZhNum, 'monthZh')" class="btn">+</button>
            <div :class="wuXingColor(diZh[ganZhNum.monthZh][1])">{{diZh[ganZhNum.monthZh][0]}}</div>
            <button @click="minusDiZh(ganZhNum, 'monthZh')" class="btn">-</button>
          </td>
          <td >
            <button @click="addDiZh(ganZhNum, 'yearZh')" class="btn">+</button>
            <div :class="wuXingColor(diZh[ganZhNum.yearZh][1])">{{diZh[ganZhNum.yearZh][0]}}</div>
            <button @click="minusDiZh(ganZhNum, 'yearZh')" class="btn">-</button>
          </td>
          <td >地支</td>
        </tr>
        <tr class=" text-center">
          <td >{{hideGan(diZh[ganZhNum.timeZh])}}</td>
          <td >{{hideGan(diZh[ganZhNum.dayZh])}}</td>
          <td >{{hideGan(diZh[ganZhNum.monthZh])}}</td>
          <td >{{hideGan(diZh[ganZhNum.yearZh])}}</td>
          <td >藏干</td>
        </tr>
        <tr class=" text-center bg-gray">
          <td >
            <span class="d-block" v-for="item in ziTenGod(diZh[ganZhNum.timeZh])" :key="item">{{item}}</span>
          </td>
          <td >
            <span class="d-block" v-for="item in ziTenGod(diZh[ganZhNum.dayZh])" :key="item">{{item}}</span>
          </td>
          <td >
            <span class="d-block" v-for="item in ziTenGod(diZh[ganZhNum.monthZh])" :key="item">{{item}}</span>
          </td>
          <td >
            <span class="d-block" v-for="item in ziTenGod(diZh[ganZhNum.yearZh])" :key="item">{{item}}</span>
          </td>
          <td >支十神</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import solarLunar from 'solarlunar'
export default {
  data () {
    return {
      chianQun: {
        1: '乾',
        2: '坤'
      },
      ianYong: {
        0: '陰',
        1: '陽'
      },
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
        3: ['寅', 1, [1, 3, 5]],
        4: ['卯', 1, [2]],
        5: ['辰', 3, [5, 2, 0]],
        6: ['巳', 2, [3, 5, 7]],
        7: ['午', 2, [4, 6]],
        8: ['未', 3, [6, 2, 4]],
        9: ['申', 4, [7, 9, 5]],
        10: ['酉', 4, [8]],
        11: ['戌', 3, [5, 8, 4]],
        0: ['亥', 5, [9, 1]]
      },
      wuXin: {
        1: '木',
        2: '火',
        3: '土',
        4: '金',
        5: '水'
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
    wuXingColor (ganZh) {
      // 五行顏色
      switch (true) {
        case ganZh === 1:
          return 'wuXing-tree'
        case ganZh === 2:
          return 'wuXing-fire'
        case ganZh === 3:
          return 'wuXing-soil'
        case ganZh === 4:
          return 'wuXing-gold'
        case ganZh === 5:
          return 'wuXing-water'
      }
    },
    hideGan (zh) {
      // 把地支帶進來找出藏干
      const HideGanToWord = zh[2].map(element =>
        this.tianGan[element][0]
      ).join(' ')
      return HideGanToWord
    },
    ganTenGod (gan, ganIanYong) {
      // 天干十神計算
      const IanYong = Math.abs(ganIanYong - this.tianGan[this.ganZhNum.dayGan][2])
      const me = this.tianGan[this.ganZhNum.dayGan][1]
      const tenGodNum = gan + 5 - me
      return this.tenGod[tenGodNum][IanYong]
    },
    ziTenGod (zh) {
      // 地支十神計算
      return zh[2].map(element =>
        this.ganTenGod(this.tianGan[element][1], this.tianGan[element][2])
      )
    },
    addTainGan (obj, key) {
      // 天干調整+
      if (obj[key] >= 9) {
        obj[key] = 0
      } else {
        obj[key] += 1
      }
    },
    minusTainGan (obj, key) {
      // 天干調整-
      if (!(obj[key])) {
        obj[key] = 9
      } else {
        obj[key] -= 1
      }
    },
    addDiZh (obj, key) {
      // 地之調整+
      if (obj[key] >= 11) {
        obj[key] = 0
      } else {
        obj[key] += 1
      }
    },
    minusDiZh (obj, key) {
      // 地支調整 -
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
    sex () {
      const data = () => {
        if (this.birthday.sex === '1') {
          return '男'
        } else {
          return '女'
        }
      }
      return data()
    }
  }
}
</script>

<style lang="scss" scoped>
.wuXing-tree{
  font-weight: bold;
  color:rgb(11, 180, 11)
}
.wuXing-fire{
  font-weight: bold;
  color:red
}
.wuXing-soil{
  font-weight: bold;
  color:rgb(202, 113, 10)
}
.wuXing-gold{
  font-weight: bold;
  color:orange
}
.wuXing-water{
  font-weight: bold;
  color:blue
}
.bg-gray{
  background-color:rgb(199, 197, 197)
}
</style>

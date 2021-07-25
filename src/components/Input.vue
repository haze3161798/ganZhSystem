<template>
  <div class="container">
    <form action="">
      <div class="py-5">
        <div class="d-md-flex justify-content-center py-md-2">
          <div class="d-flex py-2 py-md-0">
            <div class="form-text-left">
              <span>出生年(西元)</span>
            </div>
            <div class="col">
              <select class="form-control input-md-width" v-model="birthday.year" @change="dayCount">
                <option value="0" disabled="disabled">請選擇年份</option>
                <option :value="item + 1900" v-for="item in selectBirthdayYear" :key="item">{{ '西元' + (item + 1900) + '年'}}</option>
              </select>
            </div>
          </div>
          <div class="d-flex ">
            <div class="form-text-left">
              <span>出生月(國曆)</span>
            </div>
            <div class="col">
              <select class="form-control input-md-width" v-model="birthday.month" @change="dayCount">
                <option value="0" disabled="disabled">請選擇月份</option>
                <option :value="item" v-for="item in 12" :key="item">{{item + '月'}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="d-md-flex justify-content-center py-md-2">
          <div class="d-flex py-2 py-md-0">
            <div class="form-text-left">
              <span>出生日(國曆)</span>
            </div>
            <div class="col">
              <select class="form-control input-md-width" v-model="birthday.day">
                <option value="0">請選擇日期</option>
                <option :value="item" v-for="item in selectBirthdayDay" :key="item">{{item + '日'}}</option>
              </select>
            </div>
          </div>
          <div class="d-flex">
            <div class="form-text-left">
              <span>出生時間</span>
            </div>
            <div class="col">
              <select class="form-control input-md-width" v-model="birthday.time">
                <option value="0">請選擇時間</option>
                <option :value="item - 1" v-for="item in 24" :key="item">{{item - 1 + '點'}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <router-link to="/Index">
          <button class="btn btn-primary" type="button" @click="test">送出</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  created () {
    this.birthday = this.birthdayData
  },
  props: {
    birthdayData: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      selectBirthdayYear: 148,
      selectBirthdayDay: 31,
      birthday: {}

    }
  },
  methods: {
    test () {
      console.log(this.birthday)
    },
    dayCount () {
      const leepmonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      const noleepmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      const month = this.birthday.month
      if (!((this.birthday.year) % 4)) {
        this.selectBirthdayDay = leepmonth[month - 1]
      } else {
        this.selectBirthdayDay = noleepmonth[month - 1]
      }
    }
  },
  computed: {}

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
</style>

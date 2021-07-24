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
              <input class="form-control w-100" type="number">
            </div>
          </div>
          <div class="d-flex ">
            <div class="form-text-left">
              <span>出生月(國曆)</span>
            </div>
            <div class="col">
              <select class="form-control w-100" v-model="birthday.month">
                <option value="0" disabled="disabled">請選擇</option>
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
              <input class="form-control w-100" type="number">
            </div>
          </div>
          <div class="d-flex">
            <div class="form-text-left">
              <span>出生時間</span>
            </div>
            <div class="col">
              <input class="form-control w-100" type="number">
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary" type="submit">送出</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      birthday: {
        year: 1993,
        month: 0,
        day: 28,
        time: 23
      }
    }
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
</style>

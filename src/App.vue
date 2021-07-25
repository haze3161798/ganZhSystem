<template>
  <Router-view :birthdayData="birthdayData"/>
</template>

<script>
export default {
  data () {
    return {
      birthdayData: {
        year: 1993,
        month: 12,
        day: 18,
        time: 1
      }
    }
  }
}
</script>

<style>

</style>

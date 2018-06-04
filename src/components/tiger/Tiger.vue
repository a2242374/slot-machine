<template>
  <div class="tiger-wrap">
    <div class="tiger-container">
        <div class="tiger-main">
          <tiger-main :result="result" @push="handlePushData"></tiger-main>
          <tiger-light></tiger-light>
        </div>
        <div class="tiger-bottom">
          <tiger-pour @getdata="handlePushData" @minus="handleMinus" :list-data="listData"></tiger-pour>
        </div>
        <div class="tiger-right">
          <tiger-money :gold="padZreo" @addgold="handleAddGold" @start="handleStartGame"></tiger-money>
        </div>
    </div>
  </div>
</template>

<script>
import TigerMain from './components/Main.vue'
import TigerPour from './components/Pour.vue'
import TigerMoney from './components/Money.vue'
import TigerLight from './components/Light.vue'
export default {
  name: 'Tiger',
  data () {
    return {
      gold: 100,
      result: 4,
      listData: []
    }
  },
  components: {
    TigerMain,
    TigerPour,
    TigerMoney,
    TigerLight
  },
  computed: {
    padZreo () {
      let num = this.gold
      let n = 7
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    }
  },
  methods: {
    handleAddGold () {
      this.gold++
    },
    handleStartGame (result) {
      this.result = result
    },
    handleMinus () {
      this.gold = this.gold - 1
    },
    handlePushData (data) {
      this.listData = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .tiger-container
    position:relative
    width:1080px
    height:820px
    margin:40px auto 0
    .tiger-main
      position:absolute
      top:0
      left:0
      width:804px
      height:556px
      background:#fc0
    .tiger-bottom
      width:804px
      height:160px
      position:absolute
      top:570px
      left:0
    .tiger-right
      width:250px
      height:750px
      position:absolute
      right:0
      top:0
</style>

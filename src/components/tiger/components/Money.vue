<template>
  <div>
    <div class="money-box">
      <div class="add-money">
        <div class="money-show">
          {{this.$store.state.gold}}
        </div>
        <div class="money-insert">
          <div class="money-insert-left">
            <img src="../../../assets/images/insert-icon.png" alt="">
          </div>
          <div class="money-insert-right" @click="handleAddMoney">
            <img src="../../../assets/images/insert-btn.png" alt="">
          </div>
        </div>
        <div class="money-start">
          <div class="start-btn" @click="handleStartRotate">
            <img src="http://p9ubkn3w7.bkt.clouddn.com/start-btn.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Money',
  props: {
    gold: String
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleAddMoney () {
      this.$emit('addgold')
    },
    handleStartRotate () {
      let randomNum = Math.floor(Math.random() * (100 - 50 + 1) + 50)
      this.$emit('start', randomNum)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .money-box
    .add-money
      .money-show
        background:#391A07
        color:#FF411B
        padding:6px 0
        font-size:36px
        border:4px solid #883F13
        letter-spacing:4px
        font-weight:bold
      .money-insert
        display:flex
        justify-content:space-between
        margin-top:20px
        .money-insert-right
          margin-top:20px
      .money-start
        margin-top:20px
        background:#FFE3BF
        height:510px
        border-radius:5px
        position:relative
        .start-btn
          position:absolute
          bottom:80px
          left:45px
</style>

<template>
  <div>
    <div class="money-box">
      <div class="add-money">
        <div class="money-show">
          {{padZreo}}
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
  computed: {
    padZreo () {
      let num = this.$store.state.gold
      let n = 7
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    }
  },
  data () {
    return {
      minNumbs: [1, 2, 3, 6, 7, 8, 12, 13, 14, 18],
      maxNumbs: [4, 5, 15, 20, 21]
    }
  },
  methods: {
    handleAddMoney () {
      this.$emit('addgold')
    },
    randomFunction () {
      let randomNum = Math.floor(Math.random() * (100 - 50 + 1) + 50)
      let hasNum = false
      console.log('第一次随机：' + randomNum % 22)
      for (var i = 0; i < this.minNumbs.length; i++) {
        if (randomNum % 22 === this.minNumbs[i]) {
          hasNum = true
        }
      }
      if (!hasNum) {
        randomNum = Math.floor(Math.random() * (100 - 50 + 1) + 50)
        console.log('第二次随机：' + randomNum % 22)
        for (var j = 0; j < this.maxNumbs.length; j++) {
          if (randomNum % 22 === this.maxNumbs[j]) {
            hasNum = true
          }
        }
        if (hasNum) {
          randomNum = Math.floor(Math.random() * (100 - 50 + 1) + 50)
          console.log('第三次随机：' + randomNum % 22)
        }
      }
      return randomNum
    },
    handleStartRotate () {
      // console.log(randomNum % 22)
      this.$emit('start', this.randomFunction())
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
          cursor:pointer
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
          cursor:pointer
</style>

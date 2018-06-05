<template>
  <div class="main-wrap">
    <div class="main-container">
      <div class="main-inner">
        <div class="main-icons">
          <div v-for="(item, index) of dataList" :key="index" :class="item.hasClass" :style="item.hasStyle"></div>
        </div>
        <div class="main-win-num">
          {{padZreo}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexList from '../datas/list.js'
export default {
  name: 'Main',
  props: {
    result: Number
  },
  computed: {
    padZreo () {
      let num = this.multiple
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
      dataList: IndexList,
      timer: null,
      current: 1, // 当前位置
      multiple: 0, // 倍数
      steep: 80, // 速度
      moneyList: []
    }
  },
  watch: {
    result () {
      this.handleChangeState(this.result)
    }
  },
  methods: {
    handleChangeState (thisResult) {
      let cishu = this.current - 1
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setInterval(() => {
        var qm = cishu % 22
        setTimeout(() => {
          if (qm === 0) {
            this.dataList[21].hasClass['current'] = false
          } else {
            this.dataList[qm - 1].hasClass['current'] = false
          }
        }, 140)
        this.dataList[qm].hasClass['current'] = true
        cishu++
        if (cishu === this.result) {
          this.current = this.dataList[qm].type
          this.multiple = this.dataList[qm].multiple
          this.$store.commit('changeGold', {cur: this.current, mul: this.multiple})
          // console.log(this.multiple + '倍  位置：' + qm)
          clearInterval(this.timer)
        }
      }, this.steep)
    }
  },
  mounted () {
    this.$emit('push', this.dataList)
    this.dataList[this.current - 1].hasClass['current'] = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.main-wrap
  height:100%
  .main-container
    border:4px solid #F1954A
    background:#985D3B
    height:100%
    overflow:hidden
    padding:50px
    box-sizing:border-box
    .main-inner
      border:2px solid #F1954A
      box-sizing:border-box
      background:#fff url(http://p9ubkn3w7.bkt.clouddn.com/tiger-center-img.png) center center no-repeat
      position:relative
      height:100%
      .main-icons
        position:relative
        .main-icon-item
          width:90px
          height:92px
          background:#fff
          position:absolute
          border:4px solid #E5E5E5
          text-align:center
          padding-top:3px
          box-sizing:border-box
        .main-icon-item-1
          background:#fff url(http://p9ubkn3w7.bkt.clouddn.com/anm-ico1.png) center center no-repeat
        .main-icon-item-2
          background:#fff url(http://p9ubkn3w7.bkt.clouddn.com/anm-ico2.png) center center no-repeat
        .main-icon-item-3
          background:#fff url(http://p9ubkn3w7.bkt.clouddn.com/anm-ico3.png) center center no-repeat
        .main-icon-item-4
          background:#fff url(http://p9ubkn3w7.bkt.clouddn.com/anm-ico4.png) center center no-repeat
        .main-icon-item-5
          background:#fff url(http://p9ubkn3w7.bkt.clouddn.com/anm-ico5.png) center center no-repeat
        .main-icon-item-6
          background:#fff url(http://p9ubkn3w7.bkt.clouddn.com/anm-ico6.png) center center no-repeat
        .main-icon-item-7
          background:#fff url(http://p9ubkn3w7.bkt.clouddn.com/anm-ico7.png) center center no-repeat
        .main-icon-item-8
          background:#fff url(http://p9ubkn3w7.bkt.clouddn.com/anm-ico8.png) center center no-repeat
        .current
          border-color:red
          z-index:1
        .double
          &:after
            width:44px
            height:25px
            background:url(../../../assets/images/cheng2.png) center center no-repeat
            position:absolute
            bottom:5px
            right:5px
            display:inline-block
            content:''
  .main-win-num
    position:absolute
    left: 250px
    top: 120px
    font-size:36px
    font-weight:bold
    background:#FFEFE1
    color:#fe1919
    border:4px solid #F1954A
    padding:6px 12px
    letter-spacing:3px
</style>

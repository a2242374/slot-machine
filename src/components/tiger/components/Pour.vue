<template>
  <div>
    <div class="pour-top">
      <span class="pour-num" v-for="item of types" :key="item.type">{{item.num | zero}}</span>
    </div>
    <div class="pour-bottom">
      <div :class="'pour-img main-icon-item-'+item.type" @click="handleBtPour(item.type)" v-for="item of this.$store.state.types" :key="item.type"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pour',
  props: {
    listData: Array,
    types: Array
  },
  data () {
    return {

    }
  },
  filters: {
    zero (num) {
      if (num.toString().length === 1) {
        return '0' + num
      } return num
    }
  },
  methods: {
    handleBtPour (item) {
      this.$store.commit('pourAdd', item)
      this.$store.commit('decrement')
    }
  },
  mounted () {
    this.$emit('getdata')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .pour-top
    background:#391A07
    color:#ff411b
    font-size:36px
    font-weight:bold
    border:4px solid #883f13
    .pour-num
      margin:0 20px
      letter-spacing:3px
  .pour-bottom
    margin-top:10px
    display:flex
    flex-wrap:nowrap
    justify-content:space-between
    flex-direction:row
    .pour-img
      width:87px
      height:87px
      border:4px solid #F1954A
      float:left
      border-radius:3px
    .main-icon-item-1
      background:#FF523B url(../../../assets/images/anm-ico1.png) center center no-repeat
      position:relative
      &:before
        content:''
        display:inline-block
        position:absolute
        right:5px
        bottom:5px
        width:44px
        height:25px
        background:url(../../../assets/images/cheng2.png) center center no-repeat
    .main-icon-item-2
      background:#FFF116 url(../../../assets/images/anm-ico2.png) center center no-repeat
      position:relative
      &:before
        content:''
        display:inline-block
        position:absolute
        right:5px
        bottom:5px
        width:43px
        height:25px
        background:url(../../../assets/images/cheng4.png) center center no-repeat
    .main-icon-item-3
      background:#BD4300 url(../../../assets/images/anm-ico3.png) center center no-repeat
      position:relative
      &:before
        content:''
        display:inline-block
        position:absolute
        right:5px
        bottom:5px
        width:43px
        height:25px
        background:url(../../../assets/images/cheng5.png) center center no-repeat
    .main-icon-item-4
      background:#6BF1D6 url(../../../assets/images/anm-ico4.png) center center no-repeat
      position:relative
      &:before
        content:''
        display:inline-block
        position:absolute
        right:5px
        bottom:5px
        width:44px
        height:25px
        background:url(../../../assets/images/cheng8.png) center center no-repeat
    .main-icon-item-5
      background:#F859B7 url(../../../assets/images/anm-ico5.png) center center no-repeat
      position:relative
      &:before
        content:''
        display:inline-block
        position:absolute
        right:5px
        bottom:5px
        width:60px
        height:25px
        background:url(../../../assets/images/cheng10.png) center center no-repeat
    .main-icon-item-6
      background:#FFCC53 url(../../../assets/images/anm-ico6.png) center center no-repeat
      position:relative
      &:before
        content:''
        display:inline-block
        position:absolute
        right:5px
        bottom:5px
        width:60px
        height:25px
        background:url(../../../assets/images/cheng15.png) center center no-repeat
    .main-icon-item-7
      background:#5AE65A url(../../../assets/images/anm-ico7.png) center center no-repeat
      position:relative
      &:before
        content:''
        display:inline-block
        position:absolute
        right:5px
        bottom:5px
        width:60px
        height:25px
        background:url(../../../assets/images/cheng20.png) center center no-repeat
    .main-icon-item-8
      background:#3D98FF url(../../../assets/images/anm-ico8.png) center center no-repeat
      position:relative
      &:before
        content:''
        display:inline-block
        position:absolute
        right:5px
        bottom:5px
        width:60px
        height:25px
        background:url(../../../assets/images/cheng30.png) center center no-repeat
</style>

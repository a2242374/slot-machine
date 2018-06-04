<template>
  <div>
    <div class="light-box">
      <div class="light-top">
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
      </div>
      <div class="light-left">
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
      </div>
      <div class="light-right">
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
      </div>
      <div class="light-bottom">
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
        <div :class="classObject2"></div>
        <div :class="classObject"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: true,
      timer: null
    }
  },
  computed: {
    classObject () {
      return {
        'light-off': this.isActive,
        'light-on': !this.isActive
      }
    },
    classObject2 () {
      return {
        'light-off': !this.isActive,
        'light-on': this.isActive
      }
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.isActive = !this.isActive
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
  .light-off
    width:18px
    height:18px
    background:#FAE9D3
    border-radius:50%
  .light-on
    width:18px
    height:18px
    border-radius:50%
    background:#FFF840
    box-shadow: 0 0 15px #ffff63
  .light-box
    position:absolute
    top:0
    left:0
    width:100%
    .light-top
      padding:20px 4px 0
      display:flex
      justify-content:space-around
      flex-direction:row
    .light-left
      padding-left:20px
      padding-top:28px
      height:450px
      float:left
      .light-on
        margin-bottom:27px
      .light-off
        margin-bottom:27px
    .light-right
      float:right
      padding-top:28px
      padding-right:20px
      .light-on
        margin-bottom:27px
      .light-off
        margin-bottom:27px
    .light-bottom
      width:100%
      padding:0 4px
      box-sizing:border-box
      display:flex
      justify-content:space-around
      flex-direction:row
</style>

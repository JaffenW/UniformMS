<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="aside-item" @click="itemClick()" :style="activeStyle">
    <slot name="item-text"></slot>
  </div>
</template>

<script>
  export default {
    name: "AsideItem",
    props: {
      path: String,
    },
    data() {
      return {
        activeColor:"#ffffff",
        activeBg:"#808080"
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor,backgroundColor:this.activeBg} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .aside-item{
    color: rgb(108, 136, 167);
    text-align: center;
    height: 49px;
    line-height: 49px;
    font-size: 18px;
    border-bottom: solid #eeeeee 1px;
  }
</style>

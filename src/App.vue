<template>
  <div id="app">
    <header class="header"><span>服装共享后台管理系统</span></header>
    <aside class="aside">
      <AsideItem path="/notice">
        <div slot="item-text">公告管理</div>
      </AsideItem>
      <AsideItem path="/clothing">
        <div slot="item-text">服装管理</div>
      </AsideItem>
      <AsideItem path="/order">
        <div slot="item-text">订单管理</div>
      </AsideItem>
      <AsideItem path="/post">
        <div slot="item-text">帖子管理</div>
      </AsideItem>
      <AsideItem path="/user">
        <div slot="item-text">账户管理</div>
      </AsideItem>
    </aside>
    <main class="router-view"><router-view/></main>
  </div>
</template>

<script>
import AsideItem from "components/asideitem"
export default {
  name: 'app',
  
  components: {
    AsideItem
  }
}
</script>

<style>
  @import "assets/css/base.css";
  #app{
    height:100vh;
  }
  .header{
    line-height: 5vh;
    font-size: 20px;
    text-align: center;
    letter-spacing: 1px;
    border-bottom: #eeeeee 1px solid;
  }
  .aside{
    float: left;
    height: 95vh;
    width: 15vh;
    border-right: solid 1px #eeeeee;
  }
  .router-view{
    display: flex;
  }
</style>

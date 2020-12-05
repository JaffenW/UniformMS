
<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="/clothing/show" index-path="/notice/show">服装列表</el-menu-item>
        <el-menu-item index="/clothing/addClothing" >添加服装</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clothes:[],
      total:null,
      activeIndex: '/clothing/show',
    };
  },
  methods: {
      handleSelect(key, keyPath) {
        this.$router.push(key);
      }
    },
  
}
</script>

<style scoped>
  .el-menu-demo{
    text-align: center;
    width:92.45vw;
    
  }
</style>
<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="/user/show" index-path="/notice/show">用户列表</el-menu-item>
        <el-menu-item index="/user/addUser" >添加用户</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/user/show',
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
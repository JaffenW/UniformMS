<!--  -->
<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="/notice/show" index-path="/notice/show">公告列表</el-menu-item>
        <el-menu-item index="/notice/addNotice" >添加公告</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notices:[],
      total:null,
      activeIndex: '/notice/show',
    };
  },
  computed:{
      
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
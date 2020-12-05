<template>
  <el-form class="el-form" ref="form" :model="notice" label-width="500px" label-position="auto">
    <el-form-item class="item-title" label="标题">
      <el-input v-model="notice.title"></el-input>
    </el-form-item>
    <el-form-item  label="内容">
      <el-input type="textarea" v-model="notice.content"  class="item-content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {saveNotice} from "network/notice"
  export default {
    data() {
      return {
        notice: {
          title: '',
          content: '',
        }
      }
    },
    methods: {
      onSubmit() {
        saveNotice(this.notice).then(res =>{
          console.log(res);
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        })
        console.log(this.notice);
      }
    }
  }
</script>

</script>
<style scoped>
.el-form{
  width: 50vw;
  margin-top:100px
}
.item-title{
  margin-top:30px
}

</style>
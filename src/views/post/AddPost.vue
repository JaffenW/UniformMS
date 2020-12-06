<template>
  <el-form class="el-form" ref="form" :model="post" label-width="500px" label-position="auto">
    <el-form-item label="帖子标题" prop="title">
      <el-input v-model="post.title"></el-input>
    </el-form-item>
    <el-form-item  label="内容" prop="content">
      <el-input type="textarea" v-model="post.content"></el-input>
    </el-form-item>
    <el-form-item label="发帖人" prop="uid">
      <el-input v-model="post.uid"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {addPost} from "network/post"
  export default {
    data() {
      return {
        post: {
          title: '',
          content:'',
          uid:''
        }
      }
    },
    methods: {
      onSubmit() {
        addPost(this.post).then(res =>{
          console.log(res);
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        })
        console.log(this.post);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

</script>
<style scoped>
.el-form{
  width: 50vw;
  margin-top:50px
}
</style>
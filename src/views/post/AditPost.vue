<template>
  <el-form class="el-form" ref="form" :model="post" label-width="500px" label-position="auto">
    <el-form-item label="帖子编号">
      <el-input v-model="post.postId" readonly></el-input>
    </el-form-item>
    <el-form-item label="帖子标题">
      <el-input v-model="post.title"></el-input>
    </el-form-item>
    <el-form-item  label="内容">
      <el-input type="textarea" v-model="post.content"></el-input>
    </el-form-item>
    <el-form-item label="发帖人">
      <el-input v-model="post.uid"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="onCannel">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {addPost,findPost} from "network/post"
  export default {
    data() {
      return {
        post: {
          postId:'',
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
      onCannel(){
        this.$router.go(-1)
      }
    },
    created(){
      const id =  this.$route.params.id;
      findPost(id).then(res =>{
        this.post = res;
      })
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
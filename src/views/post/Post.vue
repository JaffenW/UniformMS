<template>
  <div>
    <el-table :data="posts" stripe style="width: 100%">
      <el-table-column
        prop="postId"
        label="帖子编号"
        width="237">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="发帖人"
        width="237">
      </el-table-column>
      <el-table-column
        prop="title"
        label="帖子标题"
        width="237">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        width="237">
      </el-table-column>
      <el-table-column
        prop="date"
        label="发帖日期"
        width="237">
      </el-table-column>
      <el-table-column
        label="操作"
        width="237">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click.native.prevent="deletePost(scope.row.postId)">
            删除
          </el-button>
        </template>
        
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="4"
      :total=total
      @current-change="page">
    </el-pagination>
  </div>
</template>

<script>
import {findAllPosts,deletePost} from "network/post";

export default {
  data () {
    return {
      posts:[],
      total:null
    };
  },
  computed:{
      
  },
  methods: {
      deletePost(postId) {
        this.$confirm('你是否要删除Id为'+postId+'的帖子?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deletePost(postId).then(res => {
            this.$message({
            type: 'success',
            message: '删除成功!'
          });
          window.location.reload;
          console.log(res);
        }) 
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      page(currentPage){
        findAllPosts(currentPage).then(res => {
          this.posts = res.content;
    })
      }
    },
  created(){
    findAllPosts(1).then(res => {
      this.posts = res.content;
      this.total = res.totalElements;
    })
  },
}
</script>

<style scoped>
</style>
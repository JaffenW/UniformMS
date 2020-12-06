<template>
    <div>
      <el-form :inline="true" :model="searchItem" class="demo-form-inline" label-position="right" label-width="100px">
          <el-form-item label="姓名">
            <el-input v-model="searchItem.name" placeholder="请输入发帖人姓名"></el-input>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="searchItem.title" placeholder="请输入帖子标题"></el-input>
          </el-form-item>
          <el-form-item label="开始日">
            <el-date-picker type="date" placeholder="请选择发帖日期" v-model="searchItem.start" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="结束日">
            <el-date-picker type="date" placeholder="请选择发帖日期" v-model="searchItem.end" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">查询</el-button>
          </el-form-item>
      </el-form>
      <el-table :data="posts" stripe style="width: 100%" :header-cell-style="headstyle">
        <el-table-column
          prop="postId"
          label="帖子编号"
          width="237">
        </el-table-column>
        <el-table-column
          prop="username"
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
            <el-button size="small" @click.native.prevent="aditPost(scope.row.postId)">
              <i class="el-icon-edit"></i>
                编辑
            </el-button>
            <el-button type="danger" size="small" @click.native.prevent="deletePost(scope.row.postId)">
              <i class="el-icon-delete"></i>
              删除
            </el-button>
          </template>
          
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="8"
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
      total:null,
      headstyle:{
          background:"rgb(242,242,242)"
        },
      searchItem:{
          name:'',
          title:'',
          start:'',
          end:''
        }
    };
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
      },
      aditPost(postId){
        this.$router.push("/post/aditPost/"+postId)
      },
      onSearch(){
        searchNotices(this.searchItem).then(res =>{
          console.log(res);
          this.posts = res;
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
.demo-form-inline{
  padding-top:5px;
  height: 50px;
}
</style>
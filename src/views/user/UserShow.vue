<template>
    <div>
      <el-form :inline="true" :model="searchItems" class="demo-form-inline" label-position="right" label-width="100px">
          <el-form-item label="账号">
            <el-input v-model="searchItems.userId" placeholder="请输入用户账号查询"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="searchItems.userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">查询</el-button>
          </el-form-item>
      </el-form>
      <el-table :data="users" stripe style="width: 100%"  :header-cell-style="headstyle">
        <el-table-column
          prop="userId"
          label="账户"
          width="177">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码"
          width="177">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="姓名"
          width="177">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          width="178">
        </el-table-column>
        <el-table-column
          prop="role"
          label="角色"
          width="178">
        </el-table-column>
        <el-table-column
          prop="height"
          label="身高"
          width="178">
        </el-table-column>
        <el-table-column
          prop="weight"
          label="体重"
          width="178">
        </el-table-column>
        <el-table-column
          label="操作"
          width="178">
          <template slot-scope="scope">
            <el-button size="small" @click.native.prevent="aditUser(scope.row.userId)">
              <i class="el-icon-edit"></i>
                  编辑
              </el-button>
            <el-button type="danger" size="small" @click.native.prevent="deleteU(scope.row.userId)">
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
import {findAllUser,deleteUser,searchUsers} from "network/user";

export default {
  data () {
    return {
      users:[],
      total:null,
      headstyle:{
          background:"rgb(242,242,242)"
      },
      searchItems:{
          userId:'',
          username:''
      },
    };
  },
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      page(currentPage){
        findAllUser(currentPage).then(res => {
        this.users = res.content;
        this.total = res.totalElements;
        })
      },
      deleteU(userId) {
          this.$confirm('你是否要删除Id为'+userId+'的用户?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deleteUser(userId).then(res => {
              if(res == undefined){
                this.$message({
                  type: 'info',
                  message: '该用户有未完成的订单，不能删除!'
              });
              }else{
                this.$message({
                  type: 'success',
                  message: '删除成功!'
              });
              }
          }) 
          }).catch((error) => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });          
          });
        },
      aditUser(userId){
        this.$router.push("/user/aditUser/"+userId)
      },
      onSearch(){
        console.log(this.searchItems)
        searchUsers(this.searchItems).then(res =>{
          console.log(res);
          this.users = res;
        })
      }
    },
  
  created(){
    findAllUser(1).then(res => {
      this.users = res.content;
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
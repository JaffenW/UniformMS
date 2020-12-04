<template>
  <div>
    <el-table :data="users" stripe style="width: 100%">
      <el-table-column
        prop="userId"
        label="账户"
        width="203">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="203">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="姓名"
        width="203">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色"
        width="203">
      </el-table-column>
      <el-table-column
        prop="height"
        label="身高"
        width="203">
      </el-table-column>
      <el-table-column
        prop="weight"
        label="体重"
        width="203">
      </el-table-column>
      <el-table-column
        label="操作"
        width="203">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click.native.prevent="deleteU(scope.row.userId)">
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
import {findAllUser,deleteUser} from "network/user";

export default {
  data () {
    return {
      users:[],
      total:null
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
        console.log("hello");
          this.$confirm('你是否要删除Id为'+userId+'的用户?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            console.log(userId)
            deleteUser(userId).then(res => {
              console.log(res)
              this.$message({
              type: 'success',
              message: '删除成功!'
              });
          }) 
          }).catch((error) => {
            console.log(error)
            this.$message({
              type: 'info',
              message: '已取消删除'
            });          
          });
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
</style>
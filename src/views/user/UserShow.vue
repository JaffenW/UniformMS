<template>
    <div>
        <el-table :data="users" stripe style="width: 100%">
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
      :page-size="9"
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
<style lang='scss' scoped>
</style>
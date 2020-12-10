<template>
  <el-form class="el-form" ref="form" :model="user" label-width="500px" label-position="auto">
    <el-form-item label="账户">
      <el-input v-model="user.userId" readonly></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="user.password"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="user.userName"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select class="el-select" v-model="user.gender" placeholder="请选择">
        <el-option key="男" value="男">
        </el-option>
        <el-option key="女" value="女">
        </el-option>
        <el-option key="保密" value="保密">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="角色">
      <el-select class="el-select" v-model="user.role" placeholder="请选择">
        <el-option key="normal" value="normal">
        </el-option>
        <el-option key="admin" value="admin">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="身高">
      <el-input v-model="user.height"></el-input>
    </el-form-item>
    <el-form-item label="体重">
      <el-input v-model="user.weight"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button  @click="onCannel">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {modifyUser,findUser} from "network/user"
  export default {
    data() {
      return {
        user: {
          userId: '',
          password:'',
          userName:'',
          gender:'',
          role:'',
          height:'',
          weight: '',
          address:'',
          phone:''
        }
      }
    },
    methods: {
      onSubmit() {
        modifyUser(this.user).then(res =>{
          console.log(res);
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        })
        console.log(this.user);
      },
      onCannel(){
        this.$router.go(-1)
      }
    },
    created(){
      const id =  this.$route.params.id;
      findUser(id).then(res =>{
        this.user = res;
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
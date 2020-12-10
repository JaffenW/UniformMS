<template>
  <el-form class="el-form" ref="form" :model="user" label-width="500px" label-position="auto">
    <el-form-item label="账户" prop="userId">
      <el-input v-model="user.userId"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="user.password"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="username">
      <el-input v-model="user.username"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="gender">
      <el-select class="el-select" v-model="user.gender" placeholder="请选择">
        <el-option key="男" value="男">
        </el-option>
        <el-option key="女" value="女">
        </el-option>
        <el-option key="保密" value="保密">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="角色" prop="role">
      <el-select class="el-select" v-model="user.role" placeholder="请选择">
        <el-option key="normal" value="normal">
        </el-option>
        <el-option key="admin" value="admin">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="身高" prop="height">
      <el-input v-model="user.height"></el-input>
    </el-form-item>
    <el-form-item label="体重" prop="weight">
      <el-input v-model="user.weight"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {addUser} from "network/user"
  export default {
    data() {
      return {
        user: {
          userId: '',
          password:'',
          username:'',
          gender:'',
          role:'',
          height:'',
          weight: '',
          address:'无',
          phone:'无'
        }
      }
    },
    methods: {
      onSubmit() {
        addUser(this.user).then(res =>{
          console.log(res);
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        })
        console.log(this.user);
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
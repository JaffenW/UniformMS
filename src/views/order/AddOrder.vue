<template>
  <el-form class="el-form" ref="form" :model="order" label-width="500px" label-position="auto">
    <el-form-item label="服装编号" prop="cid">
      <el-input v-model="order.cid"></el-input>
    </el-form-item>
    <el-form-item label="出租人" prop="owner">
      <el-input v-model="order.owner"></el-input>
    </el-form-item>
    <el-form-item label="租借人" prop="renter">
      <el-input v-model="order.renter"></el-input>
    </el-form-item>
    <el-form-item label="租借天数" prop="time">
      <el-input v-model="order.time"></el-input>
    </el-form-item>
    <el-form-item label="发货地" prop="origin">
      <el-input v-model="order.origin"></el-input>
    </el-form-item>
    <el-form-item label="收货地" prop="destination">
      <el-input v-model="order.destination"></el-input>
    </el-form-item>
    <el-form-item label="押金" prop="deposit">
      <el-input v-model="order.deposit"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {addOrder} from "network/order"
  export default {
    data() {
      return {
        order: {
          cid: '',
          owner:'',
          renter:'',
          time:'',
          origin:'',
          destination:'',
          deposit: '',
        }
      }
    },
    methods: {
      onSubmit() {
        addOrder(this.order).then(res =>{
          console.log(res);
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        })
        console.log(this.order);
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
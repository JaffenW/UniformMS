<template>
  <el-form class="el-form" ref="form" :model="order" label-width="500px" label-position="auto">
    <el-form-item label="订单编号">
      <el-input v-model="order.orderId" readonly></el-input>
    </el-form-item>
    <el-form-item label="服装编号">
      <el-input v-model="order.cid"></el-input>
    </el-form-item>
    <el-form-item label="出租人">
      <el-input v-model="order.owner"></el-input>
    </el-form-item>
    <el-form-item label="租借人">
      <el-input v-model="order.renter"></el-input>
    </el-form-item>
    <el-form-item label="租借天数">
      <el-input v-model="order.time"></el-input>
    </el-form-item>
    <el-form-item label="发货地">
      <el-input v-model="order.origin"></el-input>
    </el-form-item>
    <el-form-item label="收货地">
      <el-input v-model="order.destination"></el-input>
    </el-form-item>
    <el-form-item label="押金">
      <el-input v-model="order.deposit"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="onCannel">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {addOrder,findOrder} from "network/order"
  export default {
    data() {
      return {
        order: {
          orderId:'',
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
      onCannel(){
        this.$router.go(-1)
      }
    },
    created(){
      const id =  this.$route.params.id;
      findOrder(id).then(res =>{
        this.order = res;
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
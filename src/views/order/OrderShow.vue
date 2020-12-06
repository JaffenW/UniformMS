<template>
    <div>
        <el-table :data="orders" stripe style="width: 100%">
          <el-table-column
            prop="orderId"
            label="订单编号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="cid"
            label="服装编号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="owner"
            label="出租人"
            width="140">
          </el-table-column>
          <el-table-column
            prop="renter"
            label="租借人"
            width="140">
          </el-table-column>
          <el-table-column
            prop="date"
            label="订单日期"
            width="160">
          </el-table-column>
          <el-table-column
            prop="time"
            label="租借天数"
            width="140">
          </el-table-column>
          <el-table-column
            prop="origin"
            label="发货地"
            width="140">
          </el-table-column>
          <el-table-column
            prop="destination"
            label="收货地"
            width="140">
          </el-table-column>
          <el-table-column
            prop="deposit"
            label="押金"
            width="140">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
              <el-button size="small" @click.native.prevent="aditOrder(scope.row.orderId)">
                <i class="el-icon-edit"></i>
                编辑
            </el-button>
              <el-button type="danger" size="small" @click.native.prevent="deleteOrder(scope.row.orderId)">
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
import {findAllOrder,deleteOrder} from "network/order";

export default {
  data () {
    return {
      orders:[],
      total:null,
    };
  },
  methods:{
    page(currentPage){
      findAllOrder(currentPage).then(res => {
      this.orders = res.content;
    })
    },
    deleteOrder(orderId) {
        this.$confirm('你是否要删除Id为'+orderId+'的服装?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteOrder(orderId).then(res => {
            console.log(res);
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
    aditOrder(orderId){
        this.$router.push("/order/aditOrder/"+orderId)
      }
  },
  
  created(){
    findAllOrder(1).then(res => {
      this.orders = res.content;
      this.total = res.totalElements;
    })
  },
}
</script>
<style lang='scss' scoped>
</style>
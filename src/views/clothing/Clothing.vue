
<template>
  <div>
    <el-table :data="clothes" stripe style="width: 100%">
      <el-table-column
        prop="clothesId"
        label="服装编号"
        width="246">
      </el-table-column>
      <el-table-column
        prop="type"
        label="服装类型"
        width="246">
      </el-table-column>
      <el-table-column
        prop="description"
        label="服装描述"
        width="246">
      </el-table-column>
      <el-table-column
        prop="rent"
        label="租金"
        width="246">
      </el-table-column>
      <el-table-column
        prop="belong"
        label="所有者"
        width="246">
      </el-table-column>
      <el-table-column
        label="操作"
        width="245">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click.native.prevent="deleteClothes(scope.row.clothesId)">
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
import {findAllClothes,deleteClothing} from "network/clothing";

export default {
  data () {
    return {
      clothes:[],
      total:null,
    };
  },
  methods: {
      page(currentPage){
        findAllClothes(currentPage).then(res => {
        this.clothes = res.content;
        })
      },
      deleteClothes(clothesId) {
        this.$confirm('你是否要删除Id为'+clothesId+'的服装?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteClothing(clothesId).then(res => {
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
      }
    },
  
  created(){
    findAllClothes(1).then(res => {
      this.clothes = res.content;
      this.total = res.totalElements;
    })
  },
}
</script>

<style scoped>
</style>
<template>
    <div>
      <el-form :inline="true" :model="searchItems" class="demo-form-inline" label-position="right" label-width="100px">
          <el-form-item label="服装类型">
            <el-select class="el-select" v-model="searchItems.type" placeholder="请选择服装类型">
              <el-option
                v-for="item in types"
                :key="item.value" 
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所有者">
            <el-input v-model="searchItems.owner" placeholder="请输入服装所有者账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">查询</el-button>
          </el-form-item>
      </el-form>
      <el-table :data="clothes" stripe style="width: 100%"  :header-cell-style="headstyle">
        <el-table-column
          prop="clothesId"
          label="服装编号"
          width="237">
        </el-table-column>
        <el-table-column
          prop="type"
          label="服装类型"
          width="237">
        </el-table-column>
        <el-table-column
          prop="description"
          label="服装描述"
          width="237">
        </el-table-column>
        <el-table-column
          prop="rent"
          label="租金"
          width="237">
        </el-table-column>
        <el-table-column
          prop="belong"
          label="所有者"
          width="237">
        </el-table-column>
        <el-table-column
          label="操作"
          width="237">
          <template slot-scope="scope">
            <el-button size="small" @click.native.prevent="aditClothing(scope.row.clothesId)">
              <i class="el-icon-edit"></i>
                编辑
            </el-button>
            <el-button type="danger" size="small" @click.native.prevent="deleteClothes(scope.row.clothesId)">
              <i class="el-icon-delete"></i>
              删除
            </el-button>
          </template>
          
        </el-table-column>
      </el-table>
      <el-pagination  background  layout="prev, pager, next"  :page-size="8"  :total=total  @current-change="page">
      </el-pagination>
    </div>
</template>

<script>
import {findAllClothes,deleteClothes,searchClothes} from "network/clothing";
export default {
  data () {
    return {
        clothes:[],
        total:null,
        headstyle:{
          background:"rgb(242,242,242)"
        },
        types:[
          {
            value:'西装'
          },
          {
            value:'礼裙'
          },
          {
            value:'运动装'
          },
          {
            value:'休闲装'
          }
        ],
        searchItems:{
          type:'',
          owner:''
        },
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
      },
      aditClothing(clothingId){
        this.$router.push("/clothing/aditClothing/"+clothingId)
      },
      onSearch(){
        console.log(this.searchItems)
        searchClothes(this.searchItems).then(res =>{
          console.log(res);
          // this.clothes = res;
        })
      }
  },
  created(){
    findAllClothes(1).then(res => {
      this.clothes = res.content;
      this.total = res.totalElements;
    })
  }
}

</script>
<style scoped>
.demo-form-inline{
  padding-top:5px;
  height: 50px;
}
</style>
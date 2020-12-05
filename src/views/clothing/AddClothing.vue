<template>
  <el-form class="el-form" ref="form" :model="clothes" label-width="500px" label-position="auto">
    <el-form-item label="服装类型">
      <el-select class="el-select" v-model="clothes.type" placeholder="请选择">
        <el-option
          v-for="item in types"
          :key="item.value" 
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item  label="服装描述">
      <el-input type="textarea" v-model="clothes.description"></el-input>
    </el-form-item>
    <el-form-item label="租金">
      <el-input v-model="clothes.rent"></el-input>
    </el-form-item>
    <el-form-item label="所有者">
      <el-input v-model="clothes.belong"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {addClothing} from "network/clothing"
  export default {
    data() {
      return {
        clothes: {
          type: '',
          description: '',
          rent:'',
          belong:''
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
        ]
      }
    },
    methods: {
      onSubmit() {
        addClothing(this.clothes).then(res =>{
          console.log(res);
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        })
        console.log(this.clothes);
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
.el-select{
  width:265px
}
</style>
<template>
    <div>
        <el-form :inline="true" :model="searchItem" class="demo-form-inline" label-position="right" label-width="100px">
          <el-form-item label="标题">
            <el-input v-model="searchItem.title" placeholder="请输入公告标题"></el-input>
          </el-form-item>
          <el-form-item label="开始日">
            <el-date-picker type="date" 
              placeholder="请选择发布日期" 
              v-model="searchItem.start" 
              style="width: 100%;"
              value-format=" yyyy-MM-dd HH:mm" 
              format="yyyy-MM-dd HH:mm"></el-date-picker>
          </el-form-item>
          <el-form-item label="结束日">
            <el-date-picker 
            type="date" 
            placeholder="请选择发布日期" 
            v-model="searchItem.end" 
            style="width: 100%;"
            value-format=" yyyy-MM-dd HH:mm" 
            format="yyyy-MM-dd HH:mm"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="notices" stripe :header-cell-style="headstyle">
            <el-table-column
                prop="announcementId"
                label="公告编号"
                width="224">
            </el-table-column>
            <el-table-column
                prop="title"
                label="公告标题"
                width="244">
            </el-table-column>
            <el-table-column
                prop="content"
                label="内容"
                width="344">
            </el-table-column>
            <el-table-column
                prop="date"
                label="发布日期"
                width="324">
            </el-table-column>
            <el-table-column
                label="操作"
                width="286">
                <template slot-scope="scope">
                <el-button size="small" @click.native.prevent="aditPost(scope.row.announcementId)">
                  <i class="el-icon-edit"></i>
                编辑
                </el-button>
                <el-button type="danger" size="small" @click.native.prevent="deletePost(scope.row.announcementId)">
                  <i class="el-icon-delete"></i>
                    删除
                </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :page-size="8" :total=total @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
import {findAllNotices,deleteNotice,searchNotices} from "network/notice";
export default {
  data () {
    return {
        notices:[],
        total:null,
        headstyle:{
          background:"rgb(242,242,242)"
        },
        searchItem:{
          title:'',
          start:'',
          end:''
        }
    };
  },

  methods: {
      deletePost(noticeId) {
        console.log(noticeId);
        this.$confirm('你是否要删除Id为'+noticeId+'的帖子?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteNotice(noticeId).then(res => {
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
      page(currentPage){
        findAllNotices(currentPage).then(res => {
          this.notices = res.content;
        })
      },
      aditPost(noticeId){
        this.$router.push("/notice/aditNotice/"+noticeId)
      },
      onSearch(){
        console.log(this.searchItem)
        searchNotices(this.searchItem).then(res =>{
          console.log(res);
          this.notices = res;
        })
      }
  },
  
  created(){
    findAllNotices(1).then(res => {
      this.notices = res.content;
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
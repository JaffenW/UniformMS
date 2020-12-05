<template>
    <div>
        <el-table :data="notices" stripe style="width: 100%">
            <el-table-column
                prop="announcementId"
                label="公告编号"
                width="284">
            </el-table-column>
            <el-table-column
                prop="title"
                label="公告标题"
                width="284">
            </el-table-column>
            <el-table-column
                prop="content"
                label="内容"
                width="284">
            </el-table-column>
            <el-table-column
                prop="date"
                label="发布日期"
                width="284">
            </el-table-column>
            <el-table-column
                label="操作"
                width="286">
                <template slot-scope="scope">
                <el-button type="text" size="small" @click.native.prevent="aditPost(scope.row.announcementId)">
                编辑
                </el-button>
                <el-button type="text" size="small" @click.native.prevent="deletePost(scope.row.announcementId)">
                    删除
                </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :page-size="4" :total=total @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
import {findAllNotices,deleteNotice} from "network/notice";
export default {
  data () {
    return {
        notices:[],
        total:null
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
<style lang='scss' scoped>
</style>
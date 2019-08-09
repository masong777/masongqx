<template>
  <div class="llll">
  
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="权限编号" width="180">
          <template slot-scope="scope">
            <i class="el-icon-info"></i>
            <span style="margin-left: 10px">{{ scope.row.role_id}}</span>
          </template>
        </el-table-column>
        <el-table-column label="权限名称姓名" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.role_name }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="open(scope.row.role_id)">编辑</el-button>
            <el-button size="mini" type="danger" @click=" handleDelete(scope.row.role_id)">删除</el-button>
          </template>
        </el-table-column>
        <el-button type="primary">主要按钮</el-button>
      </el-table>
    </template>
 
  </div>
</template>
   </div>
</template>
<script>
name: "tianjia";
export default {
  data() {
    return {
      tableData: ""
    };
  },
  created() {
    this.queryqx();
  },
  methods: {
    //查询所有权限
    queryqx() {
      this.$axios
        .post("http://localhost:8080/api/user/queryqx")
        .then(response => {
          let result = response.data;
          if (result.status == 200) {
            this.tableData = result.data;
          } else if (result.status == 500) {
          }
        })
        .catch(error => {});
    },
    //删除权限
     handleDelete(ssss){
     let params = this.$qs.stringify({ role_id: ssss });
     console.log(params);
     this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.$axios
        .post("http://localhost:8080/api/user/deleteqx", params)
        .then(response => {
          let result = response.data;
          if (result.status == 200) {
            this.$message({
            type: 'success',
            message: '删除成功!',
           
          });
          this.queryqx()
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        })
    },
    //
    mignzi(params){
       
    },
    //修改权限
     open(ssss) {
        
        this.$prompt('输入新的权限名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          let params = this.$qs.stringify({role_name: value, role_id:ssss});
          console.log(params)
         this.$axios
        .post("http://localhost:8080/api/user/deleteqxmz",params)
        .then(response => {
          let result = response.data;
          if (result.status == 200) {
            this.tableData = result.data;
            this.$message({
            type: 'success',
            message: '修改成功'
          });
          } else if (result.status == 500) {
          }
        })
        .catch(error => {

        });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
  }
};
</script>
<style>
.llll {
  height:500px;
  width: 600px;
  margin-left: 300px;
  margin-top: 20px;
  background-color: aquamarine;
  display:flex;
}

</style>

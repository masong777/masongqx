<template>
     <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="入职日期"
      prop="user_time">
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="user_user_name">
    </el-table-column>
    <el-table-column
      label="联系方式"
      prop="user_telephone">
    </el-table-column>
    <el-table-column
      label="电子邮箱"
      prop="user_em">
    </el-table-column>
    <el-table-column
      label="权限名称"
      prop="role_name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<style>


</style>

<script>
export default {
    data() {
      return {
        tableData:'',
        search: ''
      }
    },
    created() {
    this.queryuser11();
  },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //用户管理
      queryuser11() {
      this.$axios
        .post("http://localhost:8080/api/user/yg")
        .then(response => {
          let result = response.data;
          if (result.status == 200) {
            this.tableData = result.data;
            console.log(this. tableData);
            // var date = new Date(this.suoyou[0].user_time);
            // this.dateTime = date.toLocaleString();
          } else if (result.status == 500) {
          }
        })
        .catch(error => {});
    },
    },
  }
</script>

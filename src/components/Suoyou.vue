<template>
  <div class="ss5">
    <el-table :data="suoyou" style="width: 100%">
      <el-table-column label="入职日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.user_time}}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户头像" width="180">
        <template slot-scope="scope">
          <div class="touxian">
            <img :src="'http://localhost:8080/masong/'+scope.row.user_img" />
          </div>
        </template>
      </el-table-column>

      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.user_user_name}}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="电子邮箱" width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.user_em}}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="联系方式" width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.user_telephone}}</el-tag>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="open()">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.user_id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "suoyou",
  data() {
    return {
      suoyou: ""
    };
  },
  created() {
    this.queryuser1();
  },
  methods: {
    //查询所有用户
    queryuser1() {
      this.$axios
        .post("http://localhost:8080/api/user/suoyou")
        .then(response => {
          let result = response.data;
          if (result.status == 200) {
            this.suoyou = result.data;
            console.log(this.suoyou);
            var date = new Date(this.suoyou[0].user_time);
            this.dateTime = date.toLocaleString();
          } else if (result.status == 500) {
          }
        })
        .catch(error => {});
    },
    //查看
    handleEdit(index, row) {
      console.log(index, row);
    },
    //删除
    handleDelete(ssss) {
        let params = this.$qs.stringify({ id: ssss });
        console.log(params)
        this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.$axios
        .post("http://localhost:8080/api/user/delete", params)
        .then(response => {
          let result = response.data;
          if (result.status == 200) {
            this.$message({
            type: 'success',
            message: '删除成功!',
           
          });
          this.queryuser1()
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        })
    },

    //编辑
    open() {
      this.$prompt("请输入修改信息", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>
<style>
.touxian {
  height: 60px;
  width: 60px;
  background-color: beige;
  border-radius: 50%;
}
.touxian img {
  height: 60px;
  width: 60px;
  border-radius: 50px;
}
</style>

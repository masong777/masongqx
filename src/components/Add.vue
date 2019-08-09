<template>
  <div class="ss6">
    <div class="opop">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.username"></el-input>
        </el-form-item>
        <el-form-item label="用户密码">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="formLabelAlign.telephone"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="formLabelAlign.em"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="submitForm('formLabelAlign')">添加用户</el-button>
      <el-button type="warning" @click="congzhi()">重置</el-button>
    </div>
  </div>
</template>
<style>
.opop {
  height: 500px;
  width: 400px;
  background-color: rgb(235, 236, 236);
  margin-top: 80px;
  margin-left: 200px;
}
.ss6 {
  height: 660px;
  width: 900px;
  margin-left: 180px;
  background-color: rgb(235, 236, 236);
  display: flex;
}

</style>
<script>
name: "add";
export default {
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        username: "",
        password: "",
        telephone: "",
        name: "",
        em: ""
      }
    };
  },
  methods: {
    //添加用户
    submitForm(formLabelAlign) {
       
              let params = this.$qs.stringify(this.formLabelAlign);
              this.$axios.post("http://localhost:8080/api/user/add",params).then(response => {
                let result = response.data;
                if (result.status == '200') {
                  this.$alert("添加用户成功");
                  this.$router.push({
                    name: "home"
                  });
                } else if (result.status == 500) {
                this.$alert("添加用户异常", "警告");
              }
          })
        .catch(error => {});
          } ,

   //重置表单
   congzhi(){



       this.$router.push({
                    name: "home"
                  });

  }
}
}
</script>


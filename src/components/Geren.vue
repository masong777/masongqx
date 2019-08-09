<template>
  <div class="s1" >
    <img :src="'http://localhost:8080/masong/'+user.user_img" />
    <p>{{user.user_user_name}}的头像</p>
    <div class="s4">
      <p>用户编号:{{user.user_id}}</p>
      <p>用户名:{{user.user_name}}</p>
      <p>用户姓名:{{user.user_user_name}}</p>
      <p>用户邮箱:{{user.user_em}}</p>
      <p>用户电话:{{user.user_telephone}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "geren",
  data() {
    return {
    //   id: JSON.parse(localStorage.getItem("userid")),
    //   list5: "",
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  created() {
    // this.queryuser2();
  },
  methods: {
    //查询用户信息
    // queryuser2() {
    //   let params = this.$qs.stringify({ id: this.id });
    //   console.log(this.id);

    //   this.$axios
    //     .post("http://localhost:8080/api/user/queryuser", params)
    //     .then(response => {
    //       let result = response.data;
    //       if (result.status == 200) {
    //         this.list5 = result.data;
    //         console.log("我要出现了");
    //       } else if (result.status == 500) {
    //       }
    //     })
    //     .catch(error => {});
    // }
  }
};
</script>


<style>

.s1 {
  height: 650px;
  width: 900px;
  background-color: rgb(226, 248, 248);
  margin-left: 160px;
}
.s1 img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
}
.s1 p {
  margin-top: 10px;
  font-size: 18px;
}
.s4 {
  margin-top: 50px;
  font-size: 18px;
}
</style>

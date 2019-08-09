<template>
  <div class="tou">
    <div class="img">

    </div>
    <div class="qian">
      <router-link :to="{path:'/'} "  class="sss1">欢迎</router-link>
        <router-link :to="{path:'/'}" class="sss2">{{this.user.user_user_name}}</router-link>
        <router-link :to="{path:'/'}" class="sss">登入明珠权限管理系统</router-link>
       </div>
    
    <div class="wenzi">
      <router-link :to="{path:'/'}">首页</router-link>
      <span class="sep">|</span>
      <router-link :to="{path:'/'}">注销</router-link>
      <span class="sep">|</span>
      <router-link :to="{path:'/'}">设置</router-link>
    </div>
    
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      //ss:window.sessionStorage.getItem("loginUserId"),
      //ss1:''
      //id:JSON.parse(localStorage.getItem('userid')),
      list: "",
      listdingdan: [],
      user:JSON.parse(localStorage.getItem('user')),
    };
  },
     created() {
  
    // this.queryuser();
   },
  methods: {
      //查询用户显示名字
    // queryuser(){
     
    // let params =this.$qs.stringify({id:this.id});
     
    //     this.$axios.post("http://localhost:8080/api/user/queryuser",params).then(response => {
    //       let result = response.data;
    //       if (result.status == 200) {
    //           this.list=result.data;  
           
    //        }else if(result.status == 500){
            
    //        }
    //      }).catch(error=>{
    //     });
    // },
}
}
</script>

<style>

.tou {
  background-color: black;
  height: 50px;
  display: flex;
}
.img{
   height: 50px;
   width: 50px;
   margin-left: 50px;
   background-color: aliceblue;
   background-image: url(../assets/logo.png);
   background-size: 50px 50px;
 }
.qian{
  background-color: black;
  height: 70px;
  width:300px;
  line-height: 50px;
   margin-left: 0px;
}
.qian .sss1{
  font-size: 20px;
}
.qian .sss2{
    font-size: 14px;
    color: rgb(233, 53, 53);
}
.qian .sss{
   font-size: 14px;
}


.tou .wenzi {
  width: 180px;
  height: 70px;
  background-color: black;
  font-size: 18px;
  line-height: 50px;
  margin-left:900px;
}

span {
  color: rgb(87, 87, 87);
}
a {
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  color: rgb(172, 171, 171);
  text-decoration: none;
}

.tou .wenzi a:hover {
  color: rgb(223, 219, 219);
}

</style>



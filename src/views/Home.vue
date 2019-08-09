<template>
  <div class="app">
    <Daohang></Daohang>
    <el-container style="height:703px;">
      <el-aside class="ss" width="190px">
        <el-menu style="background-color:rgb(219, 236, 233) " class="ss1">
          <el-submenu v-for="zhu in listliebiao" :key="zhu.zhu_id" :index="zhu.zhu_id" class="lolo">
            <template slot="title" style=" font-size: 22px" class="popo">{{zhu.zhu_name}}</template>
            <el-menu-item-group
              v-for="fu in list2"
              :key="fu.fu_id"
              class="ss2"
              style=" padding-right: 0px"
            >
              <el-menu-item
                v-if="fu.zhu_id==zhu.zhu_id"
                style=" font-size: 16px"
                @click="xianshi(fu.fu_id)"
              >{{fu.fu_name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="ss4">
          <Genren v-if="id1==1"></Genren>
          <Suoyou v-if="id1==8"></Suoyou>
          <Add v-if="id1==2"></Add>
          <tianjia v-if="id1==4"></tianjia>
          <Yuangong v-if="id1==3"></Yuangong>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
el-table-column {
  width: 10px;
}
.ss5 {
  height: 650px;
  width: 1280px;
  background-color: rgb(255, 255, 255);
}

.ss {
  background-color: rgb(230, 230, 230);
}

.ss2 {
  background-color: rgb(241, 241, 241);
}
.ss4 {
  background-color: rgb(226, 248, 248);
}

.s3 {
  width: 300px;
  margin-left: 300px;
  font-size: 18px;
}

.el-header {
  background-color: rgb(219, 236, 233);
  color: rgb(26, 24, 24);
  line-height: 60px;
}
.lolo {
  background-color: rgb(230, 230, 230);
}

.el-aside {
  color: #333;
}
</style>

<script>
import Daohang from "@/components/Daohang.vue";
import Genren from "@/components/Geren.vue";
import Suoyou from "@/components/Suoyou.vue";
import Add from "@/components/Add.vue";
import Tianjia from "@/components/Tianjia.vue";
import Yuangong from "@/components/Yuangong.vue";
export default {
  name: "home",
  components: {
    Daohang,
    Genren,
    Suoyou,
    Add,
    Tianjia,
    Yuangong
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(10).fill(item),
      id: JSON.parse(localStorage.getItem("userid")),
      list: "",
      listliebiao: [],
      list2: [],
      id1: ""
    };
  },
  created() {
    this.queryliebiao();
    this.queryliebiao1();
    this.queryuser();
  },

  methods: {
    //查询用户显示名字
    queryuser() {
      let params = this.$qs.stringify({ id: this.id });
      this.$axios
        .post("http://localhost:8080/api/user/queryuser", params)
        .then(response => {
          let result = response.data;
          if (result.status == 200) {
            this.list = result.data;
            localStorage.setItem("user", JSON.stringify(this.list));
          } else if (result.status == 500) {
          }
        })
        .catch(error => {});
    },

    // 查询权限显示一级菜单
    queryliebiao() {
      let params = this.$qs.stringify({ id: this.id });

      this.$axios
        .post("http://localhost:8080/api/user/query1", params)
        .then(response => {
          let result = response.data;
          if (result.status == 200) {
            this.listliebiao = result.data;
          } else if (result.status == 500) {
          }
        })
        .catch(error => {});
    },
    // 根据权限显示二级菜单
    queryliebiao1() {
      let params = this.$qs.stringify({ id: this.id });

      this.$axios
        .post("http://localhost:8080/api/user/query2", params)
        .then(response => {
          let result = response.data;
          if (result.status == 200) {
            this.list2 = result.data;
          } else if (result.status == 500) {
          }
        })
        .catch(error => {});
    },
    //显示页面
    xianshi(id) {

      if (id == "1") {
        this.id1 = "1";
      }else if (id == "2") {
        this.id1 = "2";
      }else if (id == "3") {
        this.id1 = "3";
      }else if (id == "4") {
        this.id1 = 4;
      }else if (id == "5") {
        this.id1 = "5";
      }else if (id == "6") {
        this.id1 = "6";
      }else if (id == "7") {
        this.id1 = "7";
      }else if (id == "8") {
        this.id1 = "8";
      } else {
        this.id1 = "";
      }
    }
  }
};
</script>

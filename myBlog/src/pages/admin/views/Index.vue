<template>
  <div id="Index">
    <el-container v-height>
      <el-aside width="auto">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          default-active="1-1"
          :collapse="isCollapse"
          :router="true"
          v-height
        >
          <el-submenu v-for="(item,index) in routes[0].children" :key="index" :index="index+1+''">
            <template slot="title">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{item.meta.name}}</span>
            </template>
            <el-menu-item
              v-for="(item1,index1) in item.children"
              :key="index1"
              :index="(index+1)+'-'+(index1+1)"
              @click="toPath(item,item1)"
            >{{item1.meta.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <i
              class="switch"
              :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"
              @click="changeWidth"
            ></i>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item,index) in path" :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <el-dropdown>
            <span class="el-dropdown-link">
              个人信息
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><router-link to="/login">注销</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import routes from "../script/aside.js";
export default {
  name: "Index",
  data() {
    return {
      isCollapse: false,
      path: []
    };
  },
  computed: {
    routes() {
      // console.log(routes)
      return routes;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toPath(parent, child) {
      this.path = [];
      this.path.push(parent.meta.name, child.meta.name);
      this.$router.push(child.path);
    },
    changeWidth() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped lang="scss">
.el-header {
  box-shadow: 0 5px 10px #f5f5f5;
  color: #333;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
  &>div{
    display: flex;
    align-items: center;
    .switch {
        font-size: 20px;
        background: #409eff;
        color: #fff;
        padding: 1px;
        border-radius: 3px;
        margin-right: 10px;
      }
  }
  
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

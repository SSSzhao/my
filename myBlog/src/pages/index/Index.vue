<template>
  <div id="Index">
    <nav :class="isShow?'show':'hide'" v-height>
      <div class="changeShow" @click="showNav"></div>
      <el-menu :default-active="getNavIndex" class="el-menu-vertical-demo">
        <el-menu-item
          v-for="(item,index) in routes"
          :key="index"
          :index="index+1+''"
          @click="toPath(item)"
        >
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.name}}</span>
        </el-menu-item>
      </el-menu>
    </nav>
    <div class="content" @click="isShow = false">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import routes from "./script/aside";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Index",
  data() {
    return {
      isShow: false,
      time: null
    };
  },
  computed: {
    routes() {
      return routes.filter(res => {
        return res?.meta?.leftNav;
      });
    },
    ...mapGetters(["getNavIndex"])
  },
  methods: {
    ...mapMutations(["setNavIndex"]),
    showNav() {
      this.isShow = !this.isShow;
      this.setTime();
    },
    toPath(val) {
      if (window.innerWidth <= 990) {
        this.isShow = false;
      }
      this.$router.push(val.path);
      localStorage.navIndex = val.meta.index;
      this.setNavIndex(val.meta.index);
      this.setTime();
    },
    setTime() {
      clearTimeout(this.time);
      this.time = this.isShow
        ? setTimeout(() => {
            this.isShow = false;
          }, 3000)
        : null;
    }
  },
  mounted() {
    localStorage.navIndex ? this.setNavIndex(localStorage.navIndex) : "1";
    setTimeout(() => {                             //定时器,created执行一秒后触发
      window.L2Dwidget.init({
        pluginRootPath: 'live2dw/',                 //指向你的目录
        pluginJsPath: 'lib/',                       //指向你的目录
        pluginModelPath: 'live2d-widget-model-nico/assets/',                                   //中间这个koharu就是你的老婆,想换个老婆,换这个就可以了
        tagMode: false,
        debug: false,
        model: { jsonPath: '/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },       //中间这个koharu就是你的老婆,想换个老婆,换这个就可以了
        display: { position: 'right', width: 150, height: 240 },                               //调整大小,和位置
        mobile: { show: true },                                                                //要不要盯着你的鼠标看
        log: false  
      })
    }, 300) 
  },
  beforeDestroy() {
    this.setNavIndex("1");
    localStorage.navIndex = "1";
  }
};
</script>

<style scope>
@import "./css/index.css";
</style>

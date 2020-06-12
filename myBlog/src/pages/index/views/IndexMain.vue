<template>
  <div id="IndexMain">
    <div class="mask">
      <div class="con">
        <div class="right wow fadeInRight" v-marginTop>
          <p class="title">HELLO!</p>
          <h1>我是<span>{{text}}</span></h1>
          <p
            class="text"
          >这里是文字区块，您可以点击文字上的编辑按钮更改这里的文字。广告集,搜集全球经典广告,有创意、爱公益、会搞笑,一个视频,几张图片,展现每一个精彩瞬 间,与你分享每一分的快乐和感动！</p>
          <button @click="toPath('about','2')">
            <i class="el-icon-user-solid"></i>了解更多
          </button>
          <button @click="toPath('works','3')">
            <i class="el-icon-folder-opened"></i>作品集
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {WOW} from 'wowjs';
export default {
  name: "IndexMain",
  data() {
    return {
      str: "您身边交互设计师",
      text: "",
      n: 0
    };
  },
  methods: {
    ...mapMutations(['setNavIndex']),
    add() {
      let time = setInterval(() => {
        this.text = this.str.slice(0, this.n);
        this.n++;
        this.n === this.str.length ?
        setTimeout(() => {
          clearInterval(time);
          this.reduce();
        }, 500) : 0
      }, 80);
    },
    reduce() {
      let time = setInterval(() => {
        this.text = this.str.slice(0, this.n);
        this.n--;
        if (this.n == 0) {
          clearInterval(time);
          this.str = this.str === "您身边交互设计师"?"一名前端工程师":"您身边交互设计师"
          this.add();
        }
      }, 30);
    },
    toPath(path,index) {
      this.$router.push("/" + path);
      localStorage.navIndex = index
      this.setNavIndex(index)
    }
  },
  mounted() {
    this.add();
    new WOW({live: false}).init();
  },
};
</script>

<style lang="scss" scoped>
#IndexMain {
  width: 100%;
  height: 100vh;
  min-height: 480px;
  background-image: url("../assets/main.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    .con {
      padding: 0 40px;
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .right {
        float: right;
        width: 454px;
        color: #ffffff;
        p {
          margin-bottom: 8px;
        }
        .title {
          font-family: Roboto;
          font-size: 20px;
        }
        h1 {
          font-size: 44px;
          line-height: 65px;
          span {
            color: #daa520;
          }
        }
        .text {
          font-size: 15px;
          font-family: 微軟正黑體;
          letter-spacing: inherit;
          line-height: 26px;
          padding-top: 12px;
          padding-bottom: 40px;
        }
        button {
          width: 172px;
          line-height: 47px;
          box-sizing: border-box;
          border: 2px solid rgb(218, 165, 32);
          border-radius: 32px;
          margin-right: 2vw;
          font-size: 14px;
          outline: none;
          transition: all 0.2s ease-in-out;
          i {
            margin-right: 10px;
          }
          &:nth-of-type(1) {
            background-color: rgb(218, 165, 32);
            color: #fff;
            &:hover {
              background-color: rgb(85, 85, 85);
              border-color: rgb(85, 85, 85);
            }
          }
          &:nth-of-type(2) {
            background-color: transparent;
            color: rgb(218, 165, 32);
            &:hover {
              background-color: rgb(218, 165, 32);
              color: #fff;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 990px) {
  #IndexMain{
    .mask{
      .con{
        max-width: 768px;
        padding: 12vh 20px 0;
        .right{
          width: 100%;
          h1{
            font-size: 3rem;
            margin-bottom: 3vh;
            line-height: 3rem;
          }
          button{
            width: 45% !important;
          }
        }
      }
    }
    
  }
}
</style>

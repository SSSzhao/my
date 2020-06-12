<template>
  <div id="Works">
    <div class="con wow fadeInRight">
      <div class="title">
        <h1>MY<span>PORTFOLIO</span></h1>
        <p><i></i><span>我的往期作品展示</span><i></i></p>
      </div>
      <div class="case">
        <ul>
          <li v-for="(item,index) in works" :key="index" @click="showMask(index)">
            <img :src="item.img"/>
            <div>{{item.text}}</div>
          </li>
        </ul>
        <router-view></router-view>
      </div>
      <div class="mask" :style="{'transform':isMask ? 'translateY(0)':'translateY(-100%)'}" @click.self="hideMask">
        <span class="maskLeft" @click="toLeft"><i class="el-icon-arrow-left"></i></span>
        <div>
          <mao v-if="this.num === 1"></mao>
          <elephant v-else-if="this.num === 2"></elephant>
        </div>
        <span class="maskRight" @click="toRight"><i class="el-icon-arrow-right"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
import mao from '../components/mao'
import elephant from '../components/elephant'
import {WOW} from 'wowjs';
export default {
  name: "Works",
  data() {
    return {
      works: [
        {
          img: require('../assets/work1.webp'),
          text: '小猫笑脸'
        },
        {
          img: require('../assets/work2.webp'),
          text: '大象走路'
        },
        {
          img: require('../assets/work3.webp'),
          text: '设计作品'
        },
        {
          img: require('../assets/work4.webp'),
          text: '设计作品'
        },
        {
          img: require('../assets/work5.webp'),
          text: '设计作品'
        },
        {
          img: require('../assets/work6.webp'),
          text: '设计作品'
        },
        {
          img: require('../assets/work7.webp'),
          text: '设计作品'
        },
        {
          img: require('../assets/work8.webp'),
          text: '设计作品'
        },
        {
          img: require('../assets/work9.webp'),
          text: '设计作品'
        }
      ],
      isMask:false,
      num: 1
    }
  },
  components: {
    mao,
    elephant,
  },
  methods: {
    showMask(index) {
      this.isMask = true
      this.num = index + 1 
    },
    hideMask() {
      this.isMask = false
    },
    toLeft() {
      this.num > 1 ? this.num-- : this.num
    },
    toRight() {
      this.num < this.works.length ? this.num++ : this.num
    }
  },
  mounted() {
    new WOW({live: false}).init();
  },
};
</script>

<style lang="scss" scoped>
#Works {
    position: relative;
    .con {
      max-width: 1190px;
      margin: 0 auto;
      padding-top: 8vh;
      .title {
        text-align: center;
        h1 {
          padding: 20px 0 12px;
          font-family: arial;
          font-size: 52px;
          font-weight: bold;
          color: #555555;
          span{
            color:#daa520;
          }
        }
        p{
          font-family:微軟正黑體;
          font-size:18px;
          color:#333333;
          display: flex;
          justify-content: center;
          align-items: center;
          i{
              display: inline-block;
              width: 35px;
              height: 2px;
              background-color: #daa520;
              &:first-child{
                  margin-right: 18px;
              }
              &:last-child{
                margin-left: 18px;
            }
          }
        }
      }
      .case{
        ul{
          padding: 24px 40px 0;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li{
            width: 32%;
            margin-bottom: 20px;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            img{
              width: 100%;
            }
            div{
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: rgba(218,165,32,0.9);
              font-size: 20px;
              color: #FFF;
              opacity: 0;
              transition: opacity 0.5s ease-out 0s;
            }
            &:hover{
              cursor: pointer;
              div{
                opacity: 1;
              }
            }
          }
        }
      }
    }
    .mask{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba($color: #FFFFFF, $alpha: 0.9);
      z-index: 999;
      transform: translateY(-100%);
      transition: transform 0.3s ease-out 0s;
      div{
        max-width: 500px;
        height: 500px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
      span{
        width: 40px;
        height: 40px;
        background-color: rgba($color: #000000, $alpha: 0.5);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        line-height: 40px;
        color: #FFFFFF;
        font-size: 22px;
        cursor: pointer;
        transition: all 0.3s ease-out 0s;
        &:hover{
          background-color: #daa520;
        }
      }
      .maskLeft{
        left: 0;
      }
      .maskRight{
        right: 0;
      }
    }
}

@media screen and (max-width: 990px){
  #Works{
    .con{
      .title{
        h1{
          font-size: 4rem;
        }
      }
      .case{
        ul{
          padding: 0 5vw;
          li{
            width: 48%;
          }
        }
      }
    }
  }
}
</style>

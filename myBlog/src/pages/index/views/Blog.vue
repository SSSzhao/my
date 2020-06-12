<template>
  <div id="Blog">
    <div class="con wow fadeInRight">
      <div class="title">
        <h1>BL<span>OG</span></h1>
        <p>
          <i></i>
          <span>有关网页设计和开发的技巧</span>
          <i></i>
        </p>
      </div>
      <div class="body">
        <span id="lunbo-left" @click="toLeft">
          <i class="el-icon-arrow-left"></i>
        </span>
        <div class="lunbo" ref="ulWidth">
          <ul :style="ulStyle">
            <li v-for="(item,index) in getBlogs" :key="index" @click="toBlogs(item.id)">
              <div class="lunbo-img">
                <img :src="item.img" />
                <div class="lunbo-pop">
                  <div>
                    <p>{{item.title}}</p>
                    <span>{{item.date}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <span id="lunbo-right" @click="toRight">
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import {mapGetters} from 'vuex'
export default {
  name: "Blog",
  data() {
    return {
      ulStyle: {
        width: 0,
        left: 0
      },
      n: 0
    };
  },
  computed: {
    ...mapGetters(['getBlogs'])
  },
  methods: {
    toLeft() {
      this.n <= 0 ? (this.n = this.getBlogs.length/2+1) : this.n--;
      this.ulStyle.left = (-parseInt(this.ulStyle.width) / 6) * this.n + "px";
    },
    toRight() {
      this.n >= this.getBlogs.length/2+1 ? (this.n = 0) : this.n++;
      this.ulStyle.left = (-parseInt(this.ulStyle.width) / 6) * this.n + "px";
    },
    resize() {
      this.ulStyle.width =
        window.innerWidth <= 990
          ? "100%"
          : this.$refs?.ulWidth?.offsetWidth * this.getBlogs.length/2 + "px";
    },
    toBlogs(id) {
      this.$router.push('/blogDetails/'+id)
    }
  },
  mounted() {
    new WOW({ live: false }).init();
    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
    });
  }
};
</script>

<style lang="scss" scoped>
#Blog {
  position: relative;
  .con {
    max-width: 1190px;
    margin: 0 auto;
    padding: 8vh 40px 0;
    .title {
      text-align: center;
      h1 {
        padding: 20px 0 12px;
        font-family: arial;
        font-size: 52px;
        font-weight: bold;
        color: #555555;
        span {
          color: #daa520;
        }
      }
      p {
        font-family: 微軟正黑體;
        font-size: 18px;
        color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 8vh;
        i {
          display: inline-block;
          width: 35px;
          height: 2px;
          background-color: #daa520;
          &:first-child {
            margin-right: 18px;
          }
          &:last-child {
            margin-left: 18px;
          }
        }
      }
    }
    .body {
      position: relative;
      .lunbo {
        overflow: hidden;
        max-width: 1190px;
        ul {
          width: 100%;
          position: relative;
          left: 0;
          display: flex;
          justify-content: space-around;
          transition: left 0.3s ease-out 0s;
          li {
            width: 550px;
            padding: 10px;
            position: relative;
            .lunbo-img{
              position: relative;
              width: 100%;
              border-radius: 10px;
              overflow: hidden;
              cursor: pointer;
              img {
                width: 100%;
                transition: all 0.3s ease-out 0s;
              }
            }
            &:hover {
              img {
                transform: scale(1.1);
              }
              .lunbo-pop {
                padding: 10px;
                opacity: 1;
              }
            }
          }
        }
        .lunbo-pop {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba($color: #fff, $alpha: 0.9);
          opacity: 0;
          height: 115px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease-out 0s;
          div {
            width: 100%;
            height: 100%;
            border: 2px solid #daa520;
            padding-left: 25px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #555555;
            p {
              margin-bottom: 0;
              font-size: 16px;
            }
            span {
              color: #999999;
              font-size: 14px;
            }
          }
        }
      }
      & > span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        font-size: 18px;
        opacity: 0.7;
        cursor: pointer;
        transition: all 0.3s ease-out 0s;
        &:hover {
          opacity: 1;
        }
      }
      #lunbo-left {
        left: -50px;
        background-color: #555555;
      }
      #lunbo-right {
        right: -50px;
        background-color: #daa520;
      }
    }
  }
}
@media screen and (max-width: 990px) {
  #Blog {
    .con {
      padding: 8vh 4vw 0;
      .body {
        & > span {
          display: none;
        }
        .lunbo {
          ul {
            display: block;
            li {
              width: 100%;
              display: block;
              text-align: center;
              img {
                width: 100%;
              }
            }
          }
          .lunbo-pop {
            position: absolute;
            opacity: 1;
            height: 20%;
            font-size: 1.4rem !important;
            div{
              border: 0;
            }
          }
        }
      }
    }
  }
}
</style>

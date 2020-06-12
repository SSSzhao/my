<template>
  <div id="BlogDetails">
    <header>
      <div class="backImg">
        <div class="mask">
          <h1>{{data.title}}</h1>
          <div>
            <ul>
              <li>
                <router-link to="/blog"><i class="el-icon-arrow-left"></i>返回上级</router-link>
              </li>
              <li>
                <i class="el-icon-user-solid"></i>
                {{data.date}}
              </li>
              <li>
                <i class="el-icon-date"></i>
                {{data.writer}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="body">
      <p>我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件…</p>
      <p>当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体。</p>
      <p>当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼。也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件…</p>
      <div>
        <ul>
          <li>
            <i class="el-icon-s-promotion"></i>{{data.num}}
          </li>
          <li>
            <i class="el-icon-user-solid"></i>
            {{data.date}}
          </li>
          <li>
            <i class="el-icon-date"></i>
            {{data.writer}}
          </li>
        </ul>
      </div>
      <footer>
        <span @click="toPrevBlog">
          <i class="el-icon-arrow-left"></i>
          上一篇 {{otherBlog(+this.id - 1)}}
        </span>
        <span @click="toNextBlog">
          下一篇 {{otherBlog(+this.id + 1)}}
          <i class="el-icon-arrow-right"></i>
        </span>
      </footer>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BlogDetails",
  props: ["id"],
  data() {
    return {
      data: null
    };
  },
  computed: {
    ...mapGetters(["getBlogs"])
  },
  methods: {
    getBlog(id=this.id) {
      [this.data] = this.getBlogs.filter(res => {
        return res.id == id;
      });
    },
    otherBlog(id) {
      let [blog] = this.getBlogs.filter(res => {
        return res.id == id;
      });
      return blog?.title || "没有了";
    },
    toPrevBlog() {
      let id = +this.id > 1 ? +this.id - 1 : this.id;
      console.log(this.id);
      this.$router.push("/blogDetails/" + id);
      this.getBlog(id)
    },
    toNextBlog() {
      let id =
        +this.id < this.getBlogs[this.getBlogs.length - 1].id
          ? +this.id + 1
          : this.id;
      this.$router.push("/blogDetails/" + id);
      this.getBlog(id)
    }
  },
  created() {
      this.getBlog()
  }
};
</script>
<style lang="scss" scope>
#BlogDetails {
  header {
    height: 475px;
    background-color: rgb(218, 165, 32);
    padding-bottom: 15px;
    .backImg {
      height: 100%;
      background: url("../assets/blogHead.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center bottom;
      .mask {
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.4);
        h1 {
          font-size: 40px;
          color: #fff;
          padding-top: 150px;
          text-align: center;
        }
        div {
          max-width: 710px;
          margin: 35px auto 0;
          background-color: #000000;
          border-radius: 50px;
          height: 76px;
          ul {
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            font-size: 14px;
            color: #ffb400;
            li {
              a{
                color: #ffb400;
                text-decoration: none;
              }
              i {
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
  .body {
    max-width: 820px;
    margin: 10vh auto;
    padding: 0 15px;
    p {
      line-height: 40px;
      font-size: 14px;
      color: #555555;
    }
    div {
      background-color: #f4f4f4;
      border-radius: 50px;
      height: 62px;
      ul {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 14px;
        color: #000;
        li {
          i {
            margin-right: 10px;
          }
        }
      }
    }
    footer {
      margin: 70px 0 30px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      span {
        cursor: pointer;
      }
    }
  }
}
</style>
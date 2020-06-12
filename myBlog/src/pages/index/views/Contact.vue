<template>
  <div id="Contact">
    <div class="con wow fadeInRight">
      <div class="title">
        <h1>
          CONTACT
          <span>ME</span>
        </h1>
        <p>
          <i></i>
          <span>您可以随时联系我</span>
          <i></i>
        </p>
      </div>
      <div class="body">
        <p>如果您有任何建议、商业合作，甚至想说声“ Hello ..”，请填写下面的表格，我会尽快给您答复。</p>
        <form action>
          <input v-model="contact.name" type="text" class="name" placeholder="姓名" />
          <input v-model="contact.email" type="text" class="email" placeholder="邮箱" />
          <textarea v-model="contact.text" id="text" rows="3" cols="25" placeholder="内容"></textarea>
          <button>提交</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  name: "Contact",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        text: ""
      }
    };
  },
  mounted() {
    new WOW({ live: false }).init();
  }
};
</script>

<style lang="scss" scoped>
#Contact {
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
        margin-bottom: 10vh;
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
      p {
        text-align: center;
        font-size: 16px;
      }
      form {
        width: 660px;
        margin: 0 auto;
        padding-top: 55px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        * {
          font-size: 14px;
          border-radius: 50px;
          outline: 0;
          border: 1px solid #e1e1e1;
          padding-left: 15px;
          &:focus {
            &::placeholder {
              opacity: 0.5;
              transition: opacity 0.3s ease-out 0s;
            }
          }
        }
        input {
          width: 49%;
          height: 56px;
          margin-bottom: 15px;
        }
        textarea {
          display: block;
          padding-top: 15px;
          margin: 0 0 20px;
          width: 100%;
          height: 160px;
        }
        button {
          margin: 0 auto;
          padding: 0;
          width: 30%;
          height: 52px;
          background-color: #daa520;
          color: #ffffff;
          border: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 990px) {
  #Contact {
    .con {
      .title {
        h1 {
          font-size: 4rem;
        }
      }
      .body {
        padding: 0 4vw;
      }
    }
  }
}
@media screen and (max-width: 760px) {
  #Contact {
    .con {
      .body {
        form {
          max-width: 100%;
          input{
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

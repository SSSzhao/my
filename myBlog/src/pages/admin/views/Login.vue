<template>
  <div id="Login">
    <el-form
      :model="user"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="60px"
      class="demo-ruleForm"
    >
      <h1>管理员登录</h1>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          type="password"
          v-model="user.password"
          @keyup.enter.native="submitForm('ruleForm')"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
        send: "登陆"
      },
      rules: {
        email: [{ required: true, message: "请输入邮箱地址", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post(
              "api/login.php",
              qs.stringify({ Login: JSON.stringify(this.user) })
            )
            .then(res => {
              console.log(res);
              if (res.data.valid) {
                this.$router.push("/");
                localStorage.token = res.data.msg.token
              } else {
                this.$message({
                  message: "用户名或密码错误",
                  type: "error"
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.el-form {
  width: 30%;
  margin: 50px auto;
  text-align: center;
  h1 {
    margin-bottom: 30px;
  }
}
</style>

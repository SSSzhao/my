<template>
  <div id="UserAdd">
    <el-form
      :model="user"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input type="text" v-model="user.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="user.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
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
  name: "UserAdd",
  data() {
    return {
      user: {
        email: "",
        password: "",
        sex: 1
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
            .post("api/register.php", qs.stringify(this.user))
            .then(res => {
              if (res.data.valid) {
                this.$message({
                  message: res.data.msg,
                  type: "success"
                });
                this.$refs[formName].resetFields();
              } else {
                this.$message({
                  message: res.data.msg,
                  type: "error"
                });
              }
            });
        } else {
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
.demo-ruleForm {
  width: 30%;
}
</style>

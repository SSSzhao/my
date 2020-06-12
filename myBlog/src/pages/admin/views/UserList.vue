<template>
  <div id="UserList">
    <el-table :data="users" border style="width: 50%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button @click="delUser(scope.row,scope.$index)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      users: []
    };
  },
  methods: {
    delUser(row,index) {
      let token;
      if(localStorage.token){
        token = localStorage.token
      }
      this.axios.get('api/userDel.php?userid='+row.id+'&token='+token)
      .then((res)=>{
        console.log(res)
        if(res.data.valid){
          this.$message({
            message: res.data.msg,
            type: "success"
          });
          this.users.splice(index,1)
        }else{
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      })
    }
  },
  created() {
    this.axios.get("api/getusers.php").then(res => {
      console.log(res);
      this.users = res.data.users;
    });
  }
};
</script>

<style>
</style>

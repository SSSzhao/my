<template>
  <div id="Admin">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Admin',
  data () {
    return {
      
    }
  },
  components: {
    
  },
  created() {
    // this.axios.get('http://jsonplaceholder.typicode.com/comments')
    //   .then(res=>console.log(res))
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: #606266;
}
</style>

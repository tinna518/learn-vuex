<template>
  <div id="app">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
         <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
         <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
    <el-button>取消</el-button>
  </el-form-item>
  </el-form>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      form:{
        name:'',
        password:''
      }
    }
  },
  methods: {
    onSubmit(){
       this.$axios.post('login',{name:this.form.name,password:this.form.password}).then((res)=>{
         this.commit('save',res.data.username)
         console.log('发送成功')
       })
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
	<div>
     <div class="title">
			 <p>elm后台管理系统</p>
			 <div class="cont">
				 <input type="text"placeholder="用户名"v-model="inputo">
				 <input type="password"placeholder="密码"v-model="inputt">
                 <button type="primary"@click="login()">登录</button> 
             <div class="app_tip">
					 <span>温馨提示:</span>
					 <span>未登录过的用户,自动注册</span>
					 <span>注册过的用户可凭账号密码登录</span>
				 </div>
			 </div>
		 </div>
 
  </div>
</template>

<script>
import axios from 'axios'
export default {
	
  data() {
    return {
      inputo: '',
			inputt:''
    }
  },
	methods:{
		login(){
			let data={
				user_name:this.inputo,
				password:this.inputt
			}
			axios.post('https://elm.cangdu.org/admin/login',data).then((res)=>{
				// console.log(res.data.status)
				if(res.data.status==1){
					this.$router.push('/message')
				}
			})
		}
	}
}
</script>

<style>
body{
	background: #324057;
}
.title{
	width: 450px;
	height: 400px;
	margin: 0 auto;
	margin-top: 100px;
	text-align: center;
}
.title>p{
	position: absolute;
     top: 15%;
    left: 43%;
	color: white;
	font-size: 30px;
	font-weight: 400;
}
.cont{
	width: 320px;
    height: 210px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -105px;
    margin-left: -160px;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
}
.cont>input{
	width: 300px;
	height: 30px;
	border-radius: 5px;
	outline: 1;
	margin-top: -10px;
	padding-left: 10px;
}
.cont>input:nth-child(2){
	margin-top: 20px;
}
.cont>button{
	width: 315px;
	border-radius: 4px;
	height: 35px;
	border: 0;
	outline: 0;
	margin-top: 15px;
	background: #20a0ff;
	color: white;
	cursor: pointer;
}
.app_tip{
	color: red;
	font-size: 14px;
	margin-top: 20px;
}
.app_tip>span{
	display: block;
}
</style>
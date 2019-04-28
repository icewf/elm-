<template>
		<div>
			<el-container>
						<el-row class="tac">
						  <el-col :span="12">
						    <el-menu
						      default-active="2"
						      class="el-menu-vertical-demo"
						      @open="handleOpen"
						      @close="handleClose"
						      background-color="#545c64"
						      text-color="#fff"
						      active-text-color="#ffd04b"> 
										
						          <el-menu-item index="2">
						            <i class="el-icon-menu"></i>
						            <span slot="title"><router-link to='/message/'>首页</router-link></span>
						          </el-menu-item>
											
											<el-submenu index="1-1">
											  <template slot="title">数据管理</template>
											  <el-menu-item index="1-1-1"><router-link to='/userlist'>用户列表</router-link></el-menu-item>
												<el-menu-item index="1-1-2"><router-link to='/store'>商家列表</router-link></el-menu-item>
												<el-menu-item index="1-1-3"><router-link to='/foods'>食品列表</router-link></el-menu-item>
												<el-menu-item index="1-1-4"><router-link to='/orderlist'>订单列表</router-link></el-menu-item>
												<el-menu-item index="1-1-5"><router-link to='/admainlist'>管理员列表</router-link></el-menu-item>
											</el-submenu>
											
						        <el-submenu index="1-2">
						          <template slot="title">添加数据</template>
						          <el-menu-item index="1-2-1">添加商铺</el-menu-item>
											<el-menu-item index="1-2-2">添加商品</el-menu-item>
						        </el-submenu>
										
						        <el-submenu index="1-3">
						          <template slot="title">图表</template>
						          <el-menu-item index="1-3-1">用户分布</el-menu-item>
						        </el-submenu>
										
						        <el-submenu index="1-4">
						          <template slot="title">编辑</template>
						          <el-menu-item index="1-4-1">文本编辑</el-menu-item>
						        </el-submenu>
						      
						        <el-submenu index="1-5">
						          <template slot="title">设置</template>
						          <el-menu-item index="1-5-1">管理员设置</el-menu-item>
						        </el-submenu>
										
										<el-submenu index="1-6">
										  <template slot="title">说明</template>
										  <el-menu-item index="1-6-1">说明</el-menu-item>
										</el-submenu>
						      
						    </el-menu>
						  </el-col>
						</el-row>
          <el-container>
              <router-view/>
          </el-container>
      </el-container>
		</div>		
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
export default {
	components:{Header,Main},
	data() {
		const item = {
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄'
		};
		return {
			tableData: Array(20).fill(item)
		};
	},
	 methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }	
    }
};
</script>

<style>
	
body {
	background: #ffffff;
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
	color: white;
}
.el-header{
    background-color: #B3C0D1;
    color: #333;
		width: 100%;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
		position: fixed;
		top: 0;
		left: 0;
  }
  .tac{
		height: 665px;
		width: 200px;
		background-color: rgb(84, 92, 100);
	}
  .el-main {
    background-color: #FFFFFF;
    color: #333;
		position: absolute;
		top: 50px;
		left: 200px;
		width: 85.2%;
		height: 92%;
  }
  .el-menu{
  	width: 200px;
  }
  .el-aside{
  	background: rgb(84, 92, 100);
  }
	.el-col-12{
		height: 665px;
		background-color: rgb(84, 92, 100);
	}
</style>

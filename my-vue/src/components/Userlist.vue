<template>  
	<div class="index_first">
		
	<Header></Header>
	
	<el-table
	  ref="singleTable"
	  :data="userdata"
	  highlight-current-row
	  @current-change="handleCurrentChange"
	  style="width: 100%">
	  <el-table-column
	    type="index"
	    width="100">
	  </el-table-column>
	  <el-table-column
	    property="registe_time"
	    label="注册日期"
	    width="200">
	  </el-table-column>
	  <el-table-column
	    property="username"
	    label="姓名"
	    width="200">
	  </el-table-column>
	  <el-table-column
	    property="city"
	    label="地址">
	  </el-table-column>
	</el-table>
		
	<div class="block">
       <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="20"
          layout="total, prev, pager, next"
          :total="1000">
       </el-pagination>
    </div>
  
  </div>
</template>

<script>
import Header from './Header'
import axios from 'axios'
	export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
		  this.num=val
       axios.get(`https://elm.cangdu.org/v1/users/list?offset=${this.num*20}&limit=20`).then((res)=>{
       	console.log(res.data)
       	this.userdata=res.data
       })
          // console.log('${val}');
      },
    },
	components:{
		Header
	},
	mounted() {
		axios.get(`https://elm.cangdu.org/v1/users/list?offset=${this.num}&limit=20`).then((res)=>{
			// console.log(res.data)
			this.userdata=res.data
		})
	},
    data() {
      return {
		userdata:[],
		num:0,
        currentPage1: 1,
      };
    }
  }
</script>

<style>
.index_first{
	z-index: 30;
	width: 100%;
}
.header_height{
	height: 50px;
}
.el-table__header-wrapper{
	margin-top: 20px;
}
</style>

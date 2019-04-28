<template>
	<div class="height">
		<Header></Header>
		
		<el-table
    :data="admainData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="user_name"
      label="姓名"
      width="180">
    </el-table-column>
	<el-table-column
      prop="create_time"
      label="注册日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="city"
      label="地址"
      width="180">
    </el-table-column>
    <el-table-column
      prop="admin"
      label="权限">
    </el-table-column>
  </el-table>
		
		<div class="block">
		   <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage1"
		      :page-size="100"
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
		components:{Header},
		data() {
			return {
				admainData: [],
				num:0
			};
		},
		mounted() {
			axios.get('https://elm.cangdu.org/admin/all?offset=${this.num}&limit=20').then((res)=>{
				console.log(res.data)
				this.admainData=res.data.data
			})
		},
		methods: {
		  handleSizeChange(val) {
		    console.log(`每页 ${val} 条`);
		  },
		  handleCurrentChange(val) {
			  this.num=val
		   axios.get(`https://elm.cangdu.org/admin/all?offset=${this.num*20}&limit=20`).then((res)=>{
		   	console.log(res.data)
		   	this.admainData=res.data.data
		   })
		      // console.log('${val}');
		  },
		},
	}
</script>

<style>
.height{
	width: 100%;
}
</style>

<template>
	<div class="height">
		<Header></Header>
		
		<el-table
		  :data="orderData"
		  style="width: 100%">
		  <el-table-column type="expand">
		    <template slot-scope="props">
		      <el-form label-position="left" inline class="demo-table-expand">
		        <el-form-item label="用户名">
		          <span>{{ props.row.name }}</span>
		        </el-form-item>
		        <el-form-item label="店铺名称">
		          <span>{{ props.row.restaurant_name}}</span>
		        </el-form-item>
		        <el-form-item label="收货地址">
		          <span>{{ props.row.item_id }}</span>
		        </el-form-item>
		        <el-form-item label="店铺 ID">
		          <span>{{ props.row.restaurant_id }}</span>
		        </el-form-item>
		        <el-form-item label="店铺地址">
		          <span>{{ props.row.abc}}</span>
		        </el-form-item> 
		      </el-form>
		    </template>
		  </el-table-column>
		  <el-table-column
		    label="订单 ID"
		    prop="address_id">
		  </el-table-column>
		  <el-table-column
		    label="总价格"
		    prop="total_amount">
		  </el-table-column>
		  <el-table-column
		    label="订单状态"
		    prop="status_bar.title"> 
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
				orderData: [],
				num:0
			};
		},
		mounted() {
			axios.get('https://elm.cangdu.org/bos/orders?offset=${this.num}&limit=20&restaurant_id=undefined').then((res)=>{
				console.log(res.data)
				this.orderData=res.data
			})
		},
		methods: {
		  handleSizeChange(val) {
		    console.log(`每页 ${val} 条`);
		  },
		  handleCurrentChange(val) {
			  this.num=val
		   axios.get(`https://elm.cangdu.org/bos/orders?offset=${this.num*20}&limit=20&restaurant_id=undefined`).then((res)=>{
		   	console.log(res.data)
		   	this.orderData=res.data
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

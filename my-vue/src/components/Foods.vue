<template>
	<div class="height">
		<Header></Header>
		
		<el-table
		  :data="foodsData"
		  style="width: 100%">
		  <el-table-column type="expand">
		    <template slot-scope="props">
		      <el-form label-position="left" inline class="demo-table-expand">
		        <el-form-item label="店铺名称">
		          <span>{{ props.row.name }}</span>
		        </el-form-item>
		        <el-form-item label="餐馆名称">
		          <span>{{ props.row.abc }}</span>
		        </el-form-item>
		        <el-form-item label="食品 ID">
		          <span>{{ props.row.item_id }}</span>
		        </el-form-item>
		        <el-form-item label="餐馆 ID">
		          <span>{{ props.row.restaurant_id }}</span>
		        </el-form-item>
		        <el-form-item label="食品介绍">
		          <span>{{ props.row.description}}</span>
		        </el-form-item>
		        <el-form-item label="餐馆地址">
		          <span>{{ props.row.abc}}</span>
		        </el-form-item>
		        <el-form-item label="食品评分">
		          <span>{{ props.row.rating }}</span>
		        </el-form-item>
				  <el-form-item label="食品分类">
				    <span>{{ props.row.abc }}</span>
				  </el-form-item>
				  <el-form-item label="月销量">
				    <span>{{ props.row.month_sales }}</span>
				  </el-form-item>
		      </el-form>
		    </template>
		  </el-table-column>
		  <el-table-column
		    label="食品名称"
		    prop="name">
		  </el-table-column>
		  <el-table-column
		    label="食品介绍"
		    prop="description">
		  </el-table-column>
		  <el-table-column
		    label="评分"
		    prop="rating">
		  </el-table-column>
			 <el-table-column
			  label="操作"
			  prop="work">
			  
		<button class="btn">编辑</button>
		<button class="btn btn-two">删除</button>
		
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
		components:{Header},
		data() {
		  return {
		    foodsData: [],
			num:0
		  }
		},
		mounted() {
			axios.get('https://elm.cangdu.org/shopping/v2/foods?offset=${this.num}&limit=20&restaurant_id=undefined').then((res)=>{
				console.log(res.data)
				this.foodsData=res.data
			})
		},
		methods: {
		  handleSizeChange(val) {
		    console.log(`每页 ${val} 条`);
		  },
		  handleCurrentChange(val) {
			  this.num=val
		   axios.get(`https://elm.cangdu.org/shopping/v2/foods?offset=${this.num*20}&limit=20&restaurant_id=undefined`).then((res)=>{
		   	console.log(res.data)
		   	this.foodsData=res.data
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
 .btn{
	  width: 70px;
	  font-size: 5px;
	  text-align: center;
	  height: 35px;
	  border: 0;
	  border-radius: 4px;
  }
.btn-two{
	color: white;
	background: indianred;
}
</style>

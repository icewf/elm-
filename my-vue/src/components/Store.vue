<template>
	<div class="heigth">
		<Header></Header>
		
		<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="店铺介绍">
            <span>{{ props.row.description }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.phone}}</span>
          </el-form-item>
          <el-form-item label="评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="销售量">
            <span>{{ props.row.recent_order_num }}</span>
          </el-form-item>
		  <el-form-item label="分类">
		    <span>{{ props.row.category }}</span>
		  </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="address">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="description">
    </el-table-column>
	 <el-table-column
	  label="操作"
	  prop="work">
	  
  <button class="btn">编辑</button>
  <button class="btn">添加食品</button>
  <button class="btn btn-three">删除</button>

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
        tableData: [],
		num:0
      }
    },
	mounted() {
		axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=${this.num}&limit=20').then((res)=>{
			console.log(res.data)
			this.tableData=res.data
		})
	},
	methods: {
	  handleSizeChange(val) {
	    console.log(`每页 ${val} 条`);
	  },
	  handleCurrentChange(val) {
		  this.num=val
	   axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=${this.num*20}&limit=20`).then((res)=>{
	   	console.log(res.data)
	   	this.tableData=res.data
	   })
	      // console.log('${val}');
	  },
	},
  }
</script>

<style>
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .heigth{
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
  .btn-three{
	  color: white;
	  background: indianred;
  }
</style>

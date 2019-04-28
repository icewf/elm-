import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/components/Message'
import Login from '@/components/Login'
import Userlist from '@/components/Userlist'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Store from '@/components/Store'
import Foods from '@/components/Foods'
import Orderlist from '@/components/Orderlist'
import Admainlist from '@/components/Admainlist'
import Tu from '@/components/Business'

Vue.use(Router)

export default new Router({
  routes: [ 
		{
		  path: '/',
		  name: 'Login',
		  component: Login
		},
		{
		  path: '/message',
		  name: 'Message',
		  component: Message,
			children:[
				{
					path: '/',
					name: 'Tu',
					component: Tu,
				},
				{
				  path: '/header',
				  name: 'Header',
				  component: Header
				},
				{
				  path: '/userlist',
				  name: 'Userlist',
				  component: Userlist
				},
				{
				  path: '/store',
				  name: 'Store',
				  component: Store
				},
				{
				  path: '/foods',
				  name: 'Foods',
				  component: Foods
				},
				{
				  path: '/orderlist',
				  name: 'Orderlist',
				  component: Orderlist
				},
				{
				  path: '/admainlist',
				  name: 'Admainlist',
				  component: Admainlist
				},
			]
		}
  ]
})

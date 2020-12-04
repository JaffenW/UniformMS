import Vue from 'vue'
import VueRouter from 'vue-router'

const Notice = () => import('views/notice/Notice')
const Clothing = () => import('views/clothing/Clothing')
const Order = () => import('views/order/Order')
const Post = () => import('views/post/Post')
const User = () => import('views/user/User')


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/clothing'
  },
  {
    path:'/notice',
    component:Notice
  },
  {
    path:'/clothing',
    component:Clothing
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/post',
    component:Post
  },
  {
    path:'/user',
    component:User
  }
 
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router

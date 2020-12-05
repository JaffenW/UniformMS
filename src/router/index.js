import Vue from 'vue'
import VueRouter from 'vue-router'

const Notice = () => import('views/notice/Notice')
const Show = () => import('views/notice/Show')
const AddNotice = () => import('views/notice/AddNotice')
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
    component:Notice,
    children:[
      {
        path:'',
        redirect:'/notice/show'
      },
      {
        path:'show',
        component:Show
      },
      {
        path:'addNotice',
        component:AddNotice
      }
    ]
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

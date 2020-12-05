import Vue from 'vue'
import VueRouter from 'vue-router'

const Notice = () => import('views/notice/Notice')
const NoticeShow = () => import('views/notice/NoticeShow')
const AddNotice = () => import('views/notice/AddNotice')

const Clothing = () => import('views/clothing/Clothing')
const ClothingShow = () => import('views/clothing/ClothingShow')
const AddClothing = () => import('views/clothing/AddClothing')

const Order = () => import('views/order/Order')
const OrderShow = () => import('views/order/OrderShow')
const AddOrder = () => import('views/order/AddOrder')

const Post = () => import('views/post/Post')
const PostShow = () => import('views/post/PostShow')
const AddPost = () => import('views/post/AddPost')

const User = () => import('views/user/User')
const UserShow = () => import('views/user/UserShow')
const AddUser = () => import('views/user/AddUser')


Vue.use(VueRouter)

const routes = [
  // 配置默认路径
  {
    path:'',
    redirect:'/notice'
  },
  //配置公告管理路径
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
        component:NoticeShow
      },
      {
        path:'addNotice',
        component:AddNotice
      }
    ]
  },
  //配置服装管理路径
  {
    path:'/clothing',
    component:Clothing,
    children:[
      {
        path:'show',
        component:ClothingShow
      },
      {
        path:'AddClothing',
        component:AddClothing
      }
    ]
  },
  //配置订单管理路径
  {
    path:'/order',
    component:Order,
    children:[
      {
        path:'show',
        component:OrderShow
      },
      {
        path:'AddOrder',
        component:AddOrder
      }
    ]

  },
  //配置帖子管理路径
  {
    path:'/post',
    component:Post,
    children:[
      {
        path:'show',
        component:PostShow
      },
      {
        path:'AddPost',
        component:AddPost
      }
    ]
  },
  //配置用户管理路径
  {
    path:'/user',
    component:User,
    children:[
      {
        path:'show',
        component:UserShow
      },
      {
        path:'AddUser',
        component:AddUser
      }
    ]
  }
 
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router

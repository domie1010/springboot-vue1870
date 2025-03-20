import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dianying from '@/views/modules/dianying/list'
    import dianyingCollection from '@/views/modules/dianyingCollection/list'
    import dianyingCommentback from '@/views/modules/dianyingCommentback/list'
    import dianyingOrder from '@/views/modules/dianyingOrder/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryDianying from '@/views/modules/dictionaryDianying/list'
    import dictionaryDianyingCollection from '@/views/modules/dictionaryDianyingCollection/list'
    import dictionaryDianyingOrder from '@/views/modules/dictionaryDianyingOrder/list'
    import dictionaryDianyingOrderPayment from '@/views/modules/dictionaryDianyingOrderPayment/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryDianying',
        name: '电影类型',
        component: dictionaryDianying
    }
    ,{
        path: '/dictionaryDianyingCollection',
        name: '收藏表类型',
        component: dictionaryDianyingCollection
    }
    ,{
        path: '/dictionaryDianyingOrder',
        name: '订单类型',
        component: dictionaryDianyingOrder
    }
    ,{
        path: '/dictionaryDianyingOrderPayment',
        name: '订单支付类型',
        component: dictionaryDianyingOrderPayment
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dianying',
        name: '电影',
        component: dianying
      }
    ,{
        path: '/dianyingCollection',
        name: '电影收藏',
        component: dianyingCollection
      }
    ,{
        path: '/dianyingCommentback',
        name: '电影评价',
        component: dianyingCommentback
      }
    ,{
        path: '/dianyingOrder',
        name: '电影订单',
        component: dianyingOrder
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/news',
        name: '新闻信息',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

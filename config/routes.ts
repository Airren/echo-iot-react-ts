export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [{
          name: '登录',
          path: '/user/login',
          component: './user/Login'
        }]
      },
      {component: './404'},
    ],
  },
  {
    path: '/',
    layout: false,

    access: 'guest',
    component: './Home'
  },
  {
    icon: 'tool',
    name: '分析工具',
    path: '/commontools',
    component: './CommonTools'
  },
  {
    icon: 'UnorderedListOutlined',
    name: '我的任务',
    path: '/order',
    component: './Order'
  },
  {
    icon: 'UnorderedListOutlined',
    name: '后台管理',
    access: 'admin',
    path: '/order2',
    component: './Order',
  },
  {
    path: '/welcome',
    name: '亿氪生信云',
    icon: 'bank',
    component: './Welcome'
  },
  {
    component: './404'
  },
];

export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: '登录',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '物联云',
    icon: 'bank',
    path: '/dashboard/dashboardmonitor',
    component: './DashboardMonitor',
  },
  {
    path: '/',
    layout: false,
    access: 'guest',
    component: './Home/Home',
  },
  {
    path: '/contact',
    layout: false,
    access: 'guest',
    component: './Home/Contact',
  },
  {
    path: '/welcome',
    name: '亿氪信息',
    icon: 'bank',
    component: './Welcome',
  },
  {
    component: './404',
  },
];

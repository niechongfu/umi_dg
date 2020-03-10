export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'create',
      },
    ],
  ],
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: './index',
        },
        {
          path: '/about',
          component: './user/about',
        },
        {
          path: '/login',
          component: './login/index',
        },
        {
          path: '/user',
          component: './user/index',
        },
        {
          component: './404',
        },
      ],
    },
  ],
};

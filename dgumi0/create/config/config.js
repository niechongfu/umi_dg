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
      // Routes: ['./src/authorized.js'],
      routes: [
        {
          path: '/',
          component: './index',
          // Routes: ['./src/authorized.js'],
        },
        {
          path: '/about',
          component: './user/about',
          // Routes: ['./src/authorized.js'],
        },
        {
          path: '/login',
          component: './login/index',
        },
        {
          path: '/user',
          component: './user/index',
          // Routes: ['./src/authorized.js'],
        },
        {
          component: './404',
        },
      ],
    },
  ],
};


// ref: https://umijs.org/config/
export default {
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        { path: '/user', redirect: '/user/login' },
        { path: '/user/login', component: './User/login' },
      ],
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', redirect: '/index' },
      ],
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'node-log-fontend',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
}

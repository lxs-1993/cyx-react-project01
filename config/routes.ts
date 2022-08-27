import { IRoute, Route } from 'umi';

export const routes: IRoute[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    component: '@/layouts/index',
    routes: [
      {
        path: '/main',
        component: '@/pages/index',
      },
      {
        path: '/main/about',
        component: '@/pages/about/index',
      },
      {
        path: '/main/terms',
        component: '@/pages/terms/index',
      },
      {
        path: '/main/model/:id',
        component: '@/pages/model/index',
      },
      {
        path: '/main/model/download/:id',
        component: '@/pages/model/download/index',
      },
    ],
  },
];

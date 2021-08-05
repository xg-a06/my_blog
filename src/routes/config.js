import { lazy } from 'react';

const Layout = lazy(() => import('../pages/layout/index'));
const Overview = lazy(() => import('../pages/overview/index'));

const RouteConfig = [
  {
    title: 'Index',
    path: '/',
    key: 'index',
    exact: true,
    redirect: '/overview',
  },
  {
    title: 'Layout',
    path: '/',
    key: 'layout',
    component: Layout,
    routes: [
      {
        title: 'Overview',
        path: '/overview',
        key: 'overview',
        component: Overview,
      },
    ],
  },
];

export default RouteConfig;

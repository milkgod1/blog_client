import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';

const ApolloWrapper = '@/component/wrapper/apollo/ApolloConfig';
const AuthWrapper = '@/component/wrapper/auth/LoginCheck';
const AllWrapper = [ApolloWrapper, AuthWrapper];

const routes: IConfigFromPlugins['routes'] = [
  {
    name: 'write',
    wrappers: [...AllWrapper],
    exact: true,
    path: '/write/new',
    component: './write',
  },
  {
    name: 'write',
    wrappers: [...AllWrapper],
    exact: true,
    path: '/write/:aid',
    component: './write',
  },
  {
    name: 'creator',
    exact: false,
    path: '/creator',
    component: './creator',
    wrappers: [...AllWrapper],
    routes: [
      {
        name: 'content',
        exact: false,
        path: 'content',
        component: './creator/container',
        routes: [
          {
            name: 'article',
            exact: false,
            path: 'article',
            component: './creator/content/navigateBar',
            routes: [
              {
                name: 'drafts',
                exact: true,
                path: 'drafts',
                component: './creator/content/article/draft',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'main',
    path: '/',
    exact: false,
    component: './main',
    wrappers: ['@/component/wrapper/apollo/ApolloConfig'],
    routes: [
      {
        path: '/user/setting',
        component: './user/setting',
        wrappers: [],
        routes: [
          {
            name: 'profile',
            path: 'profile',
            component: './user/setting/profile/Profile',
            exact: true,
          },
          {
            path: '/user/setting',
            exact: true,
            redirect: '/user/setting/profile',
          },
          { redirect: '/not-found' },
        ],
      },
      { path: '/post/:aid', component: './post', exact: true },
      { path: '/not-found', component: './404' },
      { component: './404' },
    ],
  },
  { component: './404' },
];

export default routes;

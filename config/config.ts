import routes from './routes';
import { defineConfig } from 'umi';

const { resolve } = require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      wrappers: ['./'],
      routes: routes,
    },
  ],
  fastRefresh: {},
  sass: {
    implementation: require('node-sass'),
  },
  mfsu: {},
  chainWebpack: (config) => {
    config.module
      .rule('babel-loader')
      .test(/\.js$/)
      .include.add([resolve('node_modules/@wangeditor')]);
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
    },
    '/graphql': {
      target: 'http://localhost:8080',
      changeOrigin: true,
    },
  },
  define: {
    'process.env.ARTICLE_IMAGE_UPLOAD_URL':
      'http://localhost:8080/api/upload/img',
    'process.env.REMOTE': 'http://localhost:8080/',
    'process.env.TOKEN_NAME': 'BLOG_TOKEN',
  },
});

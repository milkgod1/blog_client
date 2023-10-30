import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env.ARTICLE_IMAGE_UPLOAD_URL':
      'http://localhost:8080/api/upload/img',
    'process.env.REMOTE': 'http://localhost:8080/',
    'process.env.TOKEN_NAME': 'BLOG_TOKEN',
  },
});

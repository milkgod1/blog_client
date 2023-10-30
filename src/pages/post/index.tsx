import style from './index.sass';
import { testHtml } from './test-html';
import { Typography } from 'antd';

const PostArticleView = () => {
  return (
    <div className={style['article-main']}>
      <div className={style['main-area']}>
        <article className={style['article-view']}>
          <Typography.Title level={1} style={{marginBottom: '1.5rem'}}>
            Title
          </Typography.Title>
          <div className={style['author-info-block']}>1</div>
          <div dangerouslySetInnerHTML={{__html: testHtml}}/>
        </article>
      </div>
    </div>
  );
};

export default PostArticleView;

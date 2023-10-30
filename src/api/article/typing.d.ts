declare namespace Article {
  type both = {
    id?: string;
    title?: string;
    coverDescription?: string;
  };

  type Article = {
    uid?: string;
    authorName?: string;
    content?: string;
    coverImage?: string;
    kindName?: string;
    tagName?: string;
    submitTime?: number;
    see?: number;
    like?: number;
    commentId?: string[];
  } & both;

  type ArticleList = {
    authorName?: string;
    kindName?: string;
    tagName?: string;
    submitTime?: number;
    see?: number;
    like?: number;
    comments?: number[];
  } & both;
}

declare namespace Draft {
  type Editor = {
    id?: string;
    title?: string;
    createTime?: string;
    aid?: string;
    uid?: string;
    coverDescription?: String;
    editorType?: 'markdown' | 'rich_text';
    content?: string;
    kindName?: string;
    tagName?: string;
    coverImage?: string;
  };

  type DraftQuery = {
    title?: string;
    page?: number;
    size?: number;
  };

  type CreatorDraftInfo = {
    id: string;
    title: string;
    createTime: number;
  };
  type DraftQueryResult = {
    drafts?: Draft.CreatorDraftInfo[];
    pageInfo: Common.Page;
  };
}

import { gql } from '@apollo/client';

export const getEditorById = gql`
  query getEditor($input: String) {
    getEditor(id: $input) {
      id
      aid
      content
      coverDescription
      coverImage
      editorType
      kindName
      tagName
      uid
      title
    }
  }
`;

export const getDraftList = gql`
  query getDraftList {
    getAllDraft {
      id
      createTime
      title
    }
  }
`;

export const publishDraft = gql`
  mutation publishDraft($input: publishInput) {
    publishDraft(draft: $input)
  }
`;

export const getDraftPageByQuery = gql`
  query draftQuery($input: draftQuery) {
    draftQuery(query: $input) {
      drafts {
        id
        createTime
        title
      }
      pageInfo {
        page
        size
        count
      }
    }
  }
`;

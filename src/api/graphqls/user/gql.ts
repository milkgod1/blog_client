import { gql } from '@apollo/client';

export const loginGql = gql`
  mutation Login($input: PasswordLoginParameter) {
    passwordLogin(user: $input) {
      userInfo {
        id
        avatar
        userName
      }
      tokenInfo {
        tokenName
        tokenValue
      }
    }
  }
`;

// export const registerGql = gql``;

export const pbInfoGql = gql`
  query PbInfo($input: String!) {
    pbUserInfo(id: $input) {
      id
      avatar
      userName
      company
      description
      career
      place {
        city
        country
        province
      }
      enterTime
      github
    }
  }
`;

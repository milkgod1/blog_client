import { gql, useMutation, useQuery } from '@apollo/client';
import { setItem } from '@/util/functionStorage';
import { loginGql, pbInfoGql } from './gql';

export const useLogin = () => {
  const [login, { data, loading, error }] = useMutation<
    Record<'passwordLogin', User.LoginResult>,
    GqlWrapperInput<User.LoginParams>
  >(loginGql);

  const Login = (loginParam: User.LoginParams) => {
    return login({
      variables: {
        input: {
          ...loginParam,
        },
      },
    }).then((v) => {
      const value = v.data?.passwordLogin;
      const token = value?.tokenInfo;
      if (token) {
        setItem(token.tokenName, token.tokenValue);
      }
      return value?.userInfo;
    });
  };

  return {
    Login,
    personalInfo: data,
    loginLoading: loading,
    loginError: error,
  };
};

export const userPbInfo = (id: string) => {
  const { data, error, loading } = useQuery<User.UserInfo>(pbInfoGql, {
    variables: {
      id,
    },
  });

  return {
    userInfo: data,
    infoFetchError: error,
    infoFetchLoading: loading,
  };
};

import {
  requestFactory,
  optionType,
  requestHeader,
  getHeaders,
} from '@/api/common';
import { setItem } from '@/util/functionStorage';

const userNormalRequest = requestFactory<User.UserInfo>({
  prefix: '/api/user/pub',
});

const userAuthRequest = requestFactory<User.UserInfo>({
  prefix: '/api/user/pri',
});

// public
export const userLogin = async (
  data: User.LoginParams,
  options?: optionType,
): Promise<User.UserInfo> => {
  return userNormalRequest<User.LoginResult>('/login/pwd', {
    method: 'POST',
    headers: requestHeader,
    data: JSON.stringify(data),
    ...options,
  })
    .then((value): User.UserInfo => {
      const tokenInfo = value.tokenInfo;
      setItem(tokenInfo.tokenName, tokenInfo.tokenValue);
      return value.userInfo;
    })
    .catch((err) => Promise.reject(err));
};

export const searchUserById = async (id: string, options?: optionType) => {
  return userNormalRequest(`/search/${id}`, {
    ...options,
    notification: false,
  });
};

// auth
export const getUserInfo = async (options?: optionType) => {
  if (!getHeaders()) {
    return Promise.reject();
  }
  return userAuthRequest('/info', {
    method: 'GET',
    ...options,
  });
};

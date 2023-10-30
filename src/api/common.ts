import { extend } from 'umi-request';
import { getItem, setItem } from '@/util/functionStorage';
import { message } from 'antd';

type tokenBody = {
  name: string;
  value: string;
};

export const tokenName = process.env.TOKEN_NAME as string;

export const getHeaders = () => {
  const value = getItem<tokenBody>(tokenName);
  if (value) {
    const obj: Record<any, any> = {};
    obj[tokenName] = value;
    return obj;
  }
  return undefined;
};

export const requestHeader = {
  'Content-Type': 'application/json;charset=utf-8',
};

const normalRequest = extend({
  timeout: 3000,
  responseType: 'json',
  cache: 'no-cache',
  notification: true,
});

normalRequest.interceptors.request.use((url, options) => {
  options.headers = {
    ...options.headers,
    ...getHeaders(),
  };
  return {
    url,
    options,
  };
});

normalRequest.interceptors.response.use(
  async (response, options): Promise<any> => {
    const { status } = response;
    const result = await response.json();
    const { msg, data } = result;
    const notification = options.notification;
    if (status < 400) {
      if (msg && notification) {
        message.success(msg, 1);
      }
      return data;
    } else {
      if (msg && notification) {
        message.error(msg, 1);
      }
      return Promise.reject({
        data,
      });
    }
  },
);

export type optionType = Parameters<typeof normalRequest>[1];

export const requestFactory =
  <T>(commonOptions?: optionType) =>
  <U = void>(url: string, options?: optionType) =>
    normalRequest<U extends void ? T : U>(url, {
      ...commonOptions,
      ...options,
    });

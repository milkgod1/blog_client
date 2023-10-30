import { getUserInfo } from './api/user';
import { rejectCatch } from '@/util/promiseWrapper';
import { removeItem } from '@/util/functionStorage';

export async function getInitialState(): Promise<{
  currentUser?: User.UserInfo;
  fetchUserInfo?: () => Promise<User.UserInfo | undefined>;
}> {
  const fetchUserInfo = async () => {
    const { value } = await rejectCatch(getUserInfo());
    if (!value) {
      removeItem(process.env.TOKEN_NAME as string);
      return undefined;
    }
    return value;
  };

  const currentUser = await fetchUserInfo();

  return {
    currentUser,
    fetchUserInfo,
  };
}

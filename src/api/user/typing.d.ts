declare namespace User {
  type UserInfo = {
    id?: string;
    avatar?: string;
    userName?: string;
    description?: string;
    company?: string;
    career?: string;
    place?: {
      country?: string;
      province?: string;
      city?: string;
    };
    address?: string;
    enterTime?: string;
    personalPage?: string;
  };

  type LoginParams = {
    userName?: string;
    password?: string;
    phone?: string;
    email?: string;
    validationCode?: string;
  };

  type TokenInfo = {
    tokenName: string;
    tokenValue: string;
  };

  type LoginResult = {
    userInfo: UserInfo;
    tokenInfo: TokenInfo;
  };
}

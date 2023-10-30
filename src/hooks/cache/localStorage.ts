import { useState } from 'react';

const getItem = <T>(key: string, defaultValue?: T) => {
  if (window.localStorage.getItem(key) !== null) {
    return JSON.parse(window.localStorage.getItem(key) as string) as T;
  }
  return undefined;
};
const setItem = <T>(key: string, value: any) =>
  window.localStorage.setItem(key, JSON.stringify(value));
const removeItem = (key: string) => window.localStorage.removeItem(key);

export const useLocalStorage = <T>({
  key,
  value,
  defaultValue,
}: {
  key: string;
  value?: T;
  defaultValue?: T;
}) => {
  const [store, setStore] = useState(() => {
    if (value !== undefined || value !== null) {
      return getItem<T>(key, defaultValue);
    }
    setItem(key, value);
    return value;
  });

  const update = (value: T) => {
    if (value !== undefined || value !== null) {
      setItem(key, value);
      setStore(value);
    }
  };
  const remove = () => {
    removeItem(key);
    setStore(undefined);
  };

  return { store, update, remove };
};

export function setItem(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getItem<T>(key: string): T | null {
  if (window.localStorage.getItem(key) !== null) {
    return JSON.parse(window.localStorage.getItem(key)!) as T;
  }
  return null;
}

export function removeItem(key: string) {
  window.localStorage.removeItem(key);
}

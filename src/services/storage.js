export const getData = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data === undefined ? null : data);
};

export const setData = (key, data) => {
  const strData = typeof data === 'string' ? data : JSON.stringify(data);
  return localStorage.setItem(key, strData);
};

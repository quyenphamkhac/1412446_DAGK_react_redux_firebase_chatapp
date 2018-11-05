export const setItem = (key, value) => {
  const valueToJson = JSON.stringify(value);
  window.localStorage.setItem(key, valueToJson);
}

export const getItem = (key) => {
  let jsonValue = window.localStorage.getItem(key);
  const valueObject = JSON.parse(jsonValue);
  return valueObject;
}

export const clearLocalStorage = () => {
  window.localStorage.clear();
}
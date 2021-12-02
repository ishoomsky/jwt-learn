// export const localStorageGet = (localStorageKey:string) => {
//     const dataFromLS = localStorage.getItem(localStorageKey) as string;
//     const result = JSON.parse(dataFromLS);
//     return result;
// };

// export const localStorageSet = (localStorageKey: string, data: string) => {
//   const stringifiedData = JSON.stringify(data);
//   localStorage.setItem(localStorageKey, stringifiedData);
// };

// export const localStorageCheck = (localStorageKey: string): boolean => {
//   return localStorage.getItem(localStorageKey) ? true : false;
// };

// export const localStorageRemove = (localStorageKey: string) => {
//   localStorage.removeItem(localStorageKey);
// }

export const localStorageGet = (localStorageKey: string) => {
  return localStorage.getItem(localStorageKey) as string;
};

export const localStorageSet = (localStorageKey: string, data: string) => {
  localStorage.setItem(localStorageKey, data);
};

export const localStorageCheck = (localStorageKey: string): boolean => {
  return localStorage.getItem(localStorageKey) ? true : false;
};

export const localStorageRemove = (localStorageKey: string) => {
  localStorage.removeItem(localStorageKey);
};

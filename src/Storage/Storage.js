export const saveTokenToLocalStorage = (token) => {
  localStorage.setItem("accessToken", token);
};

export const getTokenToLocalStorage = (token) => {
  localStorage.getItem("accessToken", token);
};

export const removeTokenToLocalStorage = () => {
  localStorage.removeItem("accessToken");
};

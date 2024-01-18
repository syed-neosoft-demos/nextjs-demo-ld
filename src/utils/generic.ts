"use client";

export const removeAllCookies = () => {
  document.cookie = "auth_token=; Path=/;";
};
export const removeAllLocalStorage = () => {
  localStorage.clear();
};

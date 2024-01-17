import { cookies } from "next/headers";

export const removeAllCookies = () => {
  const cookiesStore = cookies();
  cookiesStore.delete("auth_token");
};

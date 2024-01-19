import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const allCookies = cookies();
    const authCookies: any = allCookies.get("auth_token");

    if (!authCookies?.name) return redirect("/");
    if (!authCookies?.value) return redirect("/");
    return <Component {...props} />;
  };
}

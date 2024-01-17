// "use client";
// import { userSession } from "@/src/app/_utils/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function isAuth(Component: any) {
  // return function IsAuth(props: any) {
  //   useLayoutEffect(() => {
  //     // const token = localStorage.getItem("auth_token");
  //     // console.log("token", token);
  //     if (!userSession.isLogin) redirect("/");
  //   }, []);

  //   if (!userSession.isLogin) {
  //     return null;
  //   }

  //   return <Component {...props} />;
  // };
  return function IsAuth(props: any) {
    const cookieStore = cookies();
    console.log("cookieStore", cookieStore.get("auth_token"));

    if (!cookieStore.get("auth_token")) return redirect("/");

    return <Component {...props} />;
  };
}

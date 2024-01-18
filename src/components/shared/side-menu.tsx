"use client";
import { removeAllCookies, removeAllLocalStorage } from "@/src/utils/generic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import style from "./shared.module.css";
function SideMenu() {
  const router = useRouter();
  const handleRemove = () => {
    removeAllCookies();
    removeAllLocalStorage();
    router.replace("/");
  };
  return (
    <div className={`${style.menuContainer} bg-slate-700`}>
      <ul>
        <li className="hover:bg-slate-800 cursor-pointer">
          <Link href="/panel/home">Dashboard</Link>
        </li>
        <li className="hover:bg-slate-800 cursor-pointer">
          <Link href="/panel/add-post">Add Post</Link>
        </li>
        <li className="hover:bg-slate-800 cursor-pointer">
          <Link href="/panel/show-post">List Post</Link>
        </li>
        <li className="hover:bg-slate-800 cursor-pointer">
          <Link href="/panel/edit-post">Edit Post</Link>
        </li>
        <li className="hover:bg-slate-800 cursor-pointer">
          <Link href="/panel/delete-post">Delete Post</Link>
        </li>
      </ul>
      <button type="button" onClick={handleRemove}>
        Logout
      </button>
    </div>
  );
}

export default SideMenu;

import Link from "next/link";
import style from "./shared.module.css";
function SideMenu() {
  return (
    <div className={`${style.menuContainer} bg-slate-700`}>
      <ul>
        <li className="hover:bg-slate-800 cursor-pointer">
          <Link href="/panel/home">Dashboard</Link>
        </li>
        <li className="hover:bg-slate-800 cursor-pointer">
          <Link href="/panel/add-user">Add User</Link>
        </li>
        <li className="hover:bg-slate-800 cursor-pointer">
          <Link href="/panel/edit-user">Edit User</Link>
        </li>
        <li className="hover:bg-slate-800 cursor-pointer">
          <Link href="/panel/delete-user">Delete User</Link>
        </li>
        <li className="hover:bg-slate-800 cursor-pointer">
          <Link href="/panel/list-user">User List</Link>
        </li>
      </ul>
      <button type="button">Logout</button>
    </div>
  );
}

export default SideMenu;

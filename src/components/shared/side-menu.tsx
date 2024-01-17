import Link from "next/link";
import style from "./shared.module.css";
function SideMenu() {
  return (
    <div className={style.menuContainer}>
      <ul>
        <li>
          <Link href="/panel/home">Home</Link>
        </li>
        <li>
          <Link href="/panel/add-user">Add User</Link>
        </li>
        <li>
          <Link href="/panel/list-user">List User</Link>
        </li>
        <li>
          <Link href="/panel/about">About Us</Link>
        </li>
        <li>
          <Link href="/panel/help">Help</Link>
        </li>
        <li>
          <Link href="/panel/plans">Plans</Link>
        </li>
      </ul>
      <button type="button">Logout</button>
    </div>
  );
}

export default SideMenu;

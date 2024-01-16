import style from "./shared.module.css";
function SideMenu() {
  return (
    <div className={style.menuContainer}>
      <ul>
        <li>Home</li>
        <li>Add User</li>
        <li>List User</li>
        <li>About Us</li>
        <li>Help</li>
        <li>Plans</li>
      </ul>
      <button type="button">Logout</button>
    </div>
  );
}

export default SideMenu;

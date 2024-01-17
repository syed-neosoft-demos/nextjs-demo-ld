import isAuth from "../../components/routes/userAuth";
import SideMenu from "../../components/shared/side-menu";
import { childType } from "../../types/types";
import style from "./panel.module.css";

const layout = ({ children }: childType) => {
  return (
    <div className={style.panelContainer}>
      <aside className={style.panelSide}>
        <SideMenu />
      </aside>
      <main className={style.panelMain}>
        {children}
        <footer className={style.footer}>
          <p>footer</p>
        </footer>
      </main>
    </div>
  );
};

export default isAuth(layout);

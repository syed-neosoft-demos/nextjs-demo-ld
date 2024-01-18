import isAuth from "@/src/components/auth/userAuth";
import PanelHeader from "@/src/components/shared/panelHeader";
import SideMenu from "@/src/components/shared/side-menu";
import { childType } from "@/src/types/types";
import style from "./panel.module.css";

const layout = ({ children }: childType) => {
  return (
    <div className={style.panelContainer}>
      <aside className={style.panelSide}>
        <SideMenu />
      </aside>
      <main className={style.panelMain}>
        <PanelHeader />
        {children}
      </main>
    </div>
  );
};

export default isAuth(layout);

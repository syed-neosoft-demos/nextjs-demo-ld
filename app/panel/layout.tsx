import SideMenu from "../_shared/side-menu";
import style from "./panel.module.css";

const layout = ({ children }: { children: React.ReactNode }) => {
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

export default layout;

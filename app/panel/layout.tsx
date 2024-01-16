import style from "./panel.module.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.panelContainer}>
      <aside>
        <div className={style.sideMenu}>side menu</div>
      </aside>
      <main className={style.panelMain}>
        {children}
        <footer>
          <p>footer</p>
        </footer>
      </main>
    </div>
  );
};

export default layout;

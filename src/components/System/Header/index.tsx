import { FC } from "react";
import { Bell, Menu, User } from "react-feather";
import { getHeaderStyles } from "./styles";
import { useConfigStore } from "../../../lib/store/config.store";

const Header: FC = () => {
  const styles = getHeaderStyles();
  const configStore = useConfigStore();

  return (
    <div className={styles.wrapper}>
      <div className="flex items-center gap-4">
        {/* <button className="text-white" onClick={() => configStore.setSidebarActive(!configStore.sidebarVisible)}>
                <Menu size={28}/>
                </button> */}
        <div className={styles.logo}>Ihr Logo</div>
      </div>
      <div className={styles.actions}>
        <button className={styles.actionBtn}>
          <Bell size={20} />
        </button>
        <button className={styles.actionBtn}>
          <User size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;

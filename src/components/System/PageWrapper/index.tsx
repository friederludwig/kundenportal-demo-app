import { getPageWrapperStyles } from "./styles";
import { useRouterStore } from "../../../lib/store/router.store";
import { APP_ROUTES } from "../../../lib/const/routes";
import { useConfigStore } from "../../../lib/store/config.store";

const PageWrapper = () => {
  const { activePage } = useRouterStore();
  const styles = getPageWrapperStyles();
  const configStore = useConfigStore();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {APP_ROUTES[activePage]?.component || <div>Page not found</div>}
      </div>
    </div>
  );
};

export default PageWrapper;

import { getPageWrapperStyles } from "./styles";
import { useRouterStore } from "../../../lib/store/router.store";
import { APP_ROUTES } from "../../../lib/const/routes";
import { useConfigStore } from "../../../lib/store/config.store";
import { useEffect } from "react";

const PageWrapper = () => {
  const { activePage } = useRouterStore();
  const styles = getPageWrapperStyles();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {APP_ROUTES[activePage]?.component || <div>Page not found</div>}
      </div>
    </div>
  );
};

export default PageWrapper;

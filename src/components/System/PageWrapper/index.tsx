
import { getPageWrapperStyles } from './styles';
import { useRouterStore } from '../../../lib/store/router.store';
import { APP_ROUTES } from '../../../lib/const/routes';

const PageWrapper = () => {
    const {activePage} = useRouterStore();
    const styles= getPageWrapperStyles();
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
            {APP_ROUTES[activePage]?.component || <div>Page not found</div>}
            </div>
        </div>
    );
};

export default PageWrapper;

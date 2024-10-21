import { FC } from 'react';
import { Bell, User } from 'react-feather';
import { getHeaderStyles } from './styles';

const Header: FC = () => {
    const styles= getHeaderStyles();
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>Ihr Logo</div>
            <div className="text-white/60 absolute left-1/2 tracking-wider font-semibold border uppercase cursor-default border-primary-600/50 border-t-0 top-0 text-xs bg-[#000]/60 py-[0.8rem] px-6 rounded-b-lg">
                Demo Kundenportal
            </div>
            <div className={styles.actions}>
                <button className={styles.actionBtn}><Bell size={20}/></button>
                <button className={styles.actionBtn}><User size={20}/></button>
            </div>
        </div>
    );
};

export default Header;

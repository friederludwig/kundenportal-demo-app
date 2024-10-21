import { FC, ReactNode } from 'react';
import { getContainerStyles } from './styles';

export interface ContainerProps {
    title?: string;
    subtitle?: string;
    actions?: ReactNode;
    sticky?: boolean;
    noPadding?: boolean;
    children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ title, subtitle, actions, sticky, noPadding, children }) => {
    const styles = getContainerStyles({ sticky, noPadding });
    return (
        <div className={styles.container}>
            {actions && <div className={styles.actions}>{actions}</div>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
            {children}
        </div>
    );
};

export default Container;

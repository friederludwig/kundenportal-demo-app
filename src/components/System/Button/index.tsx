import { FC, ReactNode } from 'react';
import { getSystemButtonStyles } from './styles';

export type ButtonStyle = 'primary' | 'primary-negative' | 'inline';
export type ButtonSize = 'default' | 'small';

interface SystemButtonProps {
    style?: ButtonStyle;
    size?: ButtonSize;
    children?: string | ReactNode;
    disabled?: boolean;
    counter?: number | string;
    onClick?: () => void;
    className?: string;
}

const SystemButton: FC<SystemButtonProps> = ({ children, style, size, counter, className, disabled, onClick }) => {
    const styles = getSystemButtonStyles({ style, size, disabled });
    return (
        <button
            className={styles.button + " " + className}
            disabled={disabled}
            onClick={() => onClick && onClick()}>
            {children}
            {counter && <span className={styles.counter}>{counter}</span>}
        </button>
    );
}

export default SystemButton;

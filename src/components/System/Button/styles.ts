import classNames from 'classnames';
import { ButtonSize, ButtonStyle } from './index';

const buttonStyles: Record<ButtonStyle, string> = {
    'inline': 'p-0',
    'primary': 'bg-primary text-white border border-primary hover:bg-primary-600 active:bg-primary-700',
    'primary-negative': ' bg-white/0 text-primary hover:bg-primary-50/50 active:bg-primary-50 border border-primary',
};

const buttonSize: Record<ButtonSize, string> = {
    'default': 'py-[0.7rem] px-[1rem] text-[0.95rem]',
    'small': 'py-[0.5rem] px-[0.8rem] text-[0.85rem]',
};

export const getSystemButtonStyles = ({style, size, disabled}: {
    style?: ButtonStyle,
    size?: ButtonSize,
    disabled?: boolean;
}) => ({
    button: classNames(
        'inline-flex gap-2.5 items-center relative',
        'font-medium leading-none',
        'rounded',
        'transition-all',
        style ? buttonStyles[style] : buttonStyles['primary'],
        size ? buttonSize[size] : buttonSize['default'],
        disabled ? 'opacity-70 cursor-not-allowed' : '',
    ),
    counter: classNames(
        'absolute -top-3 -right-3',
        'w-6 h-6 text-xs bg-primary',
        'font-semibold text-white',
        'flex items-center justify-center',
        'rounded-full',
        'shadow-md border-2 border-white',
    ),
});

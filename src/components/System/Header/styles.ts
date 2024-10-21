import classNames from 'classnames';

export const getHeaderStyles = () => ({
    wrapper: classNames(
        'fixed z-40 w-full bg-black h-[4rem] px-4 flex items-center justify-between',
    ),
    logo: classNames(
        'text-white uppercase text-2xl tracking-wider font-bold',
    ),
    actions: classNames(
        'text-white flex gap-2',
    ),
    actionBtn: classNames(
        'p-3 bg-white/15 rounded hover:bg-white/25 transition',
    ),
});

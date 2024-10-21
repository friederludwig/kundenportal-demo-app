import classNames from 'classnames';

export const getDynamicFilterStyles = () => ({
    hero: classNames(
        'grid grid-cols-24 gap-3 p-2.5 pt-2',
    ),
    fieldLabel: classNames(
        'block mb-1 text-xs font-medium tracking-wide uppercase',
    ),
    filterCount: classNames(
        'absolute -top-3 -right-3',
        'w-6 h-6 text-xs bg-primary',
        'font-semibold text-white',
        'flex items-center justify-center',
        'rounded-full',
        'shadow-md border-2 border-white',
    ),
    actions: classNames(
        'col-span-2 grid grid-cols-2 gap-2',

    ),
    actionBtn: classNames(
        'col-span-1',
        'flex items-center justify-center',
        'text-primary overflow-visible',
        'bg-primary-50',
        'border rounded-md',
    ),
    label: classNames(
        'uppercase text-white tracking-wider font-semibold text-xs bg-primary border border-primary mb-1 inline-flex items-center gap-1 px-2.5 py-1 rounded-tl-md rounded-br-md'
    )
});

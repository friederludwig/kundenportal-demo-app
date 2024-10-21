import classNames from 'classnames';
import { ContainerProps } from '.';

export const getContainerStyles = ({sticky, noPadding}: ContainerProps) => ({
    container: classNames(
        'relative h-full',
        'bg-white',
        'border',
        'shadow rounded-lg overflow-hidden',
        noPadding? "": "p-4",
        sticky ? "sticky top-16 z-30 border-b-2":""
    ),
    title: classNames(
        'text-lg font-semibold ml-1 mb-5 text-black',
    ),
    subtitle: classNames(
        'text-[0.8rem] -mt-4 ml-1 mb-6 text-gray-400',
    ),
    actions: classNames(
        'absolute right-2 top-3',
    ),
});


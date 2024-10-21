import classNames from 'classnames';
import { ChipStatus } from './index';

const statusStyles = {
    active: 'bg-green-500/15 text-green-500',
    done: 'bg-blue-500/15 text-blue-500',
    pending: 'bg-yellow-500/15 text-yellow-500',
};


export const getStatusChipStyles = (status: ChipStatus) => ({
    chip: classNames(
        'inline',
        'px-4 py-2 rounded-full',
        'text-xs font-medium tracking-wide',
        statusStyles[status] || 'bg-gray-500 text-white'
    )
})

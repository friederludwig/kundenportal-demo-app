import { Dropdown } from 'primereact/dropdown';
import { SelectOption } from '../Multiselect';
import { FC } from 'react';

interface SingleselectProps {
    name: string;
    placeholder?: string;
    value?: SelectOption | null;
    options?: SelectOption[];
    className?: string;
    onChange?: (value?: SelectOption) => void;
}

const Singleselect: FC<SingleselectProps> = (
    {
        name,
        value,
        options,
        placeholder,
        className,
        onChange
    }
) => {

    return (
        <Dropdown
            name={name}
            value={value}
            onChange={(e) => onChange && onChange(e.value)}
            options={options}
            optionLabel="label"
            placeholder={placeholder}
            className={`w-full border ${className}`}/>
    )
}

export default Singleselect;

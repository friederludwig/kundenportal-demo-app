import { FC } from 'react';
import { MultiSelect } from 'primereact/multiselect';

export interface SelectOption {
    key: string;
    label: string
}

interface MultiselectProps {
    name: string;
    placeholder?: string;
    value?: SelectOption[] | null;
    options?: SelectOption[];
    maxSelectedLabels?: number;
    className?: string;
    onChange?: (value?: SelectOption[]) => void;
}

const Multiselect: FC<MultiselectProps> = (
    {
        name,
        value,
        options,
        placeholder,
        maxSelectedLabels,
        className,
        onChange
    }
) => {

    return (
        <MultiSelect
            name={name}
            value={value}
            onChange={(e) => onChange && onChange(e.value)}
            optionLabel="label"
            display="comma"
            options={options}
            placeholder={placeholder}
            maxSelectedLabels={maxSelectedLabels}
            className={`w-full border text-sm ${className}`}/>
    )
}
export default Multiselect;

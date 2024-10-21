import { InputText } from 'primereact/inputtext';
import { FC } from 'react';

interface TextInputProps {
    name: string;
    placeholder?: string;
    value?: string;
    className?: string;
    onChange?: (value: string) => void;
}

const TextInput: FC<TextInputProps> = ({name, value, placeholder, className, onChange}) => {

    return (
        <div className={className}>
            <InputText placeholder={placeholder}
                       name={name}
                       className={`w-full p-[0.75em] border`}
                       value={value}
                       onChange={(e) => onChange && onChange(e.target.value)}/>
        </div>
    )
}

export default TextInput;

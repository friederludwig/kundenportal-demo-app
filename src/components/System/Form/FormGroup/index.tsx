import { FC, ReactNode } from 'react';

interface FormGroupProps {
    title?: string;
    children?: ReactNode;
    className?: string;
}

const FormGroup: FC<FormGroupProps> = ({title, children, className}) => {

    return (
        <div className="">
            <p className="uppercase border-b text-xs font-medium pb-1 mb-4 tracking-wider">
                {title}
            </p>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}

export default FormGroup;

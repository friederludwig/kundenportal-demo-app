import { FC, ReactNode } from 'react';

interface SystemAlertProps {
    title?: string;
    content?: string | ReactNode;
    icon?: ReactNode;
}

const SystemAlert: FC<SystemAlertProps> = ({title, content, icon}) => {

    return (
        <div className="text-center flex flex-col items-center gap-2 bg-primary-100/70 p-6 rounded-md">
            {icon}
            <div className="max-w-2xl mx-auto">
                <p className="text-primary-600 font-semibold mb-2">{title}</p>
                <div className="text-primary-600 text-sm talic">{content}</div>
            </div>
        </div>
    )
}


export default SystemAlert;

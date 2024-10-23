import { FC, ReactNode } from "react";

interface SystemAlertProps {
  title?: string;
  content?: string | ReactNode;
  icon?: ReactNode;
}

const SystemAlert: FC<SystemAlertProps> = ({ title, content, icon }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-6 text-center rounded-md bg-primary-100/70">
      {icon}
      <div className="max-w-2xl mx-auto">
        <p className="mb-2 text-lg font-semibold text-primary-600">{title}</p>
        <div className="text-sm text-primary-600 talic">{content}</div>
      </div>
    </div>
  );
};

export default SystemAlert;

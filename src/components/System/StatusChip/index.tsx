import React from 'react';
import { getStatusChipStyles } from './styles';

export type ChipStatus = "done" | "active" | "pending";

interface ChipProps {
    status: ChipStatus;
}

const chipLabels: Record<ChipStatus, string> = {
    done: "Abgeschlossen",
    active: "Aktiv",
    pending: "Entwurf"
}

const StatusChip = ({ status }: ChipProps) => {
    const style = getStatusChipStyles(status);

    return (
        <div className={style.chip}>
      {chipLabels[status]}
    </div>
    );
};

export default StatusChip;


import { TieredMenu } from 'primereact/tieredmenu';
import { useRef } from 'react';
import { MoreVertical } from 'react-feather';

export default function UserDemoTieredMenu() {
    const menu = useRef<TieredMenu | null>(null);
    const items = [
        {
            label: 'Exportieren als',
            items: [
                {
                    label: 'XLS',
                },
                {
                    label: 'PDF',
                },
                {
                    label: 'JPG',
                }
            ]
        },
        {
            label: 'Datensatz',
            items: [
                {
                    label: 'Periode wählen',
                },
                {
                    label: 'Metriken anpassen',
                },
                {
                    label: 'Datenimport ändern',
                },
            ]
        },
        {
            label: 'Teilen',
            items: [
                {
                    label: 'E-Mail',
                },
                {
                    label: 'Slack',
                },
                {
                    label: 'Whatsapp',
                },
                {
                    label: 'Twitter',
                },
                {
                    label: 'Facebook',
                },
                {
                    label: 'Instagram',
                },
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
            <button className="text-gray-300" onClick={(e) => menu.current?.toggle(e)}><MoreVertical /></button>
        </div>
    )
}



import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { useRef } from 'react';
import { MoreVertical } from 'react-feather';

export default function FileDemoTieredMenu() {
    const menu = useRef<TieredMenu | null>(null);
    const items = [
        {
            label: 'Berechtigungen',
        },
        {
            label: 'Bearbeiten',
            items: [
                {
                    label: 'Löschen',
                },
                {
                    label: 'Ändern',
                },
                {
                    label: 'Ausblenden',
                },
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
            <Button rounded severity="secondary" className="p-1 text-gray-300" onClick={(e) => menu.current?.toggle(e)}>
                <MoreVertical />
            </Button>
        </div>
    )
}


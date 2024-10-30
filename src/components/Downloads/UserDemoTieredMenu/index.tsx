
import { TieredMenu } from 'primereact/tieredmenu';
import { useRef } from 'react';

export default function UserDemoTieredMenu({ children }: { children?: JSX.Element }) {
    const menu = useRef<TieredMenu | null>(null);
    const items = [
        {
            label: 'Berechtigungen',
            items: [
                {
                    label: 'Entfernen',
                },
                {
                    label: 'Anpassen',
                },
            ]
        },
        {
            label: 'Nachricht',
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
                    label: 'Teams',
                },
            ]
        },
        {
            label: 'Profil ansehen',
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
            <button className="flex gap-2 items-center" onClick={(e) => menu.current?.toggle(e)}>{children}</button>
        </div>
    )
}


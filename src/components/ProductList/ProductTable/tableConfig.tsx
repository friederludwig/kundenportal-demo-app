import { ColDef } from "ag-grid-community"
import { Product } from ".";
import { advisors } from "./advisors";

export const productsColumnDefs: ColDef<Product>[] = [
    {
        headerName: 'Produktname',
        field: 'name',
        cellRenderer: (props: any) => (<span className="font-semibold" > {props.value} </span>),
        sortable: true
    },
    { headerName: 'Artikelnummer', field: 'productNumber', sortable: true },
    { headerName: 'Kategorie', field: 'category', sortable: true },
    {
        headerName: 'Verfügbarkeit',
        field: 'availability',
        cellRenderer: (props: any) => {
            let color;
            switch (props.value) {
                case 'Auf Lager':
                    color = 'bg-green-400/80 text-green-400';
                    break;
                case 'Begrenzt verfügbar':
                    color = 'bg-orange-400/80 text-orange-400';
                    break;
                case 'Vorbestellbar':
                default:
                    color = 'bg-red-400/80 text-red-400';
                    break;
            }

            return (
                <div className="flex items-center" >
                    <div
                        className={`${color} w-2 h-2 mr-2 rounded-full flex items-center justify-center`}
                    > </div>
                    < span > {props.value} </span>
                </div>
            );
        }
    },
    { headerName: 'Kundengruppen', field: 'customerGroups' },
    {
        headerName: 'Fachberater',
        field: 'advisorId',
        sortable: true,
        cellRenderer: (props: any) => {
            const advisorId = props.value;
            const advisor = advisors.find(a => a.id === advisorId);

            return (
                <div className="h-full flex items-center" >
                    <div className="flex items-center gap-2 rounded-full bg-stone-100 p-1 group" >
                        <img
                            src={advisor?.imageUrl}
                            alt={advisor?.name}
                            className="w-7 h-7 rounded-full border-2 border-primary-200"
                        />
                        <div className="leading-none pr-3" >
                            {advisor?.name}
                        </div>
                    </div>
                </div>
            );
        }
    },
    { headerName: 'Preis (€)', field: 'price', sortable: true },
    {
        headerName: 'Bewertung',
        field: 'rating',
        cellRenderer: (props: any) => {
            const rating = Math.round(props.value);
            const stars = Array.from({ length: 5 }, (_, index) => (
                <span key={index} style={{ color: index < rating ? '#FFD700' : '#ccc', marginRight: '2px' }}>
                    ★
                </span>
            ));

            return <div style={{ display: 'flex' }}> {stars} </div>;
        }
    },
    { headerName: 'Bewertungen', field: 'reviewsCount', sortable: true },
];
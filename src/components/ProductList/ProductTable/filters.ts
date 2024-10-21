const filterCategoryOptions = [
    { key: 'Baustellengeräte', value: 'Baustellengeräte' },
    { key: 'Schutzausrüstung', value: 'Schutzausrüstung' },
    { key: 'Baumaschinen', value: 'Baumaschinen' },
    { key: 'Handwerkzeuge', value: 'Handwerkzeuge' },
];

const filterAvailabilityOptions = [
    { key: 'Auf Lager', value: 'Auf Lager' },
    { key: 'Begrenzt verfügbar', value: 'Begrenzt verfügbar' },
    { key: 'Vorbestellbar', value: 'Vorbestellbar' },
];

const filterCustomerGroupOptions = [
    { key: 'Privatkunden', value: 'Privatkunden' },
    { key: 'Bauunternehmen', value: 'Bauunternehmen' },
];

export const productFilter = {
    filters: [
        {
            name:"search",
            placeholder: "Suche",
            type: "text",
            span: 7,
        },
        {
            name:"category",
            placeholder: "Kategorie",
            type: "select",
            options: filterCategoryOptions,
        },
        {
            name:"availability",
            placeholder: "Verfügbarkeit",
            type: "select",
            options: filterAvailabilityOptions,
        },

        {
            name:"customerGroups",
            placeholder: "Kundengruppen",
            type: "multiSelect",
            options: filterCustomerGroupOptions,
        }
    ]
}
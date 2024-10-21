import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions } from 'ag-grid-community';
import StatusChip, { ChipStatus } from '../../System/StatusChip';
import { Survey, surveys } from './surveys';

const GridExample: React.FC = () => {
    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        {headerName: 'Titel', field: 'title', cellClass: ['font-semibold', ''],},
        {
            headerName: 'Status',
            field: 'state',
            cellRenderer: (props: any) => (<StatusChip status={props.value as ChipStatus}/>)
        },
        {headerName: 'Zeitraum', field: 'period'},
        {headerName: 'Gruppe', field: 'surveyGroup'},
        {headerName: 'Teilgenommen', field: 'participantsCount'},
        {headerName: 'Offene Anfragen', field: 'openInquiries'},
    ]);

    const [rowData, setRowData] = useState<Survey[]>([]);

    useEffect(() => {
        setRowData(surveys);
    }, []);

    const gridOptions: GridOptions<Survey> = {
        columnDefs: columnDefs,
        rowData: null,
        autoSizeStrategy: {
            type: "fitGridWidth",
            defaultMinWidth: 100,
            columnLimits: [
                {
                    colId: "title",
                    minWidth: 280,
                },
                {
                    colId: "period",
                    minWidth: 220,
                },
            ],
        },
    };

    return (
        <div className="ag-theme-custom w-full" style={{width: "100%"}}>
            <AgGridReact
                rowData={rowData} // Daten, die in der Tabelle angezeigt werden
                columnDefs={columnDefs} // Definition der Spalten
                gridOptions={gridOptions}
                domLayout="autoHeight"
            />
        </div>
    );
};

export default GridExample;

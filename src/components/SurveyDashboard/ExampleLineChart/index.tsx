import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';
// Importiere den korrekten Typ für Cartesian Charts
import { AgCartesianChartOptions } from 'ag-charts-community';

const SurveyLineChart = () => {
    // Verwende den Typ AgCartesianChartOptions, um sicherzustellen, dass der State korrekt ist
    const [chartOptions, setChartOptions] = useState<AgCartesianChartOptions>({
        data: [
            { month: 'Jan', employees: 56, customers: 95 },
            { month: 'Feb', employees: 71, customers: 105 },
            { month: 'Mär', employees: 78, customers: 130 },
            { month: 'Apr', employees: 63, customers: 115 },
            { month: 'Mai', employees: 98, customers: 145 },
            { month: 'Jun', employees: 112, customers: 120 },
            { month: 'Jul', employees: 103, customers: 130 },
            { month: 'Aug', employees: 108, customers: 140 },
            { month: 'Sep', employees: 85, customers: 150 },
            { month: 'Okt', employees: 114, customers: 160 },
            { month: 'Nov', employees: 118, customers: 170 },
            { month: 'Dez', employees: 124, customers: 175 },
        ],
        series: [
            {
                type: 'line',
                xKey: 'month', // X-Achse zeigt die Monate
                yKey: 'employees', // Y-Achse zeigt die Anzahl der Mitarbeiter
                yName: 'Mitarbeiter',
                stroke: 'blue', // Farbe der Linie für Mitarbeiter
                marker: {
                    enabled: true, // Aktiviert die Dots (Marker)
                    fill: '#8D84EE', // Farbe der Dots
                    stroke: '#8D84EE', // Rahmenfarbe der Dots
                    size: 6, // Größe der Dots
                },
            },
            {
                type: 'line',
                xKey: 'month', // X-Achse zeigt die Monate
                yKey: 'customers', // Y-Achse zeigt die Anzahl der Kunden
                yName: 'Kunden',
                stroke: '#ababab', // Farbe der Linie für Kunden
                marker: {
                    enabled: true, // Aktiviert die Dots (Marker)
                    fill: '#ababab', // Farbe der Dots
                    stroke: '#ababab', // Rahmenfarbe der Dots
                    size: 6, // Größe der Dots
                },
            },
        ],
        axes: [
            {
                type: 'category', // Kategorische Achse für die Monate
                position: 'bottom', // Unten
                //title: { text: 'Month' }, // Titel der X-Achse
            },
            {
                type: 'number', // Numerische Achse für die Teilnehmeranzahl
                position: 'left', // Links
                //title: { text: 'Number of Participants' }, // Titel der Y-Achse
                min: 0, // Beginn bei 0
            },
        ],
        legend: {
            position: 'bottom', // Position der Legende
        },
    });

    return <AgCharts options={chartOptions} />;
};

export default SurveyLineChart;

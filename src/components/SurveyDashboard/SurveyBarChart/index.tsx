import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';
import { AgCartesianChartOptions } from 'ag-charts-community';

const SurveyBarChart = () => {
    // Beispielhafter Datensatz mit mehreren Umfragen
    const allSurveys = [
        { survey: 'Kundenzufriedenheit', participants: 150 },
        { survey: 'Mitarbeiterzufriedenheit', participants: 320 },
        { survey: 'Produktfeedback', participants: 180 },
        { survey: 'Feature-Bewertung', participants: 250 },
        { survey: 'Website Usability', participants: 118 },
        { survey: 'Support-Zufriedenheit', participants: 86 },
        { survey: 'Marketing-Kampagne', participants: 64 },
    ];

    // Finde die fünf Umfragen mit den meisten Teilnehmern
    const topFiveSurveys = allSurveys
        .sort((a, b) => b.participants - a.participants) // Sortiere nach Teilnehmeranzahl
        .slice(0, 7); // Wähle die Top 5

    // State für die Diagrammoptionen
    const [chartOptions, setChartOptions] = useState<AgCartesianChartOptions>({
        data: topFiveSurveys,
        series: [
            {
                type: 'bar',
                xKey: 'survey',
                yKey: 'participants',
                yName: 'Teilnehmeranzahl',
                label: {
                    formatter: ({ value }: { value: number }) => value.toString(),
                },
                fill: '#8D84EE',
            },
        ],
        axes: [
            {
                type: 'category',
                position: 'bottom',
                label: {
                    rotation: 0, // Reduziere die Drehung der Beschriftung (0 = horizontal)
                    autoRotate: false, // Verhindert automatische Rotation
                    fontSize: 12, // Reduziere die Schriftgröße für mehr Platz
                    formatter: (params: any) => {
                        const word = params.value;
                        const maxCharPerLine = 10; // Maximale Anzahl von Zeichen pro Zeile
                        const wordBreak = (str: string, limit: number) =>
                            str.length > limit ? str.match(new RegExp(`.{1,${limit}}`, 'g'))?.join('\n') : str;

                        return wordBreak(word, maxCharPerLine); // Umbricht das Wort nach maxCharPerLine Zeichen
                    },
                },
            },
            {
                type: 'number',
                position: 'left',
                min: 0,
            },
        ],
        legend: {
            enabled: false,
        },
    });

    return <AgCharts options={chartOptions} />;
};

export default SurveyBarChart;

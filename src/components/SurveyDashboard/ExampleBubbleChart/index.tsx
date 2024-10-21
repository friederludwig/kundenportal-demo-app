import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';
import { AgCartesianChartOptions } from 'ag-charts-community';

const ExampleBubbleChart = () => {
    const [chartOptions, setChartOptions] = useState<AgCartesianChartOptions>({
        data: [
            { survey: 'Kundenzufriedenheit', completionRate: 75, participants: 150, questions: 10 },
            { survey: 'Mitarbeiterzufriedenheit', completionRate: 85, participants: 200, questions: 12 },
            { survey: 'Produktbewertung', completionRate: 90, participants: 100, questions: 8 },
            { survey: 'Usability-Test', completionRate: 65, participants: 120, questions: 6 },
            { survey: 'Feature-Feedback', completionRate: 80, participants: 175, questions: 15 },
            { survey: 'Support-Zufriedenheit', completionRate: 70, participants: 300, questions: 9 },
            { survey: 'Marktforschung', completionRate: 55, participants: 80, questions: 7 },
            { survey: 'Website-Feedback', completionRate: 60, participants: 200, questions: 11 },
            { survey: 'App-Nutzungsanalyse', completionRate: 78, participants: 150, questions: 10 },
            { survey: 'Kundenbindungsumfrage', completionRate: 82, participants: 180, questions: 20 },
            { survey: 'Nutzererlebnis-Umfrage', completionRate: 88, participants: 250, questions: 26 },
            { survey: 'Schulungsfeedback', completionRate: 95, participants: 90, questions: 8 },
            { survey: 'Zufriedenheit mit neuen Funktionen', completionRate: 92, participants: 110, questions: 9 },
            { survey: 'Feedback zur Support-Qualität', completionRate: 75, participants: 95, questions: 5 },
            { survey: 'Umfrage zur Produktnutzung', completionRate: 85, participants: 130, questions: 10 },
            { survey: 'Bewertung der Website-Navigation', completionRate: 42, participants: 145, questions: 6 },
            { survey: 'Umfrage zur neuen App', completionRate: 55, participants: 345, questions: 19 },
            { survey: 'Event-Feedback', completionRate: 40, participants: 290, questions: 24 },
            { survey: 'Marketingumfrage', completionRate: 30, participants: 340, questions: 11 }
        ],
        series: [
            {
                type: 'bubble',
                xKey: 'completionRate', // X-Achse: Completion Rate in Prozent
                yKey: 'participants', // Y-Achse: Anzahl der Teilnehmer
                sizeKey: 'participants', // Größe der Bubble: Anzahl der Teilnehmer
                label: {
                    enabled: true, // Beschriftung aktivieren
                    formatter: ({ datum }: { datum: any }) => {
                        return datum.survey; // Beschriftung der Bubble
                    },
                },
                tooltip: {
                    enabled: true,
                    renderer: ({ datum }) => {
                        return {
                            title: datum.survey,
                            content: `Completion Rate: ${datum.completionRate}%\nTeilnehmer: ${datum.participants}\nFragen: ${datum.questions}`, // Inhalt des Tooltips
                        };
                    },
                },
                fill: "#8D84EE"
            },
        ],
        axes: [
            {
                type: 'number',
                position: 'bottom',
                title: {
                    text: 'Completion Rate (%)', // Titel der X-Achse
                },
                min: 0,
                max: 100, // Maximalwert 100% für die Completion Rate
            },
            {
                type: 'number',
                position: 'left',
                title: {
                    text: 'Anzahl der Teilnehmer', // Titel der Y-Achse
                },
                min: 0,
                max: 350,
            },
        ],
        legend: {
            enabled: false, // Legende deaktivieren, da sie hier nicht benötigt wird
        },
        height: 450,
    });

    return <AgCharts options={chartOptions} />;
};

export default ExampleBubbleChart;

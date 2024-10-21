import { ChipStatus } from "../../System/StatusChip";

export interface Survey {
    title: string,
    period: string,
    surveyGroup: string,
    participantsCount: number,
    openInquiries: number,
    state: ChipStatus,
}

export const surveys: Survey[] = [
    {
        title: 'Zufriedenheit mit Kundenservice',
        period: '01.03.2024 – 01.04.2024',
        surveyGroup: 'Kundendienst',
        participantsCount: 150,
        openInquiries: 10,
        state: 'done'
    },
    {
        title: 'Organisation Quartalsmeeting',
        period: '15.02.2024 – 15.03.2024',
        surveyGroup: 'Management',
        participantsCount: 80,
        openInquiries: 5,
        state: 'active'
    },
    {
        title: 'Projektbezogene Kommunikation',
        period: '10.01.2024 – 10.02.2024',
        surveyGroup: 'Projektteam',
        participantsCount: 120,
        openInquiries: 7,
        state: 'active'
    },
    {
        title: 'Mitarbeiterzufriedenheit',
        period: '01.04.2024 – 30.04.2024',
        surveyGroup: 'HR',
        participantsCount: 200,
        openInquiries: 12,
        state: 'pending'
    },
    {
        title: 'Kundenzufriedenheit nach Kauf',
        period: '01.05.2024 – 31.05.2024',
        surveyGroup: 'Kundendienst',
        participantsCount: 250,
        openInquiries: 15,
        state: 'done'
    },
    {
        title: 'Schulungsevaluierung',
        period: '15.03.2024 – 15.04.2024',
        surveyGroup: 'HR',
        participantsCount: 110,
        openInquiries: 8,
        state: 'pending'
    }
]
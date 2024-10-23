import { FC } from 'react';
import { Info, List, PlusCircle } from 'react-feather';
import SystemButton from '../System/Button';
import Container from '../System/Container';
import SystemAlert from '../System/SystemAlert';
import TableDemoTieredMenu from '../System/TableDemoTieredMenu';
import ExampleBubbleChart from './ExampleBubbleChart';
import SurveyOverviewChart from './ExampleLineChart';
import SurveyBarChart from './SurveyBarChart';
import SurveyTable from './SurveyTable';

import { PageRoutes } from '../../lib/store/router.store';
import LinkRouter from '../System/LinkRouter';
import TutorialOverlay from '../System/TutorialOverlay';

const SurveyDashboard: FC = () => {
    return (
        <div className="grid gap-4">
            <Container sticky>
                <div className="flex gap-4 justify-between items-center">
                    <h1 className="text-2xl font-semibold">Umfragen Dashboard</h1>
                    <div className="flex gap-3 items-center">
                        <LinkRouter className="relative" route={PageRoutes.SURVEY_LIST}>
                            <SystemButton style="primary-negative"><List size={18} /> Alle Umfragen</SystemButton>
                        </LinkRouter>
                        <LinkRouter className="relative" route={PageRoutes.SURVEY_NEW}>
                            <SystemButton style="primary"><PlusCircle size={20} /> Neue Umfrage</SystemButton>
                        </LinkRouter>
                    </div>
                </div>
            </Container>

            <Container>
                <div className="my-2">
                    <SystemAlert
                        title="Die passende Dashboard Lösung für Ihre Anfoderungen"
                        content="Diese App ist ein Prototyp und dient zur interaktiven Veranschaulichung von Anwenungsbeispielen.
                            Gemeinsam finden wir die Lösung für Ihre Anforderung..."
                        icon={<span className="text-primary-600 mb-1"><Info size={22} /></span>} />

                </div>
            </Container>

            <div className="grid grid-cols-12 gap-4">
                <div className="xl:col-span-7 col-span-12">
                    <Container title="Top 5 erfolgreichste Umfragen (nach Teilnehmeranzahl)"
                        subtitle="Ansicht für das Jahr 2024"
                        actions={<TableDemoTieredMenu />}>
                        <SurveyBarChart />
                    </Container>
                </div>
                <div className="xl:col-span-5 col-span-12">
                    <Container title="Gesammtanzahl der Teilnehmer aller Umfragen" subtitle="Ansicht für das Jahr 2024"
                        actions={<TableDemoTieredMenu />}>
                        <SurveyOverviewChart />
                    </Container>
                </div>
            </div>

            <Container title="Completion Rate der aktuellen Umfragen"
                subtitle="Die Completion Rate zeigt den Prozentsatz der Befragten an, die eine Umfrage bis zu einem bestimmten Punkt abgeschlossen haben."
                actions={<TableDemoTieredMenu />}>
                <ExampleBubbleChart />
            </Container>

            <Container title="Aktuelle Umfragen" actions={<TableDemoTieredMenu />}>
                <SurveyTable />
            </Container>

            <TutorialOverlay
                title='Erleben Sie umfassende Berichte und individuelle Analysen in Echtzeit!'
                description='Nutzen Sie die Filteroptionen, um Ihre Produktauswahl präzise anzupassen. Alle Ergebnisse werden in Echtzeit aktualisiert, damit Sie schnell und gezielt zu den gewünschten Informationen gelangen!'
                focusPoint={{ size: 240, left: 550, top: 600 }}
                forPage={PageRoutes.SURVEY_DASHBOARD}
            />
        </div>
    );
};

export default SurveyDashboard;

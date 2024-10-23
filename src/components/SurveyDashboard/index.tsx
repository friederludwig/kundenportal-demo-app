import { FC } from "react";
import { Info, List, PlusCircle } from "react-feather";
import SystemButton from "../System/Button";
import Container from "../System/Container";
import SystemAlert from "../System/SystemAlert";
import TableDemoTieredMenu from "../System/TableDemoTieredMenu";
import ExampleBubbleChart from "./ExampleBubbleChart";
import SurveyOverviewChart from "./ExampleLineChart";
import SurveyBarChart from "./SurveyBarChart";
import SurveyTable from "./SurveyTable";

import { PageRoutes } from "../../lib/store/router.store";
import LinkRouter from "../System/LinkRouter";

const SurveyDashboard: FC = () => {
  return (
    <div className="grid gap-4">
      <Container sticky>
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl font-semibold">Umfragen Dashboard</h1>
          <div className="flex items-center gap-3">
            <LinkRouter className="relative" route={PageRoutes.SURVEY_LIST}>
              <SystemButton style="primary-negative">
                <List size={18} /> Alle Umfragen
              </SystemButton>
            </LinkRouter>
            <LinkRouter className="relative" route={PageRoutes.SURVEY_NEW}>
              <SystemButton style="primary">
                <PlusCircle size={20} /> Neue Umfrage
              </SystemButton>
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
            icon={
              <span className="mb-1 text-primary-600">
                <Info size={22} />
              </span>
            }
          />
        </div>
      </Container>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-7">
          <Container
            title="Top 5 erfolgreichste Umfragen (nach Teilnehmeranzahl)"
            subtitle="Ansicht für das Jahr 2024"
            actions={<TableDemoTieredMenu />}
          >
            <SurveyBarChart />
          </Container>
        </div>
        <div className="col-span-12 xl:col-span-5">
          <Container
            title="Gesammtanzahl der Teilnehmer aller Umfragen"
            subtitle="Ansicht für das Jahr 2024"
            actions={<TableDemoTieredMenu />}
          >
            <SurveyOverviewChart />
          </Container>
        </div>
      </div>

      <Container
        title="Completion Rate der aktuellen Umfragen"
        subtitle="Die Completion Rate zeigt den Prozentsatz der Befragten an, die eine Umfrage bis zu einem bestimmten Punkt abgeschlossen haben."
        actions={<TableDemoTieredMenu />}
      >
        <ExampleBubbleChart />
      </Container>

      <Container title="Aktuelle Umfragen" actions={<TableDemoTieredMenu />}>
        <SurveyTable />
      </Container>
    </div>
  );
};

export default SurveyDashboard;

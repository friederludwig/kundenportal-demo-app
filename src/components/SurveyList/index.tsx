import { FC } from "preact/compat";
import { Calendar, List, PlusCircle, Users } from "react-feather";
import { PageRoutes } from "../../lib/store/router.store";
import SystemButton from "../System/Button";
import Container from "../System/Container";
import LinkRouter from "../System/LinkRouter";
import { surveys } from "../SurveyDashboard/SurveyTable/surveys";

const SurveyList: FC = () => {

    return (
        <div className="grid gap-4">
            <Container sticky>
                <div className="flex gap-4 justify-between items-center">
                    <h1 className="text-2xl font-semibold">Alle Umfragen</h1>
                    <div className="flex gap-3 items-center">
                        <LinkRouter className="relative" route={PageRoutes.SURVEY_NEW}>
                            <SystemButton style="primary"><PlusCircle size={20} /> Neue Umfrage</SystemButton>
                        </LinkRouter>
                    </div>
                </div>
            </Container>
            <Container title="Aktive Umfragen">
                <div className="grid grid-cols-4 gap-8">
                    {surveys.map(survey =>
                        <div className="p-4 pt-12 border rounded-md">
                            <p className="mb-2 ">{survey.title}</p>
                            <p className="flex text-sm items-center gap-2.5 mb-1"><Calendar size={18}/>{survey.period}</p>
                            <p className="flex text-sm items-center gap-2.5"><Users size={18}/>{survey.surveyGroup}</p>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default SurveyList;
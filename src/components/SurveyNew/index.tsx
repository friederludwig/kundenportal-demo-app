import { FC } from "react";
import SystemButton from "../System/Button";
import { useFormState } from "../../lib/hooks/useFormState";
import Container from "../System/Container";
import SurveyNewQuestionForm from "./SurveyNewQuestionForm";
import { CheckCircle, Clipboard, Info, Save } from "react-feather";
import SystemAlert from "../System/SystemAlert";
import Multiselect, { SelectOption } from "../System/Form/Multiselect";
import TextInput from "../System/Form/TextInput";
import FormGroup from "../System/Form/FormGroup";
import { PageRoutes } from "../../lib/store/router.store";
import TutorialOverlay from "../System/TutorialOverlay";

interface SurveyFormValues {
  title: string;
  participants: SelectOption[] | null;
}

const initFormValues = {
  title: "",
  participants: null,
};

const SurveyNew: FC = () => {
  const [formValues, updateFormValue] = useFormState<SurveyFormValues>(initFormValues);

  const recipients = [
    { label: "Internes Marketing", key: "IM" },
    { label: "Kunden Gruppe A", key: "KA" },
    { label: "Kunden Gruppe B", key: "KB" },
    { label: "Mitarbeiter-Feedback", key: "MF" },
    { label: "Produktentwicklungsteam", key: "PDT" },
    { label: "Vertriebsteam", key: "VT" },
    { label: "Support-Team", key: "ST" },
    { label: "Forschung und Entwicklung", key: "F&E" },
    { label: "Kunden Gruppe C", key: "KC" },
    { label: "E-Mail-Abonnenten", key: "EA" },
  ];

  return (
    <div className="grid gap-4">
      {/*       <Container>
        <div className="my-2">
          <SystemAlert
            title=" Hier können weitere nützliche Funktionen oder Eingabefelder hinzugefügt werden"
            content="Diese Anwendung ist nur ein übersichtliches Beispiel für verbreitete Anwendungsfälle. Gerne
                            arbeiten wir mit Ihnen an passenden individuellen Lösungen, optimal zugeschnitten auf Ihre
                            Anforderungen."
            icon={<Info className="text-primary-600" size={25} />}
          />
        </div>
      </Container> */}

      <Container title="Neue Umfrage erstellen">
        <div className="absolute flex items-center gap-2 right-5 top-4">
          <p className="text-sm text-gray-500">Entwurf automatisch gespeichert</p>
          <span className="text-primary-400">
            <CheckCircle size={19} strokeWidth={2.5} />
          </span>
        </div>
        <div className="my-2 space-y-8">
          <TextInput
            name="title"
            placeholder="Name der Umfrage"
            className="mb-2 font-medium border-4 rounded-lg border-primary-100"
            value={formValues.title}
            onChange={(title) => updateFormValue("title", title)}
          />

          <FormGroup title="Empfängergruppen">
            <Multiselect
              name="recipients"
              placeholder="Wählen Sie die Empfänger"
              options={recipients}
              value={formValues.participants}
              onChange={(participants) =>
                updateFormValue("participants", participants ?? null)
              }
            />
          </FormGroup>

          <FormGroup title="Neue Frage">
            <SurveyNewQuestionForm />
          </FormGroup>
        </div>

        <SystemButton disabled onClick={() => console.log(formValues)}>
          <Save size={19} />
          Speichern und schließen
        </SystemButton>
      </Container>

      <TutorialOverlay
        title="Erstellen Sie individuelle Umfragen!"
        description="Nutzen Sie die intuitiven Optionen, um verschiedene Fragetypen hinzuzufügen und Ihre Umfrage individuell zu gestalten."
        forPage={PageRoutes.SURVEY_NEW}
        clipPath="inset(330px 20px 0 280px round 15px)"
        clipHeight="670px"
        tooltip={{
          top: "7rem",
          left: "17rem",
          arrow: "bottom",
          icon: <Clipboard size={20} />,
        }}
      />
    </div>
  );
};

export default SurveyNew;

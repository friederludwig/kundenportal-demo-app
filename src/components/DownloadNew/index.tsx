import { FC } from "preact/compat";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Tooltip } from "primereact/tooltip";
import { Info, PauseCircle, XCircle } from "react-feather";
import { useFormState } from "../../lib/hooks/useFormState";
import { assetTypeIcons } from "../Downloads";
import { AssetItem, AssetType } from "../Downloads/downloads";
import SystemButton from "../System/Button";
import Container from "../System/Container";
import FileDropzone from "../System/Form/DropZone";
import FormGroup from "../System/Form/FormGroup";
import Multiselect, { SelectOption } from "../System/Form/Multiselect";
import Singleselect from "../System/Form/Singleselect";
import TextInput from "../System/Form/TextInput";
import SystemAlert from "../System/SystemAlert";
import TutorialOverlay from "../System/TutorialOverlay";
import { PageRoutes } from "../../lib/store/router.store";

interface DownloadFormValues {
  title: string;
  category: SelectOption | null;
  recipients: SelectOption[] | null;
  recipientGroups: SelectOption[] | null;
  items: AssetItem[];
  publishedAt: string;
  publishedTill: string;
}

const initFormValues = {
  title: "",
  category: null,
  recipients: null,
  recipientGroups: null,
  items: [],
  publishedAt: "",
  publishedTill: "",
};

const categories: SelectOption[] = [
  {
    key: "category1",
    label: "Kategorie 1",
  },
  {
    key: "category2",
    label: "Kategorie 2",
  },
  {
    key: "category3",
    label: "Kategorie 3",
  },
];

const recipients: SelectOption[] = [
  {
    key: "maxMustermann",
    label: "Max Mustermann",
  },
  {
    key: "mariaSchneider",
    label: "Maria Schneider",
  },
  {
    key: "lisaMüller",
    label: "Lisa Müller",
  },
  {
    key: "thomasFischer",
    label: "Thomas Fischer",
  },
  {
    key: "juliaBauer",
    label: "Julia Bauer",
  },
  {
    key: "sebastianSchulz",
    label: "Sebastian Schulz",
  },
  {
    key: "sophiaHoffmann",
    label: "Sophia Hoffmann",
  },
];

const recipientGroups: SelectOption[] = [
  {
    key: "marketing",
    label: "Marketing Abteilung",
  },
  {
    key: "sales",
    label: "Vertriebsabteilung",
  },
  {
    key: "hr",
    label: "Personalabteilung",
  },
  {
    key: "it",
    label: "IT Abteilung",
  },
  {
    key: "finance",
    label: "Finanzabteilung",
  },
  {
    key: "management",
    label: "Geschäftsleitung",
  },
  {
    key: "support",
    label: "Kundensupport",
  },
  {
    key: "logistics",
    label: "Logistikabteilung",
  },
  {
    key: "research",
    label: "Forschung und Entwicklung",
  },
  {
    key: "legal",
    label: "Rechtsabteilung",
  },
  {
    key: "customers1",
    label: "Kundengruppe 1",
  },
  {
    key: "customers2",
    label: "Kundengruppe 2",
  },
];

const uploadedFiles: AssetItem[] = [
  {
    title: "Titelbild der Kampagne",
    type: AssetType.PDF,
    size: "1,4 MB",
  },
  {
    title: "Rechtliche Rahmenbedingungen",
    type: AssetType.PDF,
    size: "320 KB",
  },
  {
    title: "Rohschnitt Imagefilm",
    type: AssetType.MP4,
    size: "2 GB",
  },
];

const DownloadNew: FC = () => {
  const [formValues, updateFormValue] = useFormState<DownloadFormValues>(initFormValues);

  const handleFileUpload = (files: File[]) => {
    console.log(files);
  };

  return (
    <div className="grid gap-4">
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

      <Container title="Neues Asset Bundle erstellen">
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            name="title"
            placeholder="Titel"
            className="mb-4 font-medium rounded-lg"
            value={formValues.title}
            onChange={(title) => updateFormValue("title", title)}
          />
          <Singleselect
            name="category"
            placeholder="Kategorie"
            options={categories}
            value={formValues.category}
            className="mb-7"
            onChange={(participants) => updateFormValue("category", participants ?? null)}
          />
        </div>

        <FormGroup title="Dateien" className="mb-6">
          <FileDropzone onFileUpload={handleFileUpload} />
          <ul className="mt-4">
            <li
              key="uploadExample"
              className="flex items-center justify-between p-2 rounded even:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-400">{assetTypeIcons.Pdf}</span>
                <span className="text-sm tracking-wide text-gray-600">
                  Textinhalte für Kampagne
                </span>
              </div>
              <div className="flex w-[60%] justify-between">
                <div className="flex items-center w-full gap-3 pr-3">
                  <span className="text-xs text-gray-300">64%</span>
                  <div className="relative w-full h-1">
                    <span className="absolute top-0 left-0 block w-full h-1 bg-gray-200 rounded-full"></span>
                    <span className="absolute block top-0 w-[64%] left-0 h-1 rounded-full bg-primary-300"></span>
                  </div>
                </div>
                <div>
                  <Button rounded severity="secondary" className="p-1 text-gray-400">
                    <PauseCircle size={18} />
                  </Button>
                </div>
              </div>
            </li>
            {uploadedFiles.map((file) => (
              <li
                className="flex items-center justify-between p-2 rounded even:bg-gray-50"
                key={file.title}
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">{assetTypeIcons[file.type]}</span>
                  <span className="text-sm tracking-wide text-gray-600">{file.title}</span>
                </div>
                <div className="flex w-[15%] justify-end">
                  <div className="flex items-center justify-end gap-2 mr-3 text-xs tracking-wide text-gray-400 ">
                    <div className="w-16">Typ: {file.type}</div>
                    <span>|</span>
                    <div className="w-24">Größe: {file.size}</div>
                  </div>
                  <div className="">
                    <Tooltip position="left" target=".custom-tooltip-btn">
                      <div className="flex items-center gap-2">
                        <Info size={16} />
                        <p className="text-xs">Diese Funktion ist in der Demo deaktiviert</p>
                      </div>
                    </Tooltip>
                    <Button
                      rounded
                      severity="secondary"
                      className="p-1 text-gray-400 custom-tooltip-btn"
                    >
                      <XCircle size={18} />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </FormGroup>

        <FormGroup title="Empfänger" className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Multiselect
                name="recipientGroups"
                placeholder="Empfängergruppen hinzufügen"
                options={recipientGroups}
                value={formValues.recipientGroups}
                onChange={(participants) =>
                  updateFormValue("recipientGroups", participants ?? null)
                }
              />
            </div>
            <div>
              <Multiselect
                name="recipients"
                placeholder="Empfänger hinzufügen"
                options={recipients}
                value={formValues.recipients}
                onChange={(participants) =>
                  updateFormValue("recipients", participants ?? null)
                }
              />
            </div>
          </div>
        </FormGroup>

        <FormGroup title="Veröffentlichung planen">
          <div className="grid grid-cols-2 gap-4 mb-7">
            <Calendar
              className="[&_input]:w-full [&_input]:p-2.5 [&_input]:border [&_input]:"
              value={new Date(formValues.publishedAt)}
              onChange={(e) => updateFormValue("publishedAt", e.value)}
              dateFormat="dd.mm.yy"
              showTime
              hourFormat="24"
              showIcon
            />
            <Calendar
              className="[&_input]:w-full [&_input]:p-2.5 [&_input]:border [&_input]:"
              value={new Date(formValues.publishedAt)}
              onChange={(e) => updateFormValue("publishedAt", e.value)}
              dateFormat="dd.mm.yy"
              showTime
              hourFormat="24"
              showIcon
            />
          </div>
        </FormGroup>

        <div className="flex justify-between">
          <SystemButton style="primary-negative">Abbrechen</SystemButton>
          <SystemButton>Speichern und schließen</SystemButton>
        </div>
      </Container>
    </div>
  );
};

export default DownloadNew;

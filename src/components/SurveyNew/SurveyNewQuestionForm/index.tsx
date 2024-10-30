import { h } from "preact";
import { useState } from "preact/hooks";
import SurveyQuestionsRenderer from "../SurveyQuestionsRenderer";
import { Plus } from "react-feather";
import { SelectOption } from "../../System/Form/Multiselect";
import { useFormState } from "../../../lib/hooks/useFormState";
import Singleselect from "../../System/Form/Singleselect";
import TextInput from "../../System/Form/TextInput";
import SystemButton from "../../System/Button";
import FormGroup from "../../System/Form/FormGroup";

export enum QuestionTypes {
  TEXT = "text_input",
  SINGLE_SELECT = "radio_select_list",
  MULTI_SELECT = "multiselect",
}

const questionTypes = [
  {
    key: QuestionTypes.TEXT,
    label: "Eingabefeld",
  },
  {
    key: QuestionTypes.SINGLE_SELECT,
    label: "Einzelauswahl",
  },
  {
    key: QuestionTypes.MULTI_SELECT,
    label: "Mehrfachauswahl",
  },
];

export const getQuestionLabel = (type: QuestionTypes) =>
  questionTypes.find((q) => q.key === type)?.label;

export interface Question {
  text: string;
  type: QuestionTypes;
  options?: string[];
}

interface NewQuestionFormValues {
  text: string;
  type: SelectOption | null;
}

const initFormValues = {
  text: "",
  type: questionTypes[0],
};

const initQuestions: Question[] = [
  {
    text: "Bitte geben Sie anhand Ihrer Erfahrung mit unserem Service an, wie zufrieden Sie insgesamt damit sind.",
    type: QuestionTypes.TEXT,
  },
  {
    text: 'Inwieweit stimmen Sie der Aussage zu: "Unser Unternehmen reagiert schnell auf Ihre Anfragen und Probleme"?',
    type: QuestionTypes.SINGLE_SELECT,
    options: [
      "Trifft zu",
      "Trifft meistens zu",
      "Trifft teils zu",
      "Trifft selten zu",
      "Trifft nie zu",
    ],
  },
  {
    text: "Bitte geben Sie an, welche der folgenden Aspekte unseres Services für Sie besonders wichtig sind.",
    type: QuestionTypes.MULTI_SELECT,
    options: ["Preis-Leistungs-Verhältnis", "Produktqualität", "Verfügbarkeit"],
  },
];

const MAX_MULTI_SELECT_OPTIONS = 10;

const SurveyNewQuestionForm = () => {
  const [questions, setQuestions] = useState<Question[]>([]); // initQuestions
  const [formValues, updateFormValue, resetForm] =
    useFormState<NewQuestionFormValues>(initFormValues);

  const [options, setOptions] = useState<string[]>([""]);

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    if (options.length < 10) {
      setOptions([...options, ""]);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 1) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  const addQuestion = () => {
    if (formValues.text.trim() && formValues.type) {
      setQuestions((prev) => [
        ...prev,
        {
          type: formValues.type?.key,
          text: formValues.text,
          options:
            formValues.type?.key === QuestionTypes.SINGLE_SELECT ||
              formValues.type?.key === QuestionTypes.MULTI_SELECT
              ? options.filter((option) => option.trim()) // Only add non-empty options
              : undefined,
        } as Question,
      ]);
      resetForm();
      setOptions([""])
    }
  };

  const removeQuestion = (question: string) => {
    setQuestions((prev) => prev.filter(q => q.text !== question));
  }

  return (
    <div className="mb-10">
      <div className="p-4 bg-gray-100 rounded mb-7">
        <TextInput
          name="text"
          placeholder="Frage"
          className="col-span-9"
          value={formValues.text}
          onChange={(title) => updateFormValue("text", title)}
        />

        <div className="my-3">
          <Singleselect
            name="type"
            placeholder="Typ"
            className="col-span-3"
            options={questionTypes.map((q) => ({ key: q.key, label: q.label }))}
            value={formValues.type}
            onChange={(type) => {
              updateFormValue("type", type as SelectOption);
              if (
                type?.key === QuestionTypes.SINGLE_SELECT ||
                type?.key === QuestionTypes.MULTI_SELECT
              ) {
                setOptions([""]);
              } else {
                setOptions([]);
              }
            }}
          />
          <div>
            {(formValues.type?.key === QuestionTypes.SINGLE_SELECT ||
              formValues.type?.key === QuestionTypes.MULTI_SELECT) && (
                <div className="mb-4">
                  <div className="col-span-8">
                    {options.map((option, i) => (
                      <div className="flex items-center gap-4 mt-4" key={i}>
                        <div>{i + 1}.</div>
                        <TextInput
                          name={`option-${i}`}
                          placeholder="Antwort"
                          className="w-full"
                          value={option}
                          onChange={(v) => updateOption(i, v)}
                        />

                        <SystemButton
                          style="primary-negative"
                          size="small"
                          onClick={() => removeOption(i)}
                          disabled={options.length <= 1}
                        >
                          Entfernen
                        </SystemButton>
                      </div>
                    ))}

                    {/* Button to add more options for SINGLE_SELECT or MULTI_SELECT, max 10 */}
                    {(formValues.type?.key === QuestionTypes.SINGLE_SELECT ||
                      formValues.type?.key === QuestionTypes.MULTI_SELECT) &&
                      options.length < MAX_MULTI_SELECT_OPTIONS && (
                        <button
                          className="my-3 text-sm text-gray-500 underline ml-7"
                          onClick={addOption}
                        >
                          Weitere Option hinzufügen
                        </button>
                      )}
                  </div>
                </div>
              )}
          </div>
        </div>
        <SystemButton
          style="primary-negative"
          size="small"
          className="mt-2"
          onClick={() => addQuestion()}
        >
          <Plus size={18} />
          Frage hinzufügen
        </SystemButton>
      </div>

      <div className="my-2"></div>

      <FormGroup title="Fragebogen">
        <SurveyQuestionsRenderer questions={questions} removeQuestion={removeQuestion} />
      </FormGroup>
    </div>
  );
};

export default SurveyNewQuestionForm;

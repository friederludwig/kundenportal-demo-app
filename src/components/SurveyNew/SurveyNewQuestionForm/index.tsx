import { h } from 'preact';
import { useState } from 'preact/hooks';
import SurveyQuestionsRenderer from '../SurveyQuestionsRenderer';
import { Plus } from 'react-feather';
import { SelectOption } from '../../System/Form/Multiselect';
import { useFormState } from '../../../lib/hooks/useFormState';
import Singleselect from '../../System/Form/Singleselect';
import TextInput from '../../System/Form/TextInput';
import SystemButton from '../../System/Button';
import FormGroup from '../../System/Form/FormGroup';

export enum QuestionTypes {
    TEXT = 'text_input',
    SINGLE_SELECT = 'radio_select_list',
    MULTI_SELECT = 'multiselect'
}

const questionTypes = [
    {
        key: QuestionTypes.TEXT,
        label: "Eingabefeld"
    },
    {
        key: QuestionTypes.SINGLE_SELECT,
        label: "Einzelauswahl (Likert-Skala)"
    },
    {
        key: QuestionTypes.MULTI_SELECT,
        label: "Mehrfachauswahl"
    }
]

export const getQuestionLabel = (type: QuestionTypes) => questionTypes.find(q => q.key === type)?.label;

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
}

const initQuestions: Question[] = [
    {
        text: "Bitte geben Sie anhand Ihrer Erfahrung mit unserem Service an, wie zufrieden Sie insgesamt damit sind.",
        type: QuestionTypes.TEXT,
    },
    {
        text: "Inwieweit stimmen Sie der Aussage zu: \"Unser Unternehmen reagiert schnell auf Ihre Anfragen und Probleme\"?",
        type: QuestionTypes.SINGLE_SELECT,
        options: ["Trifft zu", "Trifft meistens zu", "Trifft teils zu", "Trifft selten zu", "Trifft nie zu"]
    },
    {
        text: "Bitte geben Sie an, welche der folgenden Aspekte unseres Services für Sie besonders wichtig sind.",
        type: QuestionTypes.MULTI_SELECT,
        options: ["Preis-Leistungs-Verhältnis", "Produktqualität", "Verfügbarkeit"]
    },
]

const MAX_MULTI_SELECT_OPTIONS = 10;

const SurveyNewQuestionForm = () => {
    const [questions, setQuestions] = useState<Question[]>(initQuestions); // initQuestions
    const [formValues, updateFormValue, resetForm] = useFormState<NewQuestionFormValues>(initFormValues);

    // Separate state for managing options
    const [options, setOptions] = useState<string[]>([""]);  // Start with one option for MULTI_SELECT

    // Function to update an individual option by index
    const updateOption = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    // Function to add more options for MULTI_SELECT
    const addOption = () => {
        if (options.length < 10) {
            setOptions([...options, ""]); // Add empty string for new option
        }
    };

    // Function to remove an option for MULTI_SELECT
    const removeOption = (index: number) => {
        if (options.length > 1) {
            const newOptions = options.filter((_, i) => i !== index);
            setOptions(newOptions);
        }
    };

    const addQuestion = () => {
        if (formValues.text.trim() && formValues.type) {
            setQuestions((prev) => ([
                ...prev,
                {
                    type: formValues.type?.key,
                    text: formValues.text,
                    options: (formValues.type?.key === QuestionTypes.SINGLE_SELECT || formValues.type?.key === QuestionTypes.MULTI_SELECT)
                        ? options.filter(option => option.trim()) // Only add non-empty options
                        : undefined
                } as Question
            ]));
            resetForm();
            setOptions([""]); // Reset options after adding question, start with one option again for MULTI_SELECT
        }
    };

    return (
        <div className="mb-10">
            <div className="bg-gray-100 p-4 rounded mb-7">
                <TextInput
                    name="text"
                    placeholder="Frage"
                    className="col-span-9"
                    value={formValues.text}
                    onChange={(title) => updateFormValue('text', title)}
                />

                <div className="flex items-center gap-4 my-3">
                    <Singleselect
                        name="type"
                        placeholder="Typ"
                        className="col-span-3"
                        options={questionTypes.map(q => ({ key: q.key, label: q.label }))}
                        value={formValues.type}
                        onChange={(type) => {
                            updateFormValue('type', type as SelectOption);
                            if (type?.key === QuestionTypes.SINGLE_SELECT) {
                                setOptions(new Array(5).fill("")); // Always have 5 options for SINGLE_SELECT
                            } else if (type?.key === QuestionTypes.MULTI_SELECT) {
                                setOptions([""]); // Start with 1 option for MULTI_SELECT
                            } else {
                                setOptions([]); // Clear options for TEXT input
                            }
                        }}
                    />
                </div>

                {/* Render options for SINGLE_SELECT or MULTI_SELECT */}
                {(formValues.type?.key === QuestionTypes.SINGLE_SELECT || formValues.type?.key === QuestionTypes.MULTI_SELECT) &&
                    <div className="mb-4">
                        <div className="col-span-8">
                            {options.map((option, i) => (
                                <div className="flex gap-4 items-center mt-4" key={i}>
                                    <div>{i + 1}.</div>
                                    <TextInput
                                        name={`option-${i}`}
                                        placeholder="Antwort"
                                        className="w-full"
                                        value={option}
                                        onChange={(v) => updateOption(i, v)}
                                    />
                                    {/* Show remove button for MULTI_SELECT options */}
                                    {formValues.type?.key === QuestionTypes.MULTI_SELECT && (
                                        <SystemButton
                                            style="primary-negative"
                                            size="small"
                                            onClick={() => removeOption(i)}
                                            disabled={options.length <= 1} // Disable button if only one option remains
                                        >
                                            Entfernen
                                        </SystemButton>
                                    )}
                                </div>
                            ))}

                            {/* Button to add more options for MULTI_SELECT, max 10 */}
                            {formValues.type?.key === QuestionTypes.MULTI_SELECT && options.length < MAX_MULTI_SELECT_OPTIONS && (
                                <button
                                    className="my-3 ml-7 text-sm underline text-gray-500"
                                    onClick={addOption}>
                                    Weitere Option hinzufügen
                                </button>
                            )}
                        </div>
                    </div>
                }

                <SystemButton
                    style="primary-negative"
                    size="small"
                    className="mt-2"
                    onClick={() => addQuestion()}>
                    <Plus size={16} strokeWidth={3} />
                    Frage hinzufügen
                </SystemButton>
            </div>

            <div className="my-2"></div>

            <FormGroup title="Fragebogen">
                <SurveyQuestionsRenderer questions={questions} />
            </FormGroup>
        </div>
    );
};

export default SurveyNewQuestionForm;

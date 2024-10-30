import { useState } from 'preact/hooks';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { AlertCircle, Trash2 } from 'react-feather';
import { getQuestionLabel, Question } from '../SurveyNewQuestionForm';

interface SurveyQuestionsRendererProps {
    questions: Question[];
    removeQuestion: (q: string) => void;
}

const SurveyQuestionsRenderer = ({ questions, removeQuestion }: SurveyQuestionsRendererProps) => {
    const [selectedRadioValues, setSelectedRadioValues] = useState<Record<number, string>>({});
    const [selectedCheckboxValues, setSelectedCheckboxValues] = useState<Record<number, string[]>>({});

    const handleRadioChange = (questionIndex: number, value: string) => {
        setSelectedRadioValues((prev) => ({
            ...prev,
            [questionIndex]: value,
        }));
    };

    const handleCheckboxChange = (questionIndex: number, option: string) => {
        setSelectedCheckboxValues((prev) => {
            const currentValues = prev[questionIndex] || [];
            const isSelected = currentValues.includes(option);

            const updatedValues = isSelected
                ? currentValues.filter((v) => v !== option) 
                : [...currentValues, option]; 

            return {
                ...prev,
                [questionIndex]: updatedValues,
            };
        });
    };

    return (
        <>
            {questions.length > 0 ? (
                <ul>
                    {questions.map((question, index) => (
                        <li key={index} className="mb-3 flex gap-2">
                            <div
                                className="w-8 bg-primary-50 font-semibold text-primary rounded flex items-center justify-center">{index + 1}</div>
                            <div className="relative space-y-2 w-full bg-stone-50 rounded p-4">
                                <p className="font-medium">{question.text}</p>
                                <p className="opacity-50 text-sm">{getQuestionLabel(question.type)}</p>

                                {question.type === 'radio_select_list' && (
                                    <div className="flex gap-6 flex-wrap pt-3 pb-2">
                                        {question.options && question.options.map((option, i) => (
                                            <div key={i} className="field-radiobutton flex gap-2">
                                                <RadioButton
                                                    inputId={`radio-${index}-${i}`}
                                                    name={`question-${index}`}
                                                    value={option}
                                                    checked={selectedRadioValues[index] === option}
                                                    onChange={(e) => handleRadioChange(index, option)}
                                                />
                                                <label className="cursor-pointer"
                                                    htmlFor={`radio-${index}-${i}`}>{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {question.type === 'multiselect' && (
                                    <div className="space-y-3 pt-3 pb-2">
                                        {question.options && question.options.map((option, i) => (
                                            <div key={i} className="field-checkbox flex gap-2">
                                                <Checkbox
                                                    inputId={`checkbox-${index}-${i}`}
                                                    name={`question-${index}`}
                                                    value={option}
                                                    checked={selectedCheckboxValues[index]?.includes(option) as boolean}
                                                    onChange={() => handleCheckboxChange(index, option)}
                                                />
                                                <label className="cursor-pointer"
                                                    htmlFor={`checkbox-${index}-${i}`}>{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <Button rounded
                                    severity="secondary"
                                    onClick={() => removeQuestion(question.text)}
                                    className="custom-tooltip-btn absolute right-3 top-2 text-stone-500 p-1">
                                    <Trash2 size={18} />
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 p-1">
                    <AlertCircle size={16} />
                    Noch keine Fragen hinzugefügt.
                </p>
            )}
        </>
    );
};

export default SurveyQuestionsRenderer;

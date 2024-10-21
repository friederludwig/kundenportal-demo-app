import { useState } from 'preact/hooks';

export const useFormState = <T extends Record<string, any>>(initialState: T) => {
    const [formValues, setFormValues] = useState<T>(initialState);
    const [initialFormValues, setInitialFormValues] = useState<T>(initialState);

    const updateFormValue = <K extends keyof T>(key: K, value: T[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const resetForm = () => {
        setFormValues(initialFormValues);
    };

    const setInitialValues = (newInitialValues: T) => {
        setInitialFormValues(newInitialValues);
        setFormValues(newInitialValues);
    };

    return [formValues, updateFormValue, resetForm, setInitialValues] as const;
};

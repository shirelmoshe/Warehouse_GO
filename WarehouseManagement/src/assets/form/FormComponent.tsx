import React from 'react';
import { useForm, FormValues, FormComponentProps } from './importFormComponent';
import FormField from './FormField';

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit, formFieldsData }) => {
  const { handleSubmit, formState, setValue, getValues } = useForm<FormValues>({
    defaultValues: {},
  });

  const errors = formState.errors || {};

  const handleFieldChange = (fieldName: keyof FormValues, value: string | FileList) => {
    setValue(fieldName as string, value);
  };

  const handleFormSubmit = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {formFieldsData.map((fieldData, index) => (
        <div key={index}>
          {fieldData && (
            <>
              <FormField
                {...fieldData}
                value={getValues()[fieldData.name]}
                onChange={(value) => handleFieldChange(fieldData.name, value)}
              />
              {errors[fieldData.name] && (
                <p>{errors[fieldData.name]?.message}</p>
              )}
            </>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

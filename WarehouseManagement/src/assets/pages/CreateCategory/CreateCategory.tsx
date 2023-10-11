import React from 'react';
import { FormComponent, useMutation, axios, useForm, formFieldsData, FormValues, createCategoryMutation } from './imports';
import { handleSubmit as formSubmit } from '../../form/handleSubmit'; 

type SubmitFunction = (formData: FormValues) => Promise<void>;

const CreateCategory: React.FC = () => {
  const initialValues: FormValues = {
    categoryName: '',
    description: '',
    image: '',
  };

  const { register, formState: { errors } } = useForm<FormValues>({
    defaultValues: initialValues,
  });


  const createCategoryMutationWrapper = (formData: FormValues) => createCategoryMutation(formData);
  const { mutate, isLoading, isError, data, error } = useMutation(createCategoryMutationWrapper);

 
  const handleSubmit: SubmitFunction = async (formData) => {
    await formSubmit(formData, createCategoryMutationWrapper); 
  };

  return (
    <div>
      <h2>Create Category</h2>
      <FormComponent
        onSubmit={handleSubmit}
        formFieldsData={formFieldsData}
        register={register}
        errors={errors}
      />

      {isLoading && <p>Creating category...</p>}
      {isError && (
        <div>
          <p>Error: {axios.isAxiosError(error) ? error.response?.data?.message || 'An error occurred' : 'An error occurred'}</p>
          {axios.isAxiosError(error) && error.response && (
            <div>
              <p>Response Data: {JSON.stringify(error.response.data)}</p>
              <p>Response Status: {error.response.status}</p>
            </div>
          )}
        </div>
      )}
      {data && <p>Category created: {data.categoryName}</p>}
    </div>
  );
};

export default CreateCategory;

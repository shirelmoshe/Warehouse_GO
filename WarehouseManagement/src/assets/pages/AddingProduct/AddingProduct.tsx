
import { FormComponent,formFieldsData, useMutation, axios, AddingProductMutationWrapper, handleSubmit,FormValues} from "./imports"

const AddingProduct: React.FC = () => {
  const { mutate, isLoading, isError, error } = useMutation(AddingProductMutationWrapper);

  const onSubmit = async (formData: FormValues) => {
    await handleSubmit(formData, AddingProductMutationWrapper);
    console.log('Product added successfully');
  };

  return (
    <div>
      <h2>Create Product</h2>
      <FormComponent onSubmit={onSubmit} formFieldsData={formFieldsData} />
      {isLoading && <p>Adding product...</p>}
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
    </div>
  );
};

export default AddingProduct;

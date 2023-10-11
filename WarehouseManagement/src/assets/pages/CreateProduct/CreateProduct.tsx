import { useMutation } from "react-query";
import { CreateProductMutation } from "../../api/CreateProductMutation/CreateProductMutation";
import { FormValues, useForm } from "../../form/importFormComponent";
import { handleSubmit as formSubmit } from '../../form/handleSubmit'; 
import { FormComponent, formFieldsData } from "./importsCreateProduct";
import axios from "axios";

type SubmitFunction = (formData: FormValues) => Promise<void>;

const CreateProduct: React.FC = () => {
  const initialValues: FormValues = {
    product_name: "",
    description: "",
    price: "",
    category: "",
    image:""
  };

  const { register, formState: { errors } } = useForm<FormValues>({
    defaultValues: initialValues,
  });


  const CreateProductMutationWrapper = (formData: FormValues) => CreateProductMutation(formData);
  const { mutate, isLoading, isError, data, error } = useMutation(CreateProductMutationWrapper);

 
  const handleSubmit: SubmitFunction = async (formData) => {
    await formSubmit(formData, CreateProductMutationWrapper); 
  };

  return (
    <div>
      <h2>Create Product</h2>
      <FormComponent
        onSubmit={handleSubmit}
        formFieldsData={formFieldsData}
        register={register}
        errors={errors}
      />

      {isLoading && <p>Creating Product...</p>}
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
      {data && <p>Product created: {data.categoryName}</p>}
    </div>
  );
};

export default CreateProduct;

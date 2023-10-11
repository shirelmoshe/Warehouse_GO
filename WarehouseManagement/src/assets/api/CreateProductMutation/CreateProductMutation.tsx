import { FormValues, AxiosError } from "../../pages/CreateCategory/imports"; 
import axios from "axios";
import { path } from "../path";


export const CreateProductMutation: (formData: FormValues) => Promise<void> = async (formData) => {
  try {
   
    const formattedFormData = {
      ...formData,
    
      price: parseInt(formData.price), 
    };

    const response = await axios.post(path + 'api/products', formattedFormData);

    console.log('Response Data:', response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const typedError = error as AxiosError;
      console.error('Axios Error:', typedError);

      if (typedError.response) {
        console.error('Response Data:', typedError.response.data);
        console.error('Response Status:', typedError.response.status);
      }

      throw typedError;
    } else {
      console.error('Unknown Error:', error);
      throw error;
    }
  }
};
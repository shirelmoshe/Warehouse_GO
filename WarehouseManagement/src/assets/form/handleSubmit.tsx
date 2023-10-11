
import axios, { AxiosError } from 'axios';
import { FormValues } from '../interfaces/FormValues';

type SubmitFunction = (formData: FormValues) => Promise<void>;

export const handleSubmit = async (formData: FormValues, submitFunction: SubmitFunction) => {
  try {
  
    await submitFunction(formData);
    console.log('Category created successfully');
    console.log(formData)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const typedError = error as AxiosError;
      console.error('Axios Error:', typedError);

     
      if (typedError.response?.data) {
        if (typedError.response?.data?.message?.includes('parsing time')) {
          console.error('Date Parsing Error:', typedError.response?.data?.message);
        } else {
          console.error('Axios Error:', typedError.response?.data?.message || 'An error occurred');
        }

        if (typedError.response) {
          console.log('Response Data:', typedError.response.data);
          console.log('Response Status:', typedError.response.status);
        }
      } else {
      
        console.error('Axios Error: No response data available');
      }
    } else {
      console.error('Unknown Error:', error);
    }
  }
};

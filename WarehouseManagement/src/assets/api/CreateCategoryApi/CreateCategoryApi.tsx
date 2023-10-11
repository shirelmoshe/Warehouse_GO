import { FormValues, AxiosError } from "../../pages/CreateCategory/imports"; 
import axios from "axios";
import { path } from "../path";


export const createCategoryMutation = async (data: FormValues) => {
  try {
    const response = await axios.post(path + 'api/categories', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const typedError = error as AxiosError;
      console.error('Axios Error:', typedError);
      throw typedError;
    } else {
      console.error('Unknown Error:', error);
      throw error;
    }
  }
};

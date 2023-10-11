import { schema } from './schema';
import { useMutation } from 'react-query';
import axios from 'axios';
import { formFieldsData } from './formFieldsData';
import { FormComponent } from "../CreateCategory/imports";
import { FormValues as OriginalFormValues } from "../../form/importFormComponent"; 

import { AddingProductMutationWrapper } from '../../api/AddingProductMutation/AddingProductMutation';
import { handleSubmit } from '../../form/handleSubmit';

export type FormValues = OriginalFormValues;

export {
  FormComponent,
  formFieldsData,
  schema,
  useMutation,
  axios,
  AddingProductMutationWrapper,
  handleSubmit,
  FormValues 
};

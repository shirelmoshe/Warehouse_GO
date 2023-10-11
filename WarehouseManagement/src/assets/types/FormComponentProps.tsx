import {  SubmitHandler ,UseFormRegister,FieldErrors} from 'react-hook-form';

import { FormValues } from '../form/importFormComponent';
import { FormFieldProps } from '../interfaces/FormFieldProps';

export type FormComponentProps = {
    onSubmit: SubmitHandler<FormValues>;
    formFieldsData: FormFieldProps[];
    register: UseFormRegister<FormValues>; 
    errors: FieldErrors<FormValues>;
  };
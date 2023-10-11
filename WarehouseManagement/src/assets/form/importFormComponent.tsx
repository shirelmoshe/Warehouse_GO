import { useForm } from 'react-hook-form';
import FormField from './FormField';

import { FormValues as OriginalFormValues } from "../interfaces/FormValues";
import { FormComponentProps as OriginalFormComponentProps } from "../types/FormComponentProps";

export type FormValues = OriginalFormValues;
export type FormComponentProps = OriginalFormComponentProps;

export { useForm, FormField };

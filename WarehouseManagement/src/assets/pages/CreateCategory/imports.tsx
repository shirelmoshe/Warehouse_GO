import { useState } from 'react';
import FormComponent from '../../form/FormComponent';
import { schema } from './schema';
import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { FormValues } from '../../interfaces/FormValues';
import { formFieldsData } from './formFieldsData';
import { createCategoryMutation } from "../../api/CreateCategoryApi/CreateCategoryApi";


export { useState, FormComponent, schema, useMutation, AxiosError, axios, useForm, formFieldsData ,createCategoryMutation};
export type { FormValues }; 

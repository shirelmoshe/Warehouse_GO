import { SchemaType } from "./schema";

export const formFieldsData: FormFieldDataType[] = [
  { label: 'Category Name', name: 'categoryName', type: 'text' },
  { label: 'Description', name: 'description', type: 'text' }, 

  { label: ' Image', name: 'image', type: 'text' },
];

export type FormFieldDataType = {
  label: string;
  name: keyof SchemaType;
  type?: string;
};

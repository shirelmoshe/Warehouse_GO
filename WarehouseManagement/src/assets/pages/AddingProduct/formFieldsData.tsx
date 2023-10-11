import { SchemaType } from "./schema";
export const formFieldsData : FormFieldDataType[] = [
    {
      label: "Expiry Date",
      name: "expiration",
      type: "date",
      labelBackgroundColor: "lightblue",
      labelPadding: "8px",
      inputSize: "1.5rem",
      inputColor: "black",
      inputSecondaryColor: "white"
    },
    {
      label: "quantity",
      name: "quantity",
      type: "number",
      labelBackgroundColor: "lightgreen",
      labelPadding: "8px",
      inputSize: "1.5rem",
      inputColor: "black",
      inputSecondaryColor: "white"
    }
  ];
  export type FormFieldDataType = {
    label: string;
    name: keyof SchemaType;
    type?: string;
  };
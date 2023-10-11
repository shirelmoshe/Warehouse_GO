
  export interface FormFieldProps {
    label: string;
    name: string;
    type?: 'text' | 'file' | 'link';
    value: string | FileList;
    onChange: (value: string | FileList) => void;
  
    inputSize: number;
    inputColor: string;
    inputSecondaryColor: string;
  }
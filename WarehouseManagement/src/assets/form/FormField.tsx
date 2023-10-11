
import { forwardRef, ChangeEvent, InputField, Label,FormFieldProps} from './FormFieldImports';

const FileInput = forwardRef<HTMLInputElement, { name: string; onChange: (files: FileList) => void }>(
  ({ name, onChange }, ref) => (
    <input
      type="file"
      name={name}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.files as FileList)}
      ref={ref}
    />
  )
);

const TextInput = forwardRef<HTMLInputElement, { name: string; value: string; onChange: (value: string) => void }>(
  ({ name, value, onChange }, ref) => (
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      ref={ref}
    />
  )
);

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (props, ref) => {
    const {
      label,
      name,
      type = 'text',
      value,
      onChange,
      inputSize,
      inputColor,
      inputSecondaryColor,
    } = props;

    const getInputComponent = () => {
      switch (type) {
        case 'file':
          return (
            <FileInput
              name={name}
              onChange={(files: FileList) => onChange(files)}
              ref={ref}
            />
          );
        case 'link':
          return (
            <TextInput
              name={name}
              value={value as string}
              onChange={(value: string) => onChange(value)}
              ref={ref}
            />
          );
        default:
          return (
            <InputField
              type={type}
              name={name}
              value={value as string}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
              size={inputSize}
              color={inputColor}
              secondaryColor={inputSecondaryColor}
              ref={ref}
            />
          );
      }
    };

    return (
      <>
        <Label>
          {label}
        </Label>
        {getInputComponent()}
      </>
    );
  }
);

export default FormField;

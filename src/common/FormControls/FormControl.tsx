import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
import {FC} from 'react';
import {FieldValidatorType} from 'utils/validators/validators';
import s from './FormControl.module.css';

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}
const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const TextArea: FC<WrappedFieldProps> = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}>
    <textarea {...input} {...restProps}/>
  </FormControl>;
};
export const Input: FC<WrappedFieldProps> = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}>
    <input {...input} {...restProps}/>
  </FormControl>;
};

export function createField<FormKeysType extends string>(
  placeholder: string | undefined,
  name: FormKeysType,
  validators: Array<FieldValidatorType>,
  component: FC<WrappedFieldProps>,
  props = {},
  text = '') {
  return <div>
    <Field placeholder={placeholder}
           name={name}
           validate={validators}
           component={component}
           {...props}/> {text}
  </div>;
};


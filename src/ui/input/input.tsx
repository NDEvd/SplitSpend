import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './input.module.scss';

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  validation: object;
}

export const InputField: FC<InputFieldProps> = ({ name, label, placeholder, type, validation }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className={styles.inputField}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        {...register(name, validation)}
        placeholder={placeholder}
        type={type}
      />
      <span className={styles.span}>{errors && errors[name] && errors[name].message}</span>
    </div>
  );
}
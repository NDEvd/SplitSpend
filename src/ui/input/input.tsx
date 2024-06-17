import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './input.module.scss';

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  validation: object;
  isNewFriend: boolean;
}

export const InputField: FC<InputFieldProps> = ({ name, label, placeholder, type, validation, isNewFriend }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className={styles.inputField}>
      { !isNewFriend &&
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      }
      <input
        className={ isNewFriend ? styles.inputFriend : styles.input}
        {...register(name, validation)}
        placeholder={placeholder}
        type={type}
      />
      { !isNewFriend &&
        <span className={styles.span}>{errors && errors[name] && errors[name].message}</span>
      }
    </div>
  );
}
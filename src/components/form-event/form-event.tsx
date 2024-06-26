import { FC } from 'react';
import styles from './form-event.module.scss';
import { TEvent } from '../../utils/types';
import { SubmitHandler, useForm, FormProvider  } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from '../../services/store';
import { addEvent } from '../../services/slices/slices';
import { InputField } from '../../ui/input/input';

export const FormEvent: FC = () => {
  const navigate = useNavigate();
  const dispatch =  useDispatch();

  const methods = useForm<TEvent>({
    mode: 'all'
  });

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<TEvent> = (data) => {
    dispatch(addEvent(data));
    navigate(`/friends`);
    reset();
  }

  return (
    <FormProvider {...methods}>
      <form action='' onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputField
          isNewFriend={false}
          name='title'
          label='Название'
          placeholder='Введите название'
          type='text'
          validation={{ required: 'Название обязательное поле' }}
        />

        <label htmlFor='' className={styles.label}>
          Даты
        </label>
        <div className={styles.dates}>
          <InputField
            isNewFriend={false}
            name='dateFrom'
            label=''
            placeholder='Введите дату начала'
            type='text'
            validation={{ required: 'Дата обязательное поле',
              pattern: {
                value: /[0-9]{2}\.[0-9]{2}\.[0-9]{2}/,
                message: 'Введите дату в формате дд.мм.гг',
              }
            }}
          />
          <InputField
            isNewFriend={false}
            name='dateTo'
            label=''
            placeholder='Введите дату окончания'
            type='text'
            validation={
              {pattern: {
              value: /[0-9]{2}\.[0-9]{2}\.[0-9]{2}/,
              message: 'Введите дату в формате дд.мм.гг',
              }}
            }
          />
        </div>

        <button className={styles.button} type='submit'></button>
      </form>
    </FormProvider>
  );
}
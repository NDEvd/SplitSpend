import { FC, useState } from 'react';
import styles from './friends.module.scss';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { FriendItem } from '../../components/friend-item/friend-item';
import { useSelector } from '../../services/store';
import { InputField } from '../../ui/input/input';
import { TFriend } from '../../utils/types';
import { useDispatch } from '../../services/store';
import { addFriend, deleteFriend, updateFriendName } from '../../services/slices/slices';

export const FriendsPage: FC = () => {
  const idSelectedEvent = useSelector(state => state.services.selectedEvent.id);
  const arrayFriends = useSelector(state => state.services.friends).filter((item) => item.idEvent === idSelectedEvent);
  const [isCreateNew, setIsCreateNew ] = useState(false);

  const dispatch =  useDispatch();

  const methods = useForm<TFriend>({
    mode: 'all'
  });

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<TFriend> = (data) => {
    dispatch(addFriend({ name: data.name, idEvent: idSelectedEvent }));
    setIsCreateNew(false);
    reset();
  }

  return (
    <>
      {arrayFriends &&
        <ul className={styles.ul}>
        {arrayFriends.map(( data ) => (
          <FriendItem
            key={data.id}
            name={data.name}
            handleChange={(newName) => dispatch(updateFriendName({ id: data.id, newName }))}
            handleDelete={() => dispatch(deleteFriend(data.id))}
          />
          ))}
          </ul>
        }
        {isCreateNew &&
        <FormProvider {...methods}>
          <form action='' onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <InputField
              name='name'
              label=''
              placeholder='Введите имя'
              type='text'
              validation={{ required: 'Имя обязательное поле' }}
              isNewFriend={true}
            />
            <div className={styles.buttons}>
              <button className={styles.buttonAdd} type='submit'></button>
              <button className={styles.delete} type='reset' onClick={() => reset()}></button>
            </div>
          </form>
        </FormProvider>
       
        }
      <button className={styles.button} onClick={() => setIsCreateNew(true)}></button> 
    </>
  );
};
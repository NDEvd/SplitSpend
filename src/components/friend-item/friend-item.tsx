import { FC, useState } from 'react';
import styles from './friend-item.module.scss';

export type EventItemProps = {
  name: string;
  handleChange: (newName: string) => void;
  handleDelete: () => void;
}

export const FriendItem: FC<EventItemProps> = ({ name, handleChange, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const onSave = () => {
    handleChange(newName);
    setIsEditing(false);
  };

  return (
    <div className={styles.item} >
      {isEditing ? (
        <input 
          className={styles.inputFriend}
          type="text"
          value={newName}
          onChange={onChange}
        />
      ) : (
        <span className={styles.name}>{name}</span>
      )}
      <div className={styles.buttons}>
        {isEditing ? (
          <button className={styles.save} onClick={onSave}></button>
        ) : (
          <button className={styles.change} onClick={() => setIsEditing(true)}></button>
        )}
        <button className={styles.delete} onClick={handleDelete}></button>
      </div>
    </div>
  );
}
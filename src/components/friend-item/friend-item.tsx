import { FC, useState, MouseEventHandler } from 'react';
import styles from './friend-item.module.scss';

export type EventItemProps = {
  name: string;
  // handleChange: MouseEventHandler;
  handleChange: (newName: string) => void;
  handleDelete: MouseEventHandler;
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
          className={styles.input}
          type="text"
          value={newName}
          onChange={onChange}
        />
      ) : (
        <h2 className={styles.name}>{name}</h2>
      )}
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.buttons}>
      {isEditing ? (
          <button className={styles.save} onClick={onSave}></button>
        ) : (
          <button className={styles.change} onClick={() => setIsEditing(true)}></button>
        )}
        {/* <button className={styles.change} onClick={handleChange}></button> */}
        <button className={styles.delete} onClick={handleDelete}></button>
      </div>
    </div>
  );
}
import { FC } from 'react';
import style from './footer.module.scss';
import { Tabs } from '../tabs/tabs';

export type FooterProps = {
  notEmpty: boolean;
  isActiveTab?: string;
  handlClickTab?: (tabId: string) => void | undefined;
}

export const Footer: FC<FooterProps> = ({ notEmpty, isActiveTab, handlClickTab }) => {

  return (
    <div className={style.footer}>
      {notEmpty && <div>
        <Tabs isActiveTab={isActiveTab} handlClickTab={handlClickTab}/>
      </div>}
    </div>
  );
};
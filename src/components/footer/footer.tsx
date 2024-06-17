import { FC } from 'react';
import style from './footer.module.scss';
import { Tabs } from '../tabs/tabs';

export type FooterProps = {
  notEmpty: boolean;
}

export const Footer: FC<FooterProps> = ({ notEmpty }) => {

  return (
    <div className={style.footer}>
      {notEmpty && <div>
        <Tabs />
      </div>}
    </div>
  );
};
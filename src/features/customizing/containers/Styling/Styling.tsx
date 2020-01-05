import React from 'react';

import styles from './Styling.module.css';
import stylesSass from './Styling.module.scss';
import './Styling.css';

type FieldRenderProps = any;

export const Styling: React.FunctionComponent<FieldRenderProps> = props => {
  return (
    <>
      {props.some || null}
      <div className={'footer'}>Footer</div>
      <div className={styles.footer}>Footer</div>
      <div className={stylesSass.footer}>Footer</div>
    </>
  );
};

export default Styling;

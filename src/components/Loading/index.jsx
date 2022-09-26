import React from 'react';
import style from './Loading.module.scss';

function Loading() {
  return (
    <div className={style.loading}>
      <div className={style.loader}></div>
    </div>
    
  );
}

export default Loading;

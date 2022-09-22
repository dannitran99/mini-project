import React from 'react';
import './styles.scss';
import {Typography} from '@material-ui/core';

function ProductItem(props) {
  return (
    <div className="item">
      <img className="imgProduct" src={props.data.image}/>
      <div>
        <Typography>{props.data.title}</Typography>
        <Typography>{props.data.price}</Typography>
      </div>
    </div>
    
  );
}

export default ProductItem;

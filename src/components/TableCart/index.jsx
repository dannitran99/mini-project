import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,IconButton,Paper} from '@material-ui/core';
import {LeftOutlined ,RightOutlined  } from '@ant-design/icons';
import { useDispatch  } from 'react-redux';
import { plusProduct,minusProduct } from '../../redux/actions/createCart';
import style from './Tablecart.module.scss';



export default function CustomizedTables(props) {
  const dispatch = useDispatch();
  return (
    <TableContainer component={Paper}style={{ width: "90%" }}>
      <Table  >
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                {item.title}
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">
                <IconButton onClick={()=>dispatch(minusProduct(item.id))}>
                    <LeftOutlined   />
                </IconButton>
                {item.number}
                <IconButton onClick={()=>dispatch(plusProduct(item.id))}>
                    <RightOutlined   />
                </IconButton>
              </TableCell>
              <TableCell align="right">{item.number*item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

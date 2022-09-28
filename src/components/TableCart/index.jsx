import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,IconButton,Paper} from '@material-ui/core';
import {LeftOutlined ,RightOutlined  } from '@ant-design/icons';
import { useDispatch  } from 'react-redux';
import { plusProduct,minusProduct } from '../../redux/actions/createCart';
import style from './Tablecart.module.scss';



export default function CustomizedTables(props) {
  const dispatch = useDispatch();

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return (
    <TableContainer component={Paper}style={{ width: "90%" }}>
      <Table  >
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="center">Unit Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                {item.title}
              </TableCell>
              <TableCell align="center">{formatter.format(item.price)}</TableCell>
              <TableCell align="center">
                <IconButton onClick={()=>dispatch(minusProduct(item.id))}>
                    <LeftOutlined   />
                </IconButton>
                {item.number}
                <IconButton onClick={()=>dispatch(plusProduct(item.id))}>
                    <RightOutlined   />
                </IconButton>
              </TableCell>
              <TableCell align="center">{formatter.format(item.number*item.price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,IconButton,Paper} from '@material-ui/core';
import {LeftOutlined ,RightOutlined  } from '@ant-design/icons';
import { useDispatch  } from 'react-redux';
import { plusProduct,minusProduct } from '../../redux/actions/createCart';
import './styles.scss';



export default function CustomizedTables(props) {
  const dispatch = useDispatch();
  return (
    <TableContainer component={Paper}>
      <Table className='table' >
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {row.title}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <IconButton onClick={()=>dispatch(minusProduct(row.id))}>
                    <LeftOutlined   />
                </IconButton>
                {row.number}
                <IconButton onClick={()=>dispatch(plusProduct(row.id))}>
                    <RightOutlined   />
                </IconButton>
              </TableCell>
              <TableCell align="right">{row.number*row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

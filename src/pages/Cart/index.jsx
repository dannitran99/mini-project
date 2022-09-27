import {useSelector  } from 'react-redux';
import TableCart from '../../components/TableCart';
import {Typography} from '@material-ui/core';
import style from './Cart.module.scss';

function Cart() {

    const todos = useSelector((state) => state.createCart);
    const price = todos.data.reduce((accumulator, object)=>accumulator + object.price*object.number,0);

    return (
        <div className={style.contentcart}>
            <TableCart data={todos.data}/>
            <Typography>Total: {price}$</Typography>
        </div>
    );
    }

export default Cart;
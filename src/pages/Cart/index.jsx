import {useSelector  } from 'react-redux';
import TableCart from '../../components/TableCart';
import {Typography,Button} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import style from './Cart.module.scss';

function Cart() {

    const navigate = useNavigate();
    const todos = useSelector((state) => state.createCart);
    const price = todos.data.reduce((accumulator, object)=>accumulator + object.price*object.number,0);
    const disablebutton = todos.data.length === 0;
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
    return (
        <div className={style.contentcart}>
            <TableCart data={todos.data}/>
            <div className={style.checkoutDiv}>
                <Typography>Total: {formatter.format(price)}</Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={{marginLeft:"1em"}} 
                    disabled={disablebutton}
                    onClick={() => navigate('/cart/checkout')}
                > 
                    Checkout 
                </Button>
            </div>
        </div>
    );
    }

export default Cart;
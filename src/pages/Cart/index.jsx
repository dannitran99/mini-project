import { useDispatch,useSelector  } from 'react-redux';
import TableCart from '../../components/TableCart';
import './styles.scss';

function Cart() {

    const todos = useSelector((state) => state.createCart);
    return (
        <div className='contentcart'>
            <TableCart data={todos.data}/>
        </div>
    );
    }

export default Cart;

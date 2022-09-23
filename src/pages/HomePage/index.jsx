import React, { useEffect } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { getData } from '../../redux/actions/getProduct';
import { addToCart } from '../../redux/actions/createCart';
import Loading from '../../components/Loading';
import ProductItem from '../../components/ProductItem';
import './styles.scss';
import {
  Grid
} from "@material-ui/core";

function HomePage() {
  
  const todos = useSelector((state) => state.getProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData())
  }, []);

  return (
       <div className='content'>
         {todos.isLoading && <Loading/>}
         <Grid container spacing={1}>
           {todos.data.map((item,index)=>{
            return (
              <Grid
                key={index}
                item
                xs={12}
                md={3}
              >
                <ProductItem data={item} addCart={addToCart}/>
              </Grid>
            );
           })}
         </Grid>
       </div>
  );
}

export default HomePage;

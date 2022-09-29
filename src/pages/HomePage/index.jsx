import React, { useEffect } from 'react';
import {useSelector,useDispatch  } from 'react-redux';
import { addToCart } from '../../redux/actions/createCart';
import { useSearchParams } from 'react-router-dom';
import { getDataByCategory, searchData} from '../../redux/actions/getProduct';
import Loading from '../../components/Loading';
import ProductItem from '../../components/ProductItem';
import style from './Home.module.scss';
import {
  Grid
} from "@material-ui/core";

function HomePage() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.getProduct);
  
  let [searchParams, setSearchParams] = useSearchParams();
  const paramCategory = searchParams.get('name')
  const paramSearch = searchParams.get('keyword')

  const dataProduct= paramCategory || paramSearch? todos.filter:todos.data;
  useEffect(() => {
    paramCategory && dispatch(getDataByCategory(paramCategory))
    paramSearch  && dispatch(searchData(paramSearch))
  }, [paramCategory,paramSearch]);

  return (
       <div className={style.content}>
         {todos.isLoading && <Loading/>}
         <Grid container spacing={1}>
           {dataProduct.map((item,index)=>{
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

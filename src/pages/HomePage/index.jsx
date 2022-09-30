import React, { useEffect,useState } from 'react';
import {useSelector,useDispatch  } from 'react-redux';
import { addToCart } from '../../redux/actions/createCart';
import { useSearchParams } from 'react-router-dom';
import { getDataByCategory, searchData} from '../../redux/actions/getProduct';
import { useNavigate } from "react-router-dom";
import Loading from '../../components/Loading';
import ProductItem from '../../components/ProductItem';
import style from './Home.module.scss';
import {
  Grid, Select, MenuItem
} from "@material-ui/core";
import { Typography } from 'antd';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.getProduct);
  
  let [searchParams, setSearchParams] = useSearchParams();
  const paramCategory = searchParams.get('name');
  const paramSearch = searchParams.get('keyword');
  const paramSort = searchParams.get('sort');
  const dataProduct= paramCategory || paramSearch? todos.filter:todos.data;
  const [selectSort,setSelectSort] = useState('none');
  useEffect(() => {
    paramCategory && dispatch(getDataByCategory(paramCategory))
    paramSearch  && dispatch(searchData(paramSearch))
  }, [paramCategory,paramSearch]);

  const changeSelectSort =(e)=>{
    setSelectSort(e.target.value);
    var searchParam = `?sort=${e.target.value}`;
    if(paramCategory) searchParam = `?name=${paramCategory}&sort=${e.target.value}`;
    if(paramSearch) searchParam = `?keyword=${paramSearch}&sort=${e.target.value}`;
    navigate({
      search: searchParam
    })
  }

  return (
       <div className={style.content}>
         {todos.isLoading && <Loading/>}
         <div className={style.sortPrice}>
           <Typography>Sort by price</Typography>
           <Select
              value={selectSort}
              onChange={changeSelectSort}
            >
              <MenuItem value={'none'}>None</MenuItem>
              <MenuItem value={'asc'}>Ascending</MenuItem>
              <MenuItem value={'desc'}>Descending</MenuItem>
            </Select>
         </div>
         <Grid container spacing={1} >
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

import React, { useEffect } from 'react';
import style from './Detail.module.scss';
import { useDispatch,useSelector  } from 'react-redux';
import { getDetailProduct } from '../../redux/actions/getDetail';
import { addToCart } from '../../redux/actions/createCart';
import { useSearchParams } from 'react-router-dom';
import {Grid, Button} from "@material-ui/core";
import Loading from '../../components/Loading';

function DetailProduct() {  
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.getDetail);
    const itemProduct = productData.data;
    useEffect(() => {
      dispatch(getDetailProduct(searchParams.get('id')))
    }, []);

    const addCart = () =>{
        console.log("here")
        dispatch(addToCart(itemProduct));
    }
 
    return (
       <div className={style.contentDetail}>
            {productData.isLoading && <Loading/>}
            {!productData.isLoading && 
                <article className=''>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} style={{display:"flex",justifyContent:"center"}}>
                             {itemProduct?.image && <img src={itemProduct.image} alt={itemProduct?.title} className={style.image}/>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h2>{itemProduct?.title}</h2>
                            <ul className={style.detailProduct}>
                                <li>Description: {itemProduct.description}</li>
                                <br/>
                                <li>Category: {itemProduct.category}</li>
                                <br/>
                                <li>Rating: {itemProduct.rating?.rate} / Rate number: {itemProduct.rating?.count} </li>
                            </ul>
                            <div className={style.priceDiv}>
                                <h2>{itemProduct?.price}$</h2>
                                <Button variant="contained" color="primary" onClick={addCart}> Buy now </Button>
                            </div>
                        </Grid>
                    </Grid>
                </article>}
       </div>
    );
    }

export default DetailProduct;
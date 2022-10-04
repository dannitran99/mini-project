import React,{useState} from 'react';
import {Typography,Card,CardHeader,CardMedia,CardContent,CardActions,IconButton} from '@material-ui/core';
import {PlusCircleOutlined } from '@ant-design/icons';
import { useDispatch  } from 'react-redux';
import { useNavigate } from "react-router-dom";
import classNames from 'classnames';
import style from './Productitem.module.scss';
function ProductItem(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const itemdata= props.data;

    const addToCart = () =>{
        dispatch(props.addCart(itemdata));
    }

    const [isItemBottom, setIsItemBottom] = useState(false);

    const calculatorHeight =()=>{
        document.getElementById(`content`).clientHeight - document.getElementById(`product-item-${itemdata.id}`).offsetTop 
            > document.getElementById(`card-${itemdata.id}`).clientHeight?
            setIsItemBottom(false):setIsItemBottom(true);
    }
  return (
    <div className={style.itemComponent} id={`product-item-${itemdata.id}`} >
        <div className={style.item} onMouseEnter={calculatorHeight}>
            <img className={style.imgProduct} src={itemdata.image}/>
            <div className={style.infodiv}>
                <Typography>{itemdata.title}</Typography>
                <hr/>
                <Typography>{itemdata.price}$</Typography>
            </div>
        </div>
        <Card className={classNames(style.cardItem,{ [style.itemBottom]: isItemBottom })} id = {`card-${itemdata.id}`} >
            <CardHeader
                title={itemdata.title}
                subheader= {itemdata.category}
            />
            <CardMedia
                
                component="img"
                height="194"
                image={itemdata.image}
                alt={itemdata.title}
                onClick={()=>navigate({
                    pathname: '/detail-product',
                    search: `?id=${itemdata.id}`
                  })}
                style={{cursor:"pointer"}}
            />
            <CardContent>
                <Typography variant="body2" >
                {itemdata.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Typography>{itemdata.price}$</Typography>
                <IconButton aria-label="Add to cart" onClick={addToCart}>
                    <PlusCircleOutlined   />
                </IconButton>
            </CardActions>
        </Card>
    </div>
  );
}

export default ProductItem;

import React from 'react';
import './styles.scss';
import {Typography,Card,CardHeader,CardMedia,CardContent,CardActions,IconButton} from '@material-ui/core';
import {PlusCircleOutlined } from '@ant-design/icons';
import { useDispatch  } from 'react-redux';
function ProductItem(props) {
    const dispatch = useDispatch();

    const addToCart = () =>{
        dispatch(props.addCart(props.data));
    }
  return (
    <div className="itemComponent" >
        <div className="item">
            <img className="imgProduct" src={props.data.image}/>
            <div>
                <Typography>{props.data.title}</Typography>
                <Typography>{props.data.price}$</Typography>
            </div>
        </div>
        <Card sx={{ maxWidth: 345 }} className="cardItem">
            <CardHeader
                title={props.data.title}
                subheader= {props.data.category}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.data.image}
                alt={props.data.title}
            />
            <CardContent>
                <Typography variant="body2" >
                {props.data.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Typography>{props.data.price}$</Typography>
                <IconButton aria-label="Add to cart" onClick={addToCart}>
                    <PlusCircleOutlined   />
                </IconButton>
            </CardActions>
        </Card>
    </div>
  );
}

export default ProductItem;

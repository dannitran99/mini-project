import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {TextField, Button,Grid} from '@material-ui/core';
import style from './Checkout.module.scss';

function Checkout() {
    const navigate = useNavigate();
    const { register, handleSubmit , formState: { errors }} = useForm();

    const submitAction=(data)=>{
        localStorage.setItem('checkout-data', JSON.stringify(data));
        navigate('/cart/checkout/finish')
    }

    return (
        <div className={style.contentCheckout}>
            <form onSubmit={handleSubmit((data) => submitAction(data))} className={style.formCheckout}>
                <Grid container spacing={2} >
                    <Grid item xs={7} >
                        <TextField {...register("firstName", {
                                required: 'First name required',
                                pattern: {
                                    value: /^[a-z ,.'-]+$/i,
                                    message: 'Wrong format' 
                                }
                            })}
                            placeholder="First name" 
                            error={typeof errors.firstName != "undefined"}
                            helperText={errors.firstName?.message}
                        />
                    </Grid>
                    <Grid item xs={5}  >
                        <TextField {...register("lastName",{
                            required: 'Last name required',
                            pattern: {
                                value: /^[a-z ,.'-]+$/i,
                                message: 'Wrong format' 
                            }
                        })} 
                        placeholder="Last name"
                        error={typeof errors.lastName != "undefined"}
                        helperText={errors.lastName?.message}
                    />
                    </Grid>
                </Grid>
                <TextField {...register("address",{
                        required: 'Address required'
                    })} 
                    placeholder="Address" 
                    error={typeof errors.address != "undefined"}
                    helperText={errors.address?.message}
                />
                <TextField {...register("phone",{
                        required: 'Phone required',
                        pattern: {
                            value: /[0-9]{10}/,
                            message: 'Phone number is not exist' // JS only: <p>error message</p> TS only support string
                        }
                    })}
                    placeholder="Phone number" 
                    error={typeof errors.phone != "undefined"}
                    helperText={errors.phone?.message}
                />
                <Button type="submit" color="primary" variant="outlined">Submit</Button>
            </form>
        </div>
    );
    }

export default Checkout;
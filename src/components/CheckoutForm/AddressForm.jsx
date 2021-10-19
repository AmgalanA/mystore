import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'

import { commerce } from '../../lib/commerce';
import useStyles from './styles'

import FormInput from './CustomTextField';

const AddressForm = ({ checkoutToken, next, nextStep, timeout }) => {
    const classes = useStyles();

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}))
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name}))
    const options = shippingOptions.map((shippingOption) => ({id:shippingOption.id, label: `${shippingOption.desctription}  - (${shippingOption.price.formatted_with_symbol})`}));

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);

    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null ) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })
        setShippingOptions(options);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ww4lwkp', 'template_9v0urr9', e.target, 'user_s1ZR6AAHjrvAWtt5N80tS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

        timeout()
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);

    useEffect(() => {
        if(shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision]);

    return (
        <>
            <Typography style={{padding:'0 5px'}} variant="h6" gutterBottom>
                Shipping Adress
            </Typography>
            <FormProvider {...methods}>
                <form onSubmit={(e) => {
                    sendEmail(e)
                    //methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption },e))
                    nextStep()
                    }}>

                    <Grid container spacing={3}>
                            {checkoutToken.live.line_items.map(product => (
                                <div>
                                    <ListItem key={product.name}>
                                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                                    </ListItem>
                                    <input className={classes.inputProduct} value={product.name} name="product_name" />
                                    <input className={classes.inputProduct} value={product.quantity} name="product_quantity" />
                                    <input className={classes.inputProduct} value={product.line_total.formatted_with_symbol} name="product_price" />
                                </div>
                            ))} 
                        <Grid item sm={6} xs={12}>
                            <Typography>Имя</Typography>
                            <input type="text" className={classes.input} required name="first_name" label="First name" />
                        </Grid>
                        <Grid item sm={6} xs={12}> 
                            <Typography>Фамилия</Typography>
                            <input type="text" className={classes.input} required name="second_name" label="Second name" />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Typography>Email</Typography>
                            <input type="email" className={classes.input} required name="email" label="Email" />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Typography>Куда доставить?</Typography>
                            <input type="adress" className={classes.input} required name="adress" label="Adress" />
                        </Grid>

                        {/* <FormInput required name="first_name" label="First name" />
                        <FormInput required name="second_name" label="Second name" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="adress" label="Adress" /> */}
                        
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            {/*
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                             
                            
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => {
                                    if(subdivision.label === 'Buryatiya, Respublika') return (
                                        <MenuItem key={subdivision.id} value={subdivision.id}>
                                            {subdivision.label}
                                        </MenuItem>
                                    )
                                    }  
                                )}
                            </Select>
                        </Grid> */}
                    </Grid>
                    <br />
                    <div style={{ display:'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                        <Button type="submit" color="primary" variant="contained">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
}

export default AddressForm

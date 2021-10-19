import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

import Product from './Product/Product';
import ShowProduct from './ShowProduct/ShowProduct';

import useStyles from './styles'

const Products = ({ onSetProductId, cart, products, onAddToCart, query, isTyping, onSetIsTyping  }) => {
    const classes = useStyles();

    return (
        <main className={classes.content} >
            <div className={classes.toolbar} />
            <Grid 
            className={classes.mainGrid} container justify="center" spacing={4}>
                {products.filter((product) => { 
                    if (query === "") {
                        return product;
                    } else if ((product.name.toLowerCase()).includes(query.toLowerCase())
                    || product.description.toLowerCase().includes(query.toLowerCase)) {
                        return product;
                    }
                }
                ).map((product) => 
                (<>
                    <Grid
                        item 
                        key={product.id} 
                        xs={6} sm={6} md={4} lg={3}
                    >
                        <Product 
                            onSetProductId={onSetProductId} 
                            cart={cart} 
                            product={product} 
                            onAddToCart={onAddToCart} 
                            isTyping={isTyping}
                            onSetIsTyping={onSetIsTyping}
                        /> 
                    </Grid> 
                </>)      
                )}
            </Grid>
        </main>
    )
}

export default Products
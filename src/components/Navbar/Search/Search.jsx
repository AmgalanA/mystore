import React, { useState } from 'react'
import { Container, FormControl, Typography } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import searchIcon from '../../../assets/img/searchIcon.png';

import useStyles from './styles';

import { useLocation } from 'react-router-dom';

const Search = ({ onSetQuery, onSetIsShowingProduct, onHandleTyping, products, query, onSetProductId, isShowingAvailableProducts, setIsShowingAvailableProducts }) => {
    const classes = useStyles();
    const location = useLocation();

    //const [isShowingAvailableProducts, setIsShowingAvailableProducts] = useState(false);
    
    const timeout = () => {
        setTimeout(() => {
            setIsShowingAvailableProducts(false);
        },6000)
    }

    const handleIsShowingAvailableProducts = () => {
        setIsShowingAvailableProducts(true)

        timeout();
    }

    return (
        <>
            <FormControl onClick={(e) => e.stopPropagation()} className={classes.form}>
                <Container className={classes.container}>
                    {/*
                    {location.pathname === '/' ? (
                        <div component={Link} to="/" className={classes.mainPageTitle}>
                            <Typography>Главная страница</Typography>
                        </div>
                    ) : (
                        ''
                    )}
                    */}
                    {/*<SearchIcon className={classes.searchIcon} /> */}
                    <img src={searchIcon} alt="searchIcon" className={classes.searchIcon} />
                    <input className={classes.textField} 
                        placeholder="Искать на FREID.COM"
                        onChange={(e) => {
                            onSetQuery(e.target.value)
                            onSetIsShowingProduct(false)
                            onHandleTyping()
                            handleIsShowingAvailableProducts()
                        }
                    }
                    />
                    {isShowingAvailableProducts ? (
                        <Container onClickOutsideThisElement={() => setIsShowingAvailableProducts(false)}
                        className={classes.bookOptionsContainer}>
                            {products.filter((product) => { 
                                if (query === "") {
                                    return product;
                                } else if ((product.name.toLowerCase()).includes(query.toLowerCase())
                                || product.description.toLowerCase().includes(query.toLowerCase)) {
                                    return product;
                                }
                            }
                            ).map((product) => (
                                <>
                                {product ? 
                                <Typography onClick={() => onSetProductId(product.id)} 
                                className={classes.availableProductName} variant="body1">{product.name}</Typography>
                                : 'Nothing'}
                                </>
                            )
                            )}
                        </Container>
                    ) : ''}  
                    
                </Container>
            </FormControl>
        </>
        
    )
}

export default Search;

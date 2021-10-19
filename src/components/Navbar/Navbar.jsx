import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, CardMedia } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Image from 'material-ui-image';
import { Link, useLocation } from 'react-router-dom';
import shoppingCartIcon from '../../assets/img/shoppingCart.png';

import useStyles from './styles';

import Search from './Search/Search';
import Header from './Header/Header';

const Navbar = ({ totalItems, products, onSetQuery, setIsShowingProduct, onHandleTyping, query, onSetProductId, isShowingProduct, isShowingAvailableProducts, setIsShowingAvailableProducts }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                    <>
                    <Header />
                        {/* <Typography variant="body1" className={classes.quoteContainer}>
                            " Мир был настолько переполнен войнами,
                            болью и страданиями, а ежедневная рутина трудовых будней была 
                            настолько утомительна и зачастую несправедлива, что, возможно, как я думал, 
                            единственным ответом было бы найти какую-нибудь сногсшибательную, невероятную 
                            мечту, которая показалась бы стоящей, способной принести радость и хорошо вписаться 
                            в ваши жизненные планы, после чего преследовать ее, как спортсмен, без колебаний и 
                            сомнений, прямодушно, с целеустремленностью и преданностью. "
                            - Фил Найт, основатель Nike.
                        </Typography> */}
                    <Toolbar className={classes.toolbar} style={{color:!isShowingProduct ? 'rgba(46,17,4)' : 'inherit'}}>
                        
                        {isShowingProduct | location.pathname === '/cart' && 
                        <Typography 
                            variant="h6" 
                            className={classes.title} 
                            color="inherit"
                            component={Link}
                            to="/"
                            onClick={() => setIsShowingProduct(false)}
                        >
                            {/* <img src='' alt="Главная страница" height="25px" className={classes.image} /> */}
                            Вернуться на главную страницу
                        </Typography>}
                            {location.pathname === '/' && (
                                
                                
                                <Toolbar className={classes.toolbarForXS}>
                                <Search 
                                    products={products} 
                                    onSetQuery={onSetQuery}
                                    onSetIsShowingProduct={setIsShowingProduct}
                                    onHandleTyping={onHandleTyping}
                                    query={query}
                                    onSetProductId={onSetProductId}
                                    isShowingAvailableProducts={isShowingAvailableProducts}
                                    setIsShowingAvailableProducts={setIsShowingAvailableProducts}
                                />
                                
                                <div className={classes.button}>
                                    <IconButton 
                                    onClick={() => setIsShowingProduct(false)}
                                    component={Link} 
                                    to="/cart" 
                                    aria-label="Show cart Items" 
                                    color="inherit"
                                    className={classes.iconButton}>
                                        <Badge badgeContent={totalItems} color="secondary">
                                            <ShoppingCart style={{width:'35px',height:'35px'}} />
                                            {/* <Image
                                            style={{width:'100%',height:'100%'}} 
                                                src={shoppingCartIcon}
                                            /> */}
                                        </Badge>
                                    </IconButton>
                                </div>
                                </Toolbar>
                                
                            )}
                    </Toolbar>
                    </>
            </AppBar>
        </>
    )
}

export default Navbar

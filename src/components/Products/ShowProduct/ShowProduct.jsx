import React, { useEffect, useState } from 'react'
import { Typography, Grid, Card, CardContent, CardActions, IconButton, Badge } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { AddShoppingCart } from '@material-ui/icons';
import CommentSection from './CommentSection/CommentSection';

import useStyles from './styles';

const ShowProduct = ({ chosenProduct, setIsShowingProduct, onAddToCart }) => {
    const classes = useStyles();

    const [isWatchingComments, setIsWatchingComments] = useState(false);
    const [productId, setProductId] = useState('');

    const handleClick = (id) => {
        setIsWatchingComments(!isWatchingComments)

        setProductId(id)
    }

    const ShowMore = ({weight}) => {
        return (
            <div className={classes.showMoreContainer}>
                <div className={classes.weightContainer}>
                    <Typography variant="h6">Weight: {weight}</Typography>  
                </div>
            </div>
        )
    }

    //const [isShowingMore, setIsShowingMore] = useState(true);
    if(chosenProduct) return (
        <>
            {chosenProduct.map((product) => (
                <>
                <Card className={classes.cardContainer}>
                <Grid className={classes.gridContainer} spacing={4} container>
                    <Grid className={classes.firstColumnContainer} item xs={12} sm={6} md={6}>
                        <Card className={classes.imageContainer}>
                            <img className={classes.productImage} src={product.media.source}/>
                        </Card>
                        <Typography className={classes.priceText} variant="h5">{product.price.formatted_with_symbol}</Typography>                       
                    </Grid>
                    <Grid className={classes.infoContainer} item xs={12} sm={6} md={6}>
                        <Card className={classes.nameContainer}>
                            <div >
                                <Typography variant="h6" color="textPrimary">{product.name}</Typography>
                            </div>
                        </Card>
                        <Card className={classes.descriptionContainer}>
                            <div>
                                <Typography variant="h6" dangerouslySetInnerHTML={{ __html: product.description }}></Typography>
                            </div>
                            <CardActions>
                                <IconButton className={classes.putInCart} onClick={(e) => onAddToCart(e, product.id, 1)}>
                                   <Typography variant="body1">Положить в корзину</Typography> 
                                </IconButton>
                                <IconButton className={classes.cartButtonContainer} onClick={(e) => onAddToCart(e, product.id, 1)}>
                                    <Badge>
                                        <AddShoppingCart />
                                    </Badge>
                                </IconButton>
                            </CardActions>
                        </Card>
                        
                        
                        {/*
                        <div className={classes.additionalInfoContainer} onClick={() => setIsShowingMore(!isShowingMore)}>
                        <Typography variant="h6">Доп инфо</Typography>
                        {isShowingMore ? (
                            <ExpandMoreIcon className={classes.expandMoreIcon} />
                            ) : (
                                <>
                                <ExpandLessIcon className={classes.expandMoreIcon} />
                                </>
                                )}
                                </div>
                                
                                {isShowingMore ? (
                                    <ShowMore weight={20}/>
                                    ) : null}
                                */}
                        
                    </Grid>
                </Grid>
                </Card>
                <Typography className={classes.showComments} 
                onClick={() => handleClick(product.id)}>Посмотреть комментарии</Typography>
                {isWatchingComments && 
                (<CommentSection 
                    setIsShowingProduct={setIsShowingProduct} 
                    productId={productId}    
                    />)
                }</>
            ))}
        </>
    )
}

export default ShowProduct

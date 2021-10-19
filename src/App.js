import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar, Cart, Checkout, ShowProduct, Footer, Register } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState('');
    const [query, setQuery] = useState('');
    const [isShowingProduct,setIsShowingProduct] = useState(false);
    const [chosenProduct, setChosenProduct] = useState({});
    const [isTyping, setIsTyping] = useState(false);
    const [isShowingAvailableProducts, setIsShowingAvailableProducts] = useState(false);

    const dispatch = useDispatch();

    const fetchProducts = async() => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
    }

    const fetchCard = async () => {
        const data = await commerce.cart.retrieve();

        setCart(data)
    }

    const handleAddToCart = async (e,productId, quantity) => {
        e.stopPropagation();
        const { cart } = await commerce.cart.add(productId, quantity);
    
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
    
        setCart(cart);
    }

    const handleEmptyCart = async() => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    const refreshCart = async() => {
        const { newCart } = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
        
            setOrder(incomingOrder);
            refreshCart();
        } catch(error) {
            setErrorMessage(error.data.error.message);
        }
    }

    const onSetQuery = (query) => {
        setQuery(query);
    }

    const onSetProductId = (id) => {
        setIsShowingProduct(true);
        setChosenProduct(products.filter((product) => product.id === id));
    }

    const timeout = () => {
        setTimeout(() => {
            setIsTyping(false);
        }, 1500)
    }

    const handleTyping = () => {
        setIsTyping(true);

        timeout();
    }

    const handleInitialAuthState = () => {
        onAuthStateChanged((auth), (user) => {
            if(user) {
                // user is logged in
                dispatch(login({
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    photoUrl: user.photoURL,
                }));
            } else {
                // user is logged out
                dispatch(logout());
            }
        })
    }

    useEffect(() => {
        fetchProducts();
        fetchCard();
        handleInitialAuthState();
    }, []);
{/*
if(isShowingProduct) return (
        <>
            <ShowProduct 
            chosenProduct={chosenProduct} 
            setIsShowingProduct={setIsShowingProduct}/>
        </>
    )
*/}
    

    return (
        <div style={{display:'flex', flexDirection:'column', height:'screen'}}>
        <Router>
            <div onClick={() => setIsShowingAvailableProducts(false)}>
                <Navbar 
                    totalItems={cart.total_items} 
                    products={products} 
                    onSetQuery={onSetQuery}
                    setIsShowingProduct={setIsShowingProduct}
                    onHandleTyping={handleTyping}
                    query={query}
                    onSetProductId={onSetProductId}
                    isShowingProduct={isShowingProduct}
                    isShowingAvailableProducts={isShowingAvailableProducts}
                    setIsShowingAvailableProducts={setIsShowingAvailableProducts}
                />
                {isShowingProduct ? (
                    <ShowProduct 
                        chosenProduct={chosenProduct} 
                        isShowingProduct={isShowingProduct}
                        onAddToCart={handleAddToCart}
                        setIsShowingProduct={setIsShowingProduct}
                    />
                ) : (
                    <Switch>
                    <Route exact path="/">
                        <Products 
                            onSetProductId={onSetProductId}
                            cart={cart} products={products} 
                            onAddToCart={handleAddToCart} 
                            query={query} 
                            isTyping={isTyping}
                            onSetIsTyping={setIsTyping} 
                        />
                    </Route>

                    <Route exact path="/cart">
                        <Cart 
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout 
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}
                            refreshCart={refreshCart}
                        />
                   </Route>
                   <Router exact path='/register'>
                        <Register 
                            setIsShowingProduct={setIsShowingProduct}
                        />
                   </Router>
                </Switch>
                )}
            {/* <Footer />     */}
            </div> 
        </Router>
        </div>
    )
}

export default App

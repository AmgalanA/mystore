import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'

import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import {commerce} from '../../../lib/commerce';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

//const steps = ['Shipping address', 'Payment details'];
const steps = ['Shipping address'];
const Checkout = ({ cart,order,onCaptureCheckout, error, refreshCart }) => {
    const classes = useStyles();
    const history = useHistory();
    const [shippingData, setShippingData] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if(cart.id){ 
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                
                setCheckoutToken(token);
            } catch (error) {
                history.push('/');
            }
        }
    
        generateToken();
    }    
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ww4lwkp', 'template_1n0lcrm', e.target, 'user_s1ZR6AAHjrvAWtt5N80tS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    const next = (data, e) => {
        setShippingData(data);

        sendEmail(e)
        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000)
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
                <Divider className={classes.divider}></Divider>
                <Typography variant="subtitle2">Order ref: {order.customer.reference}</Typography>
                <br />
                <Button component={Link} to='/' variant="outlined" type="button">Back to home</Button>
            </div>
        </>
    ) : isFinished ? (
        <div>
            <Typography variant="h5">Thank you for your purchase</Typography>
            <Divider className={classes.divider}></Divider>
            <br />
            <Button component={Link} to='/' variant="outlined" type="button">Back to home</Button>
        </div>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if(error) {
        <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} to='/' variant="outlined" type="button">Back to home</Button>
        </>
    }

    const Form = () => activeStep === 0 
    ? <AddressForm 
        nextStep={nextStep} 
        next={next} 
        checkoutToken={checkoutToken}
        timeout={timeout}
        refreshCart={refreshCart}
    /> 
    : <PaymentForm 
        shippingData={shippingData} 
        checkoutToken={checkoutToken} 
        backStep={backStep} 
        onCaptureCheckout={onCaptureCheckout} 
        nextStep={nextStep} 
        timeout={timeout} 
    /> 
    return (
        <>
        <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography style={{marginTop:'50px'}} variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {/* {activeStep === steps.length ? <Confirmation /> 
                    : checkoutToken && <Form />} */}
                    {activeStep === steps.length ? <Confirmation /> 
                    : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout

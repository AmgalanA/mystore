import React, { useState, useRef } from 'react'
import locationIcon from '../../../assets/img/locationIcon.png';
import useStyles from './style';
import { Typography, Toolbar, ButtonGroup, Button } from '@material-ui/core';
import authIcon1 from '../../../assets/img/authIcon1.png';
import authIcon2 from '../../../assets/img/authIcon2.png';
import Logo from '../../../assets/img/logo.png'

const Header = () => {
    const classes = useStyles();

    const [isSignup, setIsSignUp] = useState(true);
    const [isShowingBlog, setIsShowingBlog] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Toolbar className={classes.container}>
            <div className={classes.locationContainer}>
                <img className={classes.locationIcon} src={locationIcon} width={35} height={35}/>
                <Typography variant="body1" className={classes.ulanUde}>Улан-Удэ</Typography>
            </div>
            <div className={classes.titleContainer}>
                <Typography className={classes.name} variant="h6">Freid.com</Typography>
                {/* <img className={classes.logo} src={Logo} alt="Freid.com" width={600} height={300}/> */}
                <Typography gutterBottom className={classes.title} variant="h6">Онлайн-магазин продажи книг о финансовой грамотности</Typography>
            </div>
            {/*
            <div className={classes.authContainer}>
                <img 
                    className={classes.signinIcon} 
                    onClick={(prevIsSignUp) => {
                        
                        auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
                        setIsSignUp(!prevIsSignUp)
                        
                        
                        setIsShowingBlog(!isShowingBlog);
                        }
                    } 
                    src={authIcon2}
                    alt="Authentication Icon" width={50} height={50}
                />
                
                
                src={isSignup ? authIcon2 : authIcon1} 
                <Typography className={classes.enter}>
                    {isSignup ? '' : 'Войти'}
                </Typography>
                
                {isShowingBlog && (
                    <div className={classes.registerBlog}>

                        <ButtonGroup>
                            <Button
                            disabled={isLogin}
                            >
                                {isLogin ? 'You are not logged in' : 'Log out'}
                            </Button>
                            <Button
                            disabled={!isLogin}
                            onClick={(prevIsSignUp) => {
                                setIsSignUp(!prevIsSignUp)
                                setIsLogin(false);
                            }}>Log In</Button>
                        </ButtonGroup>
                    </div>
                )}
                
            </div>
            */}
        </Toolbar>
    )
}

export default Header

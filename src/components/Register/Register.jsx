import React, { useState } from 'react'
import useStyles from './styles';
import { Typography, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useDispatch } from 'react-redux';
import { login, selectUser } from '../../features/userSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getAuth, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoogleAuthProvider } from "firebase/auth";
import Google from '../../../src/assets/img/google.png';

const Register = ({ setIsShowingProduct }) => {
    const classes = useStyles();

    const auth = getAuth();

    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        if(!name) {
            alert("Please enter a full name.");
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: auth.currentUser.email,
                    uid: auth.currentUser.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))              
            })
           .then(() => setIsShowingProduct(true))
        }).catch(error => {
            alert(error)
        });
        
    }

    const loginToWebsite = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profilePic: userAuth.user.photoURL,
            }))
        })
        .then(() => {
           setIsShowingProduct(true); 
        })
        .catch(error => {
            alert(error);
        });
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    return (
        <>
            <div className={classes.backContainer}>
                <ArrowBackIcon className={classes.backIcon} />
                <Typography component={Link} to="/" onClick={() => setIsShowingProduct(true)} style={{fontSize:'20px', cursor: 'pointer'}} variant="h6">?????????? ???? FREID.COM</Typography>
            </div>
            <Grid container lg={12} className={classes.register} style={{marginTop:'200px'}}>
                <div className={classes.formContainer}>
                    <Typography className={classes.registerText} variant="h5">??????????????????????</Typography>
                    <form>
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="?????????????? ???????? ??????" type="text" />

                        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="??????????????????????" type="text" />

                        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="?????? e-mail" type="email" />

                        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="????????????" type="password" />

                        <button onClick={loginToWebsite} type="submit">Sign In</button>
                    </form>

                    <p className={classes.registerContainer}>???? ???? ?????????? FREID.COM?{" "}
                        <span onClick={register}>
                            ????????????????????????????????????
                        </span>
                        <p className={classes.registerContainerNote}>
                            ????????????????????:
                            ?????????????? ???????? ???????????? 
                            ?? ?????? <br />
                            ????????????, ???????? ???? ???? ????????????????????????????????,
                            <br />
                            ?????????? ???????????????? ????????????
                        </p>
                    </p>
                    <span className={classes.registerContainerOr}>??????</span>  
                    <Typography className={classes.registerContainerGoogleAuth} 
                    onClick={() => {
                       signInWithGoogle().then(user => {
                           dispatch(login(user.user));
                           setIsShowingProduct(true);
                       }).catch(error => console.log(error));
                    }}   
                    >
                    ?????????????????????????????????? ??????????<br />
                    Google ??????????????</Typography>
                </div>
            </Grid>
        </>
    )
}

export default Register

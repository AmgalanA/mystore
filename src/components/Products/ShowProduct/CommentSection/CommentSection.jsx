import React, { useState, useEffect } from 'react'
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Comment from './Comment/Comment';
import { auth, db } from '../../../../firebase';
import { addDoc, getDocs, serverTimestamp, query, collection, orderBy } from '@firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../../features/userSlice';
import CreateIcon from '@material-ui/icons/Create';
import { signOut } from '@firebase/auth';

const CommentSection = ({ setIsShowingProduct, productId }) => {
    const classes = useStyles();

    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    useEffect( async () => {
        const querySnapshot = await 
        getDocs(query(collection(db,`comments${productId}`), 
        orderBy('timestamp', 'desc')));
        setComments(querySnapshot.docs.map((doc) => (
            {
                id: doc.id,
                data: doc.data()
            }
        )));
    },[comments])

    const sendComment = async (e) => {
        if(commentText !== '') {
            e.preventDefault();

            await addDoc(collection(db, `comments${productId}`), {
                name: user.displayName,
                message: commentText,
                photoUrl: user.photoUrl || '',
                timestamp: serverTimestamp(),
            })

            setCommentText('');
        }
    }

    const handleLogout = () => {
        dispatch(logout());
        signOut(auth);
    }

    return (
        <div className={classes.commentSection}>
            {!user && 
            <Typography className={classes.commentSectionSignIn} onClick={() => setIsShowingProduct(false)} component={Link} to="/register">
                To leave a comment, please {' '} 
                <span  className={classes.registerText}>
                    register or sign in in account
                </span>
                {' '}
            </Typography>
            }
            
            <div>
                {user && 
                <form className={classes.formContainer}>
                    <div className={classes.formInputContainer}>
                        <input placeholder="Оставьте свой комментарий на FREID.COM" value={commentText} onChange={e => setCommentText(e.target.value)} type="text" />
                        <CreateIcon />
                    </div>

                    <button style={{cursor: !commentText ? 'default' : 'pointer'}} disabled={!commentText} className={classes.formButton} onClick={sendComment} type="submit">Оставить комментарий</button>
                    <Typography style={{cursor: 'pointer'}} onClick={handleLogout} variant="h6">Logout</Typography>
                </form>
                }

                {comments.map(({id, data: { name, message, photoUrl, timestamp }}) =>( 
                    <Comment 
                        key={id} 
                        name={name} 
                        message={message} 
                        photoUrl={photoUrl}
                        timestamp={timestamp}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default CommentSection

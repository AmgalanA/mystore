import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    commentSection: {
        width: '100%',
        margin:'0',
    },
    registerText: {
        color: 'blue',
        cursor: 'pointer',
    },
    formContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    formInputContainer: {
        padding: '15px',
        borderRadius: '25px',
        margin: '40px 0 20px 0',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        '& input': {
            outline: 'none',
            border: 'none',
            flexGrow: '1',
        }
    },
    formButton: {
        backgroundColor: 'rgba(173,144,85)',
        border: 'none',
        borderRadius: '14px',
        padding: '15px',
        fontSize: '20px',
        letterSpacing: '0.7px',
        margin:'0 auto 20px 0',
        cursor: 'pointer',

        '&:hover': {
            opacity: '0.9',
            backgroundColor: 'rgba(283,144,85)',
        }
    },
    commentSectionSignIn: {
        color: 'black',
        textDecoration: 'none',
    },
    registerText: {
    }
}))
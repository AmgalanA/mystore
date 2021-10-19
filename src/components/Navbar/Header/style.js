import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    container: {
        borderBottom: '2px solid rgba(173,144,85)',
        //background:'rgba(173,144,85)',
        //background:'rgba(46,17,4)',
        color:'rgba(173,144,85)',
        padding:'10px',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center'
        }
    },
    locationContainer: {
        display:'flex',
    },
    locationIcon: {
        width:'50px',
        height:'50px',
        margin:'auto 0',
        [theme.breakpoints.down('xs')]: {
            display:'none',
        },
    },
    ulanUde: {
        margin:'auto 0 auto 10px',
        whiteSpace:'nowrap',
        fontSize:'25px',
        [theme.breakpoints.down('xs')]: {
            margin:'0 auto',
            fontWeight: 'bold',
            letterSpacing: '0.2em',
        }
    },
    titleContainer: {
        height:'100%',
        textAlign:'center',
        margin:'0 auto',
        flexGrow:'1',
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            display:'none',
        } 
    },
    logo: {

    },
    name: {
        textTransform:'uppercase',
        letterSpacing: '8px',
        fontFamily:'Roboto',
        fontWeight:'bold',
        padding:'10px',
        color:'e85d04',
    },
    authContainer: {
        textAlign:'center',
    },
    signinIcon: {
        cursor: 'pointer',
    },
    enter: {
        marginTop:'-10px',
    },
    registerBlog: {
        position: 'fixed',
        right: '25px',
        zIndex:'10',
        padding:'10px',
        background:'gray',
    }

}))
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    cardContainer: {
        marginTop:'170px',
        paddingBottom:'30px',
    },
    gridContainer: {
        padding:'0 20px 0 0',
        [theme.breakpoints.down('sm')]: {
            padding:'0 20px',
        },
    },
    firstColumnContainer: {
        textAlign:'center',
    },
    imageContainer: {
        padding:'30px 0',
        margin:'30px 0px 0px 20px',
    },
    productImage: {
        maxWidth: '60%',
        maxHeight:'60%',
        [theme.breakpoints.up('lg')]: {
            maxWidth:'40%',
            maxHeight:'40%',
        }
    },
    priceText: {
        marginTop:'50px',
        fontFamily: 'PT Sans Narrow, sans-serif;',
        letterSpacing:'1px',
    },
    nameContainer: {
        marginTop:'30px',
        padding:'20px',
        textAlign:'start',
        boxShadow:'none',
    },
    descriptionContainer: {
        marginTop:'10px',
        padding:'0 20px',
        boxShadow:'none',
    },
    additionalInfoContainer: {
        display:'flex',
        alignItems:'center',
        cursor: 'pointer',
    },
    expandMoreIcon: {
        marginLeft:'auto',
    },
    showMoreContainer: {
        display:'flex',
        flexDirection: 'column',
        alignItems:'end',
    },
    putInCart: {
        background:'rgba(221,143,46)',
        padding:'10px',
        borderRadius:'5px',
        height:'100%',
        cursor:'pointer',
        color:'black',
    },
    cartButtonContainer: {
        background:'rgba(221,143,46)',
        borderRadius:'5px',
        height:'100%',
    },
    showComments: {
        cursor: 'pointer', 
        backgroundColor: 'orange',
        borderRadius: '8px',
        margin:'10px auto',
        padding:'10px',
    }
}))
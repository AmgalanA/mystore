import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection:'column',
    margin:'10px',
    [theme.breakpoints.down('md')]: {
      
    }
  },
  cardPrice: {
    textAlign:'center',
    fontSize:'1.7em',
    [theme.breakpoints.down('md')]: {
      marginBottom:'20px',
    }
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
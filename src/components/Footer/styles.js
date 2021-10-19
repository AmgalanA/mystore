import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    background:'rgba(173,144,85)',
    flexGrow:1,
  },
  accountsContainer: {
    display:'flex',
    alingItems:'center',
    margin:'10px 0 0 0'
  },
  accountsText: {
    fontSize:'20px',
    margin:'auto 0 auto 10px',
    border:'1px solid black',
  },
  accountsImage: {
    border:'1px solid black',
    margin:'auto 0',
  },
}));
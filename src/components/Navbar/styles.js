import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    background:'rgba(46,17,4)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  quoteContainer: {
    color:'inherit',
    background:'rgba(173,144,85)',
    padding:'25px 15px',
    fontSize:'1.1em',
    letterSpacing:'0.5px',
    wordSpacing:'0.5px',
    [theme.breakpoints.down('md')]: {
      fontSize:'0.9em'
    },
    [theme.breakpoints.down('sm')]: {
      display:'none',
    }
  },
  toolbar: {
    margin:'5px 0',
    [theme.breakpoints.down('xs')]: {
      flexDirection:'column-reverse',
    }
  },
  title: {
    flexGrow: 0,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    cursor: 'pointer',
    marginRight:'10px',
    whiteSpace: 'nowrap',
    background:'rgba(221,143,46)',
    borderRadius:'3px',
    padding:'0 5px',
    fontSize:'1em',
    [theme.breakpoints.down('xs')]: {
      padding:'5px 25px',
      margin:'10px auto 10px 0',
    },
  },
  toolbarForXS: {
    flexGrow:'1',
    [theme.breakpoints.down('xs')]: {
      width:'100%',
    }
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    display: 'flex',
    background:'rgba(221,143,46)',
    cursor:'pointer',
    borderRadius:'10px',
    zIndex:'1',
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  shoppingCartIcon: {
    width:'50px',
    height:'70px',
    paddingBottom:'8px',
  },
}));
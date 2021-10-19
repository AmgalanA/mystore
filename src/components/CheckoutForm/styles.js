import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    label: {
        flexGrow:1,
        border:'1px solid black',
    },
    inputProduct: {
        display:'none'
    },
    input: {
        width: '100%',
        borderRight: 'none',
        borderLeft: 'none',
        borderTop: 'none',
        outline: 'none',
        marginTop: '10px',
        borderBottom: '0.5px solid silver ',
        transition: 'borderBottom 1s ease 1s',
        '&:focus': {
            borderBottom: '2px solid #2F4F4F',
        },
    }
}));
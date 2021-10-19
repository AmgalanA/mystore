import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    comment: {
        padding: '10px',
        marginTop: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
    commentHeader: {
        display: 'flex',
        alignItems: 'center',
    },
    commentName: {
        marginLeft: '10px',
        fontSize: '22px',
        fontWeight: 'bold',
    },
    commentMessage: {
        fontSize: '18px',
        marginTop: '10px',
    },
    date: {
        fontSize: '16px',
        margin:'5px 0',
    }
}))
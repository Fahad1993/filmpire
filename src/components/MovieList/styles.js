// src/components/MovieList/styles.js
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    moviesContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto',
        [theme.breakpoint.down('sm')]: {
            justifyContent: 'center',

        },
    },
}));
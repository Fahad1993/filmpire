// import { makeStyles } from '@mui/styles';

// export const useStyles = makeStyles((theme) => ({
//     image: {
//         width: '70%',
//         height: 'auto',
//     },
// }));


// src/components/Sidebar/styles.js
import { styled } from '@mui/material/styles';

export const Image = styled('img')(({ theme }) => ({
    width: '70%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
}));

export const Links = styled('img')(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
}));

export const genreImages = styled('img')(({ theme }) => ({
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
    width: '30px',
}));

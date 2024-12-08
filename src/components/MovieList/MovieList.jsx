import React from 'react'
import { Grid } from '@mui/system'; // Update the import statement

import useStyles from './styles';
import { Movie } from '..';


const MovieList = ({ movies }) => {
    const classes = useStyles();

    return (
        <Grid container className='classes.moviesContainer'>
            {movies.results.map((movie, i) => (
                <Movie key={i} movie={movie} i={i} />
            ))}
        </Grid>

    );
};

export default MovieList
import React, { useState, useEffect } from 'react';
import { useMediaQuery, Box, circularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';




const Movies = () => {
    const { data } = useGetMoviesQuery();

    return (
        <div>
            <MovieList movies={data} />
        </div>
    )
}

export default Movies
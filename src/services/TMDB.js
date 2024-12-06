import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${tmdbApiKey}`);
            headers.set('accept', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        //* Get Movies
        getMovies: builder.query({
            query: (page = 1) => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
        }),
    }),
});

// Export the hook for usage in functional components
export const { useGetMoviesQuery } = tmdbApi;

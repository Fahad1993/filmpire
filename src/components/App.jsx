import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './'
import { Root, Content, Toolbar } from './styles';


const App = () => (
  <Root>
    <CssBaseline />
    <NavBar />
    <Content>
      <Toolbar />
      <Routes>
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/" element={<Movies />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Content>
  </Root>
);

export default App;

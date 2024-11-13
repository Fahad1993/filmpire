import React from 'react'
import { AppBar, IconButton, Drawer, Button, Avatar, useMediaQuery } from '@mui/material'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Toolbar, MenuButton } from './styles';
import { useTheme } from '@mui/material/styles';

const NavBar = () => {
    const isMobile = useMediaQuery('(max-width:600px)')
    const theme = useTheme();
    const isAuthenticated = true;

    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    {isMobile && (
                        <MenuButton color='inherit' edge="start" style={{ outline: 'none' }} onClick={() => { }}   >
                            <Menu />
                        </MenuButton>
                    )}
                    <IconButton color='inherit' sx={{ ml: 1 }} onClick={() => { }}   >
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    {!isMobile && 'search ...'}
                    <div>
                        {!isAuthenticated ? (
                            <Button color='inherit' onClick={() => { }}   >
                                Login &nbsp; <AccountCircle />
                            </Button>
                        ) : (
                            <Button
                                color='inherit'
                                component={Link}
                                to={`/profile/:id`}
                                onClick={() => { }}   >

                                {!isMobile && <>My Movies &nbsp; </>}
                                <Avatar
                                    style={{ width: 30, height: 30 }}
                                    alt='Profile'
                                    src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                                />
                            </Button>

                        )}
                    </div>

                </Toolbar>
            </AppBar>

        </>

    );
};

export default NavBar;
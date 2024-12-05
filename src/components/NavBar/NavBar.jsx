import React, { useState } from 'react';
import { AppBar, IconButton, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Toolbar, MenuButton, Drawer, LinkButton } from './styles';
import { useTheme } from '@mui/material/styles';
import { Sidebar } from '..';

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const isAuthenticated = true;

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    {isMobile && (
                        <MenuButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                            <Menu />
                        </MenuButton>
                    )}
                    <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => { }}>
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    {!isMobile && 'Search ...'}
                    <div>
                        {!isAuthenticated ? (
                            <Button color="inherit" onClick={() => { }}>
                                Login &nbsp; <AccountCircle />
                            </Button>
                        ) : (
                            <LinkButton
                                color="inherit"
                                component={Link}
                                to="/profile/:id"
                                onClick={() => { }}
                            >
                                {!isMobile && <>My Movies &nbsp;</>}
                                <Avatar
                                    style={{ width: 30, height: 30 }}
                                    alt="Profile"
                                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                />
                            </LinkButton>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant={isMobile ? "temporary" : "permanent"}
                    anchor="left"
                    open={isMobile ? mobileOpen : true}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                >
                    <Sidebar setMobileOpen={setMobileOpen} />
                </Drawer>
            </nav>
        </>
    );
};

export default NavBar;

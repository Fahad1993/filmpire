// src/components/NavBar/styles.js
import { styled } from "@mui/material/styles";
import { IconButton, Drawer as MuiDrawer, Button } from "@mui/material";

const drawerWidth = 240;

export const Toolbar = styled('div')(({ theme }) => ({
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        flexWrap: "wrap",
    },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxShadow: theme.shadows[2],
    },
}));

export const LinkButton = styled(Button)(({ theme }) => ({
    '&:hover': {
        color: 'white !important',
        textDecoration: 'none',
    },
}));

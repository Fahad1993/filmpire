// src/components/NavBar/styles.js
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

export const Toolbar = styled('div')(({ theme }) => ({
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
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

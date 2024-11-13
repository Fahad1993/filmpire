import React, { useEffect } from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';




const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme();
    //const [MobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <Link to="/" style={{ display: "flex", justifyContent: "center", padding: "10% 0" }} >
                <img src={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`} alt="Filmpire Logo"
        
        
        <>
                    )
}

                    export default Sidebar
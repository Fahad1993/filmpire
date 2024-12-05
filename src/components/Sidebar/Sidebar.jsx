import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Image } from './styles';
import { Divider, ListItem, List, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';

const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
];
const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Horror', value: 'horror' },
    { label: 'Drama', value: 'drama' },
    { label: 'Mystery', value: 'aystery' },
    { label: 'Crime', value: 'crime' },
    { label: 'Animation', value: 'animation' },
    { label: 'Documentary', value: 'documentary' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme();

    return (
        <>
            <Link
                to="/"
                style={{ display: "flex", justifyContent: "center", padding: "10% 0" }}
                onClick={() => setMobileOpen(false)}
            >
                <Image src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt="Filmpire logo" />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({ label, value }) => (
                    <Link key={value} className="links" to="/">
                        <ListItem onClick={() => { }} button>
                            <ListItemIcon>
                                <img src={redLogo} className="genreImages" height={30} />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}

            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>
                {demoCategories.map(({ label, value }) => (
                    <Link key={value} className="links" to="/">
                        <ListItem onClick={() => { }} button>
                            <ListItemIcon>
                                <img src={redLogo} className="genreImages" height={30} />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}

            </List>

        </>
    );
};

export default Sidebar;

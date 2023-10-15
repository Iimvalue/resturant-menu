'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Link } from '@mui/material';
import { useEffect, useState } from 'react';

const navItems = ['Home', 'Menu'];

export default function DrawerAppBar() {
    const [opacityNavbar, setOpacityNavbar] = useState('');
    const [scrollTop, setScrollTop] = useState(0);
    
    const onScroll = (e:any) => {
        setScrollTop(e.target.documentElement.scrollTop);
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        if (scrollTop > 80) {
            setOpacityNavbar('0.8')
        }
        else
            setOpacityNavbar('1')
    }, [scrollTop])


    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                backgroundColor: "#404142",
                height: "100%"
            }}>
            <Typography
                variant="h6"
                sx={{
                    my: 3,
                    color: "orange",
                }}>
                RESTAURANT NAME
            </Typography>
            <Divider />
            <List>
                {navItems.map((item,count) => (
                    <Link
                        key={count}
                        underline='none'
                        href={`/${item.toLowerCase()}`}
                        sx={{ color: "black" }}
                    >
                        <ListItem key={item} disablePadding>
                            <ListItemButton
                                sx={{
                                    textAlign: 'center',
                                    color: "white"
                                }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
                <Button
                    disabled
                    sx={{
                        textDecoration: "line-through darkred",

                    }}
                >
                    ORDER NOW
                </Button>
            </List>
        </Box>
    );


    return (
        <Box

            sx={{
                pb: { xs: 10, md: 10, lg: 10 },

            }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    p: "8px",
                    bgcolor: "#404142",
                    opacity: `${opacityNavbar}`,
                    boxShadow: "none"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        size='small'
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: { xs: 'block', sm: "none" },
                            borderRadius: "0px",
                            pb: -1,
                            "&:hover": {
                                color: "orange",
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 0.8, display: { xs: 'block', sm: 'block' } }}
                    >

                        <Avatar
                            src='\logo1.jpeg'

                            sx={{
                                display: "block",
                                width: "100px",
                                height:"48px",
                                left: { xs: "35%", sm: "15%", md: "20%" },
                                borderRadius: 1
                            }}
                        />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                href={`/${item.toLowerCase()}`}

                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        textShadow: "0px 1px 8px 0px orange",
                                        bgcolor: "#404142",
                                        color: "orange"
                                    }
                                }}
                            >
                                {item}
                            </Button>
                        ))}

                        <Button
                            disabled
                            sx={{
                                textDecoration: "line-through darkred",

                            }}
                        >
                            ORDER NOW
                        </Button>

                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>
    );
}

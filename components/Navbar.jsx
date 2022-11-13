import React from 'react'
import { AppBar, Toolbar, Box, Button, Tabs, Tab, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useWindowSize } from '../hooks/useWindowSize'

// Make a Navbar component
// This component will be used in _app.js
// It will have Tabs
// 1. Home
// 2. Committees
// 3. Ambassador Program
// 4. FAQs
export default function Navbar() {

    const { route } = useRouter()
    const currentTabValue = getTabValue(route)

    const [anchorElMenu, setAnchorElMenu] = React.useState(false)

    return (
        <header>
            <Box>
                <AppBar sx={{ bgcolor: '#500' }}>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-haspopup="true"
                                onClick={(e) => setAnchorElMenu(e.currentTarget)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Menu
                            anchorEl={anchorElMenu}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElMenu)}
                            onClose={() => setAnchorElMenu(null)}

                        >
                            {
                                smallMenu.map(({ href, text }) => (
                                    <SmallNavbarItem
                                        key={text}
                                        href={href}
                                        text={text}
                                        onClick={() => setAnchorElMenu(null)}
                                    />
                                ))
                            }
                        </Menu>
                        <Box
                            sx={{ flexGrow: 1 }}
                        />
                        <Tabs
                            value={currentTabValue}
                            TabIndicatorProps={{ sx: { bgcolor: '#eee' } }}
                            selectionFollowsFocus
                            sx={{ display: { xs: 'none', sm: 'flex' } }}
                        >
                            <Link href="/">
                                <Tab label={<HomeIcon fontSize="medium" />}{...getIdProps(0)} />
                            </Link>
                            <Link href="/committees">
                                <Tab label={<Format text={"Committees"} />}{...getIdProps(1)} />
                            </Link>
                            <Link href="/ambassador">
                                <Tab label={<Format text={"Ambassador Program"} />} {...getIdProps(2)} />
                            </Link>
                            <Link href="/faqs">
                                <Tab label={<Format text={"FAQs"} />} {...getIdProps(3)} />
                            </Link>
                        </Tabs>
                        <Box sx={{ flexGrow: 1 }} />
                        {/* <Box sx={{ display: { sx: 'flex', md: 'none' } }}>
                            <Typography variant='h6' sx={{ marginRight: '10vw' }}>
                                {smallMenu[currentTabValue].text}
                            </Typography>
                        </Box> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

const smallMenu = [
    { href: '/', text: 'Home' },
    { href: '/committees', text: 'Committees' },
    { href: '/ambassador', text: 'Ambassador Program' },
    { href: '/faqs', text: 'FAQs' },
    // {href: '/member', text: 'members'},
]

const SmallNavbarItem = ({ href, text, handleClose }) => {
    return (
        <Link href={href}>
            <MenuItem onClick={handleClose}>
                <Typography textAlign='center' variant="h6">{text}</Typography>
            </MenuItem>
        </Link>
    )
}

const Format = ({ text }) => (
    <span style={{ fontSize: 15 }}>
        <strong>
            {text}
        </strong>
    </span>
)

const getIdProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
})

const getTabValue = (route) => {
    const map = {
        "/": 0,
        "/committees": 1,
        "/ambassador": 2,
        "/faqs": 3,
    }
    return map[route]
}


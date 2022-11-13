import React from 'react'
import { AppBar, Toolbar, Box, Button, Tabs, Tab, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

    return (
        <header>
            <Box>
                <AppBar sx={{ bgcolor: '#500' }}>
                    <Toolbar disableGutters>
                        <Box
                            sx={{ flexGrow: 1 }}
                        />
                        <Tabs
                            value={currentTabValue}
                            TabIndicatorProps={{ sx: { bgcolor: '#eee' } }}
                            selectionFollowsFocus
                        >
                            <Link href="/">
                                <Tab label={<HomeIcon fontSize="medium"/>}{...getIdProps(0)} />
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
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
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
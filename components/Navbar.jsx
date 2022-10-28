import React from 'react'
import { AppBar, Toolbar, Box, Button, Tabs, Tab, IconButton } from '@mui/material'
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
                <AppBar>
                    <Toolbar disableGutters>
                        <Box
                            sx={{flexGrow:1}}
                        />
                        <Tabs 
                            value={currentTabValue} 
                            TabIndicatorProps={{ sx: { bgcolor: '#eee' } }}
                            selectionFollowsFocus
                        >
                            <Link href="/">
                                <Tab label="Home"{...getIdProps(0)} />
                            </Link>
                            <Link href="/committees">
                                <Tab label="Committees"{...getIdProps(1)} />
                            </Link>
                            <Link href="/ambassador">
                                <Tab label="Ambassador Program" {...getIdProps(2)} />
                            </Link>
                            <Link href="/faqs">
                                <Tab label="FAQs" {...getIdProps(3)} />
                            </Link>
                        </Tabs>
                        <Box sx={{ flexGrow: 1 }} />
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

const getIdProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
})

const getTabValue = (route) => {
    const map = {
        "/" : 0,
        "/committees" : 1,
        "/ambassador" : 2,
        "/faqs": 3,
    }
    return map[route]
}
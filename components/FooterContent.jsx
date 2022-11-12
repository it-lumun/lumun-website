import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import links from '../data/social_links'
import { Appbar, Toolbar, Box, Stack, IconButton, Typography } from '@mui/material'
import Link from 'next/link'

export default function Footer() {

    return (
        <footer style={{
            display: "flex",
            flex: 1,
            padding: "2rem 0",
            borderTop: "1px solid #eaeaea",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Stack spacing={2} direction="row">
                {links.facebook &&
                    <Link href={links.facebook} target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                    </Link>}
                {links.twitter &&
                    <Link href={links.twitter} target="_blank" rel="noopener noreferrer">
                        <IconButton sx={{ margin: '0 8px' }}>
                            <TwitterIcon />
                        </IconButton>
                    </Link>}
                {links.instagram &&
                    <Link href={links.instagram} target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                    </Link>}
                {links.linkedIn &&
                    <Link href={links.linkedIn} target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </Link>}
                <div style={{
                    marginLeft: '30px',
                    marginTop: '8px',
                }}>
                    <Typography>
                        © 2022 LUMUN IT
                    </Typography>
                </div>
            </Stack>
        </footer>
    )
}

{/* <Box sx={{
            margin: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "20px",
            paddingTop: "20px",
            backgroundColor: "#222",
        }}></Box> */}
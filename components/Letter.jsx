import React from 'react'
import { Stack, Box, css } from '@mui/material'
import Image from 'next/image'

// MarkupText takes a component and renders it as a simple markup
// photo takes up the photo to be rendered
export default function Letter({ MarkupText, photo }) {
    return (
        <div style={{
            maxWidth: '80vw',
            padding: '3rem',
            background: "linear-gradient(0deg, rgba(88,1,4,1) 17%, rgba(77,0,0,1) 38%, rgba(38,0,0,1) 65%)"
        }}>
            <Stack direction="row" spacing={2}>

                <MarkupText />

                {   // if photo is not null, render it
                    photo && <Box display='flex' textAlign='center' alignItems='center'>
                        <Image
                            src={photo}
                            alt='LUMUN Logo'
                            style={{ borderRadius: '50%' }}
                            width={300}
                            height={300}
                        />
                    </Box>
                }
            </Stack>
        </div>
    )
}

const styles = css`
    background: rgb(108,1,5);
    background: linear-gradient(180deg, rgba(108,1,5,1) 18%, rgba(103,0,0,1) 36%, rgba(64,0,0,1) 79%);     
`

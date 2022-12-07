
import Image from 'next/image'
import { Card, CardContent, CardMedia, Grid, Slide, Box, Modal } from '@mui/material'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'

const ProfileCard = ({ member }) => {

    // pop up for info
    const [show, setShow] = useState(false)

    // modal for intro
    const [open, setOpen] = useState(false)

    return (
        <>
            <Grid item xs={'auto'} sm={'auto'} md={'auto'}>
                <Card
                    key={member.sys.id}
                    onClick={() => setOpen(true)}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    style={{ position: 'relative', maxHeight: '200px', maxWidth: '150px', }}
                >
                    <CardMedia>
                        <Image
                            src={'https:' + member.fields.profileImage.fields.file.url}
                            alt={member.fields.name}
                            width={150}
                            height={200}
                        />
                    </CardMedia>
                    <Slide direction='up' in={show}>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                backgroundColor: 'black',
                                opacity: '0.7',
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '14px',
                                padding: '5px 0'
                            }}
                        >
                            <span><strong>{member.fields.name}</strong></span>
                            <br />
                            <span>{member.fields.position}</span>
                        </div>
                    </Slide>
                </Card>
            </Grid>
            {member.fields.intro ? <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{ ...modalStyles }}>
                    { documentToReactComponents(member.fields.intro) }
                </Box>
            </Modal> : null}
        </>
    )
}


const modalStyles = {
    fontFamily: 'Monaco, monospace',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "400px",
    maxHeight: "80vh",
    minHeight: "80vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    overflowY: 'scroll',
    boxShadow: 24,
    p: 4,
};

export default ProfileCard
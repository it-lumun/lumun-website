
import Image from 'next/image'
import { Card, CardContent, CardMedia, Grid, Slide } from '@mui/material'
import { useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'

const ProfileCard = ({ member }) => {

    const [show, setShow] = useState(false)

    return (
        <Grid item xs={'auto'} sm={'auto'} md={'auto'}>
            <Card
                key={member.sys.id}
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
    )
}

export default ProfileCard
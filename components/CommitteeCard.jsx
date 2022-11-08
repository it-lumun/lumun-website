import { Card, CardHeader, CardContent } from '@mui/material'

export default function CommitteeCard({title, chairs, description}) {
  return (
    <Card color='error'>
        <CardHeader title={title} subheader={`Chairs: ${chairs}`} />
        <CardContent>{description}</CardContent>
    </Card>
  )
}

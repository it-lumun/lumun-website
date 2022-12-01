import React from 'react'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function announcement({ announcements }) {
  return (
    <div>announcement</div>
  )
}

const getStaticProps = async () => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: "announcement" })

    return {
        props: {
            announcements: res.items,
        },
        revalidate: 1
    }
}

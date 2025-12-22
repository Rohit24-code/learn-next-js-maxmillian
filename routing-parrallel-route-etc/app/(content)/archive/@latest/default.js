import { getLatestNews } from '@/lib/news'
import React from 'react'
import NewsList from '@/components/MainHeader/news-list'

const LatestPage = async () => {
    const latestNews = await getLatestNews();
    return (
        <section>
            <h1>Latest</h1>
            <NewsList news={latestNews} />
        </section>
    )
}

export default LatestPage
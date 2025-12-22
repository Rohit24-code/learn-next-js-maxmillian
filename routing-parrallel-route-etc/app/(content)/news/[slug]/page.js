import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { getNewsItem } from '@/lib/news'

const NewsDetailsPage = async ({ params }) => {
    let finalParams = await params
    const newsItem = await getNewsItem(finalParams.slug)

    if (!newsItem) {
        notFound()
    }

    return (
        <article className='news-article'>
            <header>
                <Link href={`/news/${newsItem?.slug}/image`}>
                    <Image src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} width={600} height={300} />
                </Link>
                <h1>{newsItem?.title}</h1>
                <time dateTime={newsItem?.date}>{newsItem?.date}</time>

            </header>

            <p>{newsItem?.content}</p>
        </article>
    )
}

export default NewsDetailsPage
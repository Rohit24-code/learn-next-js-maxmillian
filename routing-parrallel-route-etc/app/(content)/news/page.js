import Link from 'next/link'
import React from 'react'
import { DUMMY_NEWS } from '@/dummy-news'
import Image from 'next/image'

const NewsPage = () => {
    return (
        <div>
            <ul className='news-list'>
                {
                    DUMMY_NEWS.map((news) => (
                        <li key={news?.id}>
                            <Link href={`/news/${news?.slug}`}>
                                <Image src={`/images/news/${news?.image}`} alt={news?.title} width={300} height={300} />
                                <h2>{news?.title}</h2>
                                <p>{news?.date}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NewsPage
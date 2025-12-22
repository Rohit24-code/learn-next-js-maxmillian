import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NewsList = ({ news }) => {

    return (
        <div>
            <ul className='news-list'>
                {
                    news?.map((news) => (
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

export default NewsList
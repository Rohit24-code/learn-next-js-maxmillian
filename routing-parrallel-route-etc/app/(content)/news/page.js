// "use client"
import React from 'react'
import NewsList from '@/components/MainHeader/news-list'
import { getAllNews } from '@/lib/news';


const NewsPage = async () => {
    // best way to do it if our server is inside our project
    // -------------------------------------------------------------------
    const news = await getAllNews();



    // we need to do all this when our server is outside our project
    // -------------------------------------------------------------------
    // const response = await fetch('http://localhost:8080/news')

    // if (!response.ok) {
    //     throw new Error('Failed to fetch data')
    // }
    // const news = await response.json();





    // This is how to do for client side. but this is not the best way to do it.
    // ----------------------------------------------------------------------
    // const [news, setNews] = useState([])
    // const [error, setError] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('http://loclhost:8080/news')

    //         if (!response.ok) {
    //             setError('Failed to fetch data')
    //             setIsLoading(false)
    //         }

    //         setIsLoading(false)
    //         const data = await response.json()
    //         setNews(data)
    //     }

    //     fetchData()
    // }, [])


    return (
        <div>
            <h1>News Page</h1>
            {/* {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && <NewsList news={news} />} */}

            <NewsList news={news} />
        </div>
    )
}

export default NewsPage
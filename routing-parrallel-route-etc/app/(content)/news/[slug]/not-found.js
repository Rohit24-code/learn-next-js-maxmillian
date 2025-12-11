import Link from 'next/link'
import React from 'react'

const NewNotFound = () => {
    return (
        <div id='error'>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, can't find requested article..</p>
            <p>Go back to <Link href="/news">news</Link></p>
        </div>
    )
}

export default NewNotFound
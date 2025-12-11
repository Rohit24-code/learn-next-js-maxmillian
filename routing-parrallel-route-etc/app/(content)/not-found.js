import React from 'react'
import Link from 'next/link'

const NotFoundPage = () => {
    return (
        <div id='error'>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Go back to <Link href="/">home</Link></p>
        </div>
    )
}

export default NotFoundPage
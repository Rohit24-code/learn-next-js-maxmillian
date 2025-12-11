'use client'


const error = ({ error }) => {
    return (
        <div>
            <h1>Something went wrong</h1>
            <p>Please try again later , it is invalid path: {error.message}</p>
        </div>
    )
}

export default error
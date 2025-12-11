import "@/app/globals.css"

// this modal is coming becaues i have a parellel route @modal

const NewsDetailsLayout = ({ children, modal }) => {
    return (
        <div className="page">
            {children}
            {modal}
        </div>
    )
}

export default NewsDetailsLayout
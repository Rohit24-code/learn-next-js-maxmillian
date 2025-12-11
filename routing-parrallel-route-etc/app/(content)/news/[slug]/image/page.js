import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";


// this is a example for interceptor page


const ImagePage = ({ params }) => {
    const slug = params.slug;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);
    if (!newsItem) {
        notFound();
    }
    return (
        <div className="fullscreen-image">
            <Image src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} fill />
        </div>
    )
}

export default ImagePage


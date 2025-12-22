import Image from "next/image";
import { getNewsItem } from "@/lib/news";


// this is a example for interceptor page


const ImagePage = async ({ params }) => {
    const slug = params.slug;
    const newsItem = await getNewsItem(slug);
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


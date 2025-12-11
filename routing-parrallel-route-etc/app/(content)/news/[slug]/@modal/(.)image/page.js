'use client'
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";


// this is a example for interceptor page 
// what it does is when we came to the page 
// through a link or something it will show this page but
// once we reload it will show the image page 


// the way to make intercepted page is like (path to the page you want to intercept)pagename
// for example if we want to intercept the image page of news page
// we will make a page like this news/[slug]/(.image)/page.js


// the path is . because @parallel route is ignored


const InterceptedImagePage = ({ params }) => {
    const router = useRouter();
    const slug = params.slug;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <div style={{ position: "relative", height: "70vh" }}>
                        <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default InterceptedImagePage


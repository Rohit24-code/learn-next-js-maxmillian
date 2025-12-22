import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import React, { Suspense } from 'react'
import NewsList from '@/components/MainHeader/news-list'
import Link from 'next/link';


// this [[...something]] is a catch-all route that are inside the /archive folder
// it will match /archive/2020 and /archive/2020/10/10


async function FilterHeader({ year, month }) {
    const availableYear = await getAvailableNewsYears();
    let links = availableYear;
    if (year && !month) {

        links = getAvailableNewsMonths(year);
    }

    if (year && month) {

        links = [];
    }

    if (year && !availableYear?.includes(year) ||
        month && !getAvailableNewsMonths(year)?.includes(month)) {
        throw new Error("No news found for the selected period");
    }

    return <header id="archive-header">
        <nav>
            <ul>
                {links.map((link) => {
                    const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;


                    return <li key={link}>
                        <Link href={href}>{link}</Link>
                    </li>
                })}
            </ul>
        </nav>
    </header>;
}


async function FilteredNews({ year, month }) {
    let news;


    if (year && !month) {
        news = await getNewsForYear(year);
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = <p>No news found for the selected period</p>
    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    return newsContent;
}

const FilteredNewsPage = async ({ params }) => {
    const filter = params.filter;


    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];




    return (
        <>

            {/* we can also use both in one suspense we did this to granulary add loaders */}
            <Suspense fallback={<p>Loading... header</p>}>
                <FilterHeader year={selectedYear} month={selectedMonth} />
            </Suspense>

            <Suspense fallback={<p>Loading... news</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>
    )
}

export default FilteredNewsPage
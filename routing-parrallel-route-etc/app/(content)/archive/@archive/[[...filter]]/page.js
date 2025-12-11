import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import React from 'react'
import NewsList from '@/components/MainHeader/news-list'
import Link from 'next/link';


// this [[...something]] is a catch-all route that are inside the /archive folder
// it will match /archive/2020 and /archive/2020/10/10

const FilteredNewsPage = ({ params }) => {
    const filter = params.filter;
    console.log(filter, "filtewrer")

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];
    const selectedDay = filter?.[2];
    let news;
    let links = getAvailableNewsYears();
    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period</p>
    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    if (selectedYear && !getAvailableNewsYears().includes(+selectedYear) || selectedMonth && !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth)) {
        throw new Error("No news found for the selected period");
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;


                            return <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li>
                        })}
                    </ul>
                </nav>
            </header>
            {
                newsContent

            }
        </>
    )
}

export default FilteredNewsPage
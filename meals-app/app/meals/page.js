import Link from 'next/link'
import React from 'react'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'
import MealsLoading from './loading-out'

export const metadata = {
  title: 'All meals',
  description: 'Browswe the delecious meals shared by the community',
};



async function Meals() {
  // after running this in production it next js will cache this pafge
  // but the downside is whenever we come we will again and again see the same data
  // to avoid this we can use the revalidate option , we will go to the saveMeal function and add the revalidate option there
  // then next js will revalidate the data once it is called
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}

const MealsPage = async () => {

  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created {' '} <span className={classes.highlight}> by you</span></h1>
        <p>Share your favorite recipes with the world</p>
        <p className={classes.cta}><Link href={'/meals/share'}>Join our community and share your favorite recipes!</Link></p>
      </header>



      {/* over here this is important because we called the data and the data that is returned in a other component so that we don't load the complete page ,only that part with will be loaded that is inside suspense */}
      {/* the default loading.js we use this also does the same behind the scenes */}
      <main className={classes.main}>
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage
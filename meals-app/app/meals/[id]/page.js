import React from 'react'
import classes from './page.module.css'
import Image from 'next/image'
import { getMealById } from '@/lib/meals';
import { notFound } from 'next/navigation';

// this is a function to generate metadata for the page
// this function will be called when the page is generated and the function name should always be the same generateMetadata
// this also gets access to params same as the params we get in the page function
export async function generateMetadata({ params }) {
  const mealId = await params;
  const meal = getMealById(mealId?.id);
  if (!meal) {
    return {
      title: 'Meal not found',
      description: 'Meal not found'
    }
  }
  return {
    title: meal?.title,
    description: meal?.summary
  }
}

const MealsDetailPage = async ({ params }) => {
  const mealId = await params;
  const meal = getMealById(mealId?.id);

  if (!meal) {
    // this is a server-side function to show a 404 page
    notFound()
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>by <a href={`mailto:${meal.creatorEmail}`}>{meal.creator}</a></p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: `${meal.instructions}`
        }}></p>
      </main>
    </>
  )
}

export default MealsDetailPage
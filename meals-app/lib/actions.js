'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"

function isInvalidText(text) {
    return text.trim === "" || !text
}

//this is like any function over here will be server action.
export async function shareMeal(prevData, formData) {
    // this i have used bcs we are using 'use client' in the form, this created a server action only execute on the server not on the client
    // 'use server'

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('name'),
        creatorEmail: formData.get('email'),
        image: formData.get('image')
    }

    if (isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creatorEmail) ||
        !meal.image ||
        meal.image.size === 0) {

        return {
            error: 'All fields are required'
        }
    }

    await saveMeal(meal)
    // i m telling next js to revalidate the page /meals, by default only /meals will be revalidated
    // if we want to revalidate the nested page then we have to use the "layout" as second argument
    // over here we are not using the layout as second argument bcs we are not revalidating the nested page
    revalidatePath("/meals")
    redirect("/meals")
}
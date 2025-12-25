'use client'
import React from 'react'
import FormSubmit from './form-submit'
import { useFormState } from 'react-dom'


export const PostForm = ({ createPost }) => {
    // with react 19 this is useActionState
    const [state, formAction] = useFormState(createPost, null)
    return (
        <>
            <h1>Create a new post</h1>
            {/* by default this action is path to url but in nextjs it takes a function and gives all the data to us */}
            <form action={formAction}>
                <p className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </p>
                <p className="form-control">
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="image"
                        name="image"
                    />
                </p>
                <p className="form-control">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" rows="5" />
                </p>
                <p className="form-actions">
                    <FormSubmit />
                </p>
                {state?.error && <ul className="form-error">
                    {state?.error?.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>}
            </form>
        </>
    )
}

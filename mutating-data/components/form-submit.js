'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const FormSubmit = () => {
    const { pending } = useFormStatus()
    return (
        <>
            <button type="reset">Reset</button>
            <button type="submit" disabled={pending}>
                {pending ? 'Posting...' : 'Post'}
            </button>
        </>

    )
}

export default FormSubmit

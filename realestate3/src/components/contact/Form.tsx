'use client'

import c from './Contact.module.scss'
import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Link from 'next/link'

interface Props {
    question: string
    button: string
}

const Form: React.FC<Props> = ({ button, question }) => {
    const [state, handleSubmit] = useForm('xblrowvj')

    if (state.succeeded) {
        alert('success')
    }

    return (
        <form className={c.form} onSubmit={handleSubmit}>
            <div className={c.form__item}>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Jan Kowalski"
                />
                <ValidationError
                    prefix="Full Name"
                    field="fullName"
                    errors={state.errors}
                />
            </div>
            <div className={c.form__item}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Jankowalski@gmail.com"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className={c.form__item}>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+48 000 000 000"
                />
                <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                />
            </div>
            <div className={c.form__item}>
                <p>{question}</p>
                <textarea id="message" name="message" />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button
                className={c.form__button}
                type="submit"
                disabled={state.submitting}
            >
                {button}
            </button>
        </form>
    )
}

export default Form

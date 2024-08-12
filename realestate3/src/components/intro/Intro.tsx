'use client'

import { useEffect } from 'react'
import c from './Intro.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Intro = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/home')
        }, 5000)
    })
    return (
        <article className={c.intro}>
            <div className={c.intro__text}>
                <h1 className={c.intro__title}>
                    AGENT <span>TSEHENKO.</span>
                </h1>
                <h2 className={c.intro__subtitle}>REAL ESTATE</h2>
            </div>
            <Image
                className={c.intro__img}
                src="/wro.png"
                alt="My image"
                layout="responsive"
                objectFit="cover"
                width={1000}
                height={600}
            />
            <div className={c.intro__rectangle}></div>
        </article>
    )
}

export default Intro

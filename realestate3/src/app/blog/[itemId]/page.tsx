'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { data, dataInterface } from '../data'
import c from './styles.module.scss'
import HomeAbout from '@/components/homeAbout/HomeAbout'
import Mission from '@/components/mission/Mission'
import Contact from '@/components/contact/Contact'
import PagesTop from '@/components/pagesTop/PagesTop'
import Text from '@/components/text/Text'

export default function ItemId() {
    const [item, setItem] = useState<dataInterface | undefined>()
    const params = useParams()
    const getItem = (id: string): dataInterface | undefined => {
        return data.find((e) => e.id.toString() === id)
    }
    useEffect(() => {
        setItem(getItem(params.itemId.toString()))
    })
    return (
        <main className={c.blog}>
            <PagesTop text="BLOG" />
            {item ? (
                <div className={c.blog__item}>
                    <img
                        className={c.blog__img}
                        src={item.img}
                        alt={item.img}
                    />
                    <p className={c.blog__title}>{item.title}</p>
                    <Text text={item.text} />
                </div>
            ) : (
                <span></span>
            )}
            <HomeAbout />
            <Mission />
            <Contact />
        </main>
    )
}

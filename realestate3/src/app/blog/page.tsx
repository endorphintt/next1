'use client'

import PagesTop from '@/components/pagesTop/PagesTop'
import c from './styles.module.scss'
import HomeAbout from '@/components/homeAbout/HomeAbout'
import Mission from '@/components/mission/Mission'
import Contact from '@/components/contact/Contact'
import { data } from './data'
import Link from 'next/link'
import Image from 'next/image'
import { blog as titleEN } from '../locales/dataEN'
import { blog as titlePL } from '../locales/dataPL'
import { blog as titleUA } from '../locales/dataUA'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/rootReducer'
import { motion } from 'framer-motion'
import { opacityAnimation } from '@/animations'

const Blog = () => {
    const [title, setTitle] = useState<string>(titlePL)
    const lan = useSelector((state: RootState) => state.lan.lan)

    useEffect(() => {
        if (lan == 'PL') {
            setTitle(titlePL)
        } else if (lan == 'EN') {
            setTitle(titleEN)
        } else {
            setTitle(titleUA)
        }
    }, [lan])
    return (
        <div className={c.Blog}>
            <PagesTop text={title} />
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={opacityAnimation}
                custom={1}
                className={c.blog__items}
            >
                {data.map((e) => (
                    <Link
                        key={e.id}
                        href={'/blog/' + e.id}
                        className={c.blog__item}
                    >
                        <Image
                            width={280}
                            height={250}
                            src={e.img}
                            alt="umowaRez.jpg"
                            className={c.blog__img}
                        />
                        <p className={c.blog__title}>{e.title}</p>
                    </Link>
                ))}
            </motion.div>
            <HomeAbout />
            <Mission />
            <Contact />
        </div>
    )
}

export default Blog

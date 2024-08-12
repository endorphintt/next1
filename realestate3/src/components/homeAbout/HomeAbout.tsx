'use client'

import c from './HomeAbout.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { HomeAbout as homeAboutEN } from '@/app/locales/dataEN'
import { HomeAbout as homeAboutPL } from '@/app/locales/dataPL'
import { HomeAbout as homeAboutUA } from '@/app/locales/dataUA'
import { HomeAboutInterface } from '@/app/locales/interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { blockToLeftAnimation } from '@/animations'
import Text from '../text/Text'

const HomeAbout = () => {
    const lan = useSelector((state: RootState) => state.lan.lan)
    const [data, setData] = useState<HomeAboutInterface>(homeAboutEN)

    useEffect(() => {
        if (lan == 'PL') {
            setData(homeAboutPL)
        } else if (lan == 'EN') {
            setData(homeAboutEN)
        } else {
            setData(homeAboutUA)
        }
    }, [lan])

    return (
        <motion.article
            initial="hidden"
            whileInView="visible"
            className={c.top}
        >
            <motion.div
                variants={blockToLeftAnimation}
                custom={2}
                className={c.top__left}
            >
                <p className={c.top__agent}>{data.title}</p>
                <div className={c.top__text}>
                    <Text text={data.text} />
                    <Link href="/about" className={c.top__contact}>
                        {data.button}
                    </Link>
                </div>
            </motion.div>
            <motion.div
                variants={blockToLeftAnimation}
                custom={2}
                className={c.top__right}
            >
                <img
                    src="/aboutNew.jpg"
                    alt="ivan tsehenko"
                    className={c.top__image}
                />
            </motion.div>
        </motion.article>
    )
}

export default HomeAbout

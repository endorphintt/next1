'use client'

import c from './HomeTop.module.scss'
import Image from 'next/image'
import { homeTop as homeTopPL } from '@/app/locales/dataPL'
import { homeTop as homeTopEN } from '@/app/locales/dataEN'
import { homeTop as homeTopUA } from '@/app/locales/dataUA'
import { HomeTopInterface } from '@/app/locales/interfaces'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/rootReducer'
import { motion } from 'framer-motion'
import { blockToLeftAnimation, blockToRightAnimation } from '@/animations'
import Text from '../text/Text'

const buttons = [
    {
        link: 'https://youtube.com/@agent_tsehenko_real_estate?si=Cpzv7F6-ITYvATCK',
        img: '/youtube.png',
    },
    {
        link: 'https://www.instagram.com/agent_tsehenko?igsh=aW1qN2Mxd2hhY2sw&utm_source=qr',
        img: '/instagram.png',
    },
    {
        link: 'https://www.tiktok.com/@agent_tsehenko?_t=8oQ6QWXZSHR&_r=1',
        img: '/tiktok.png',
    },
]

export const openLink = (url: string) => {
    if (typeof url === 'string' && url.startsWith('http')) {
        window.open(url, '_blank')
    } else {
        console.error('wrong URL')
    }
}

interface Props {
    scroll: () => void
}

const HomeTop: React.FC<Props> = ({ scroll }) => {
    const [data, setData] = useState<HomeTopInterface>(homeTopPL)
    const activeLan = useSelector((state: RootState) => state.lan.lan)

    const handleLanguageChange = (newLanguage: string) => {
        if (newLanguage == 'PL') {
            setData(homeTopPL)
        } else if (newLanguage == 'EN') {
            setData(homeTopEN)
        } else {
            setData(homeTopUA)
        }
    }

    useEffect(() => {
        handleLanguageChange(activeLan)
    }, [activeLan])
    return (
        <motion.article
            initial="hidden"
            whileInView="visible"
            className={c.top}
        >
            <motion.div
                variants={blockToRightAnimation}
                className={c.top__left}
            >
                <div className={c.top__logo}>
                    <p className={c.top__agent}>AGENT</p>
                    <p className={c.top__tsehenko}>TSEHENKO.</p>
                </div>
                <div className={c.top__text}>
                    <Text text={data.text} />

                    <button onClick={scroll} className={c.top__contact}>
                        {data.contact}
                    </button>
                </div>
            </motion.div>
            <motion.div
                variants={blockToLeftAnimation}
                className={c.top__right}
            >
                <div className={c.top__buttons}>
                    {buttons.map((b) => (
                        <button
                            className={c.top__social}
                            key={b.img}
                            onClick={() => openLink(b.link)}
                        >
                            <Image
                                src={b.img}
                                width={30}
                                height={30}
                                alt="social"
                            />
                        </button>
                    ))}
                </div>
            </motion.div>
        </motion.article>
    )
}

export default HomeTop

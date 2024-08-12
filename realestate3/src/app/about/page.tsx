'use client'

import PagesTop from '@/components/pagesTop/PagesTop'
import c from './styles.module.scss'
import { useEffect, useRef, useState } from 'react'
import Contact from '@/components/contact/Contact'
import Mission from '@/components/mission/Mission'
import ScrollToContact from '@/components/scrollToContact/ScrollToContact'
import { about as aboutEN } from '../locales/dataEN'
import { about as aboutPL } from '../locales/dataPL'
import { about as aboutUA } from '../locales/dataUA'
import { useSelector } from 'react-redux'
import { AboutInterface } from '../locales/interfaces'
import { RootState } from '../redux/rootReducer'
import { motion } from 'framer-motion'
import { blockToLeftAnimation, blockToRightAnimation } from '@/animations'
import Text from '@/components/text/Text'

const About = () => {
    const ref = useRef<any>()
    const [data, setData] = useState<AboutInterface>(aboutPL)
    const lan = useSelector((state: RootState) => state.lan.lan)

    useEffect(() => {
        if (lan == 'PL') {
            setData(aboutPL)
        } else if (lan == 'EN') {
            setData(aboutEN)
        } else {
            setData(aboutUA)
        }
    }, [lan])
    return (
        <motion.div initial="hidden" whileInView="visible" className={c.home}>
            <PagesTop text={data.title} />
            <motion.article
                variants={blockToLeftAnimation}
                custom={1}
                className={c.top}
            >
                <div className={c.top__left}>
                    <div className={c.top__logo}>
                        <p className={c.top__agent}>ABOUT</p>
                        <p className={c.top__tsehenko}>IVAN</p>
                    </div>
                    <div className={c.top__text}>
                        <Text text={data.first} />
                    </div>
                </div>
                <div className={c.top__right}>
                    <img
                        src="/aboutNew.jpg"
                        alt="ivan tsehenko"
                        className={c.top__image}
                    />
                </div>
            </motion.article>
            <motion.div
                variants={blockToRightAnimation}
                custom={1}
                className={c.second}
            >
                <div className={c.second__left}>
                    <img
                        src="/aboutSecond.png"
                        alt="ivan tsehenko"
                        className={c.top__image}
                    />
                </div>
                <div className={c.second__right}>
                    <Text text={data.second} />
                </div>
            </motion.div>
            <ScrollToContact
                scroll={() =>
                    ref.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }
            />
            <Mission />
            <div ref={ref} className="contact__container">
                <Contact />
            </div>
        </motion.div>
    )
}

export default About

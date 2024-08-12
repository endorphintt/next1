'use client'

import PagesTop from '@/components/pagesTop/PagesTop'
import c from './styles.module.scss'
import ScrollToContact from '@/components/scrollToContact/ScrollToContact'
import Mission from '@/components/mission/Mission'
import Contact from '@/components/contact/Contact'
import { useEffect, useRef, useState } from 'react'
import Steps from './steps/Steps'
import { offers as offersPL } from '../locales/dataPL'
import { offers as offersEN } from '../locales/dataEN'
import { offers as offersUA } from '../locales/dataUA'
import { OffersInterface } from '../locales/interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/rootReducer'
import { motion } from 'framer-motion'
import {
    opacityAnimation,
    blockToLeftAnimation,
    blockToRightAnimation,
} from '@/animations'

const Offers = () => {
    const [data, setData] = useState<OffersInterface>(offersPL)
    const lan = useSelector((state: RootState) => state.lan.lan)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        if (lan == 'PL') {
            setData(offersPL)
        } else if (lan == 'EN') {
            setData(offersEN)
        } else {
            setData(offersUA)
        }
    }, [lan])

    const ref = useRef<any>()
    const [readMore, setReadMore] = useState<boolean>(false)
    const [activeNumber, setActiveNumber] = useState<number>(1)

    const [activeOffer] = data.offersData.filter(
        (offer) => offer.id === activeNumber
    )

    return (
        <motion.div initial="hidden" whileInView="visible" className={c.offers}>
            <PagesTop text={data.offersPage.top} />
            <motion.section
                variants={opacityAnimation}
                custom={1}
                className={c.offers__header}
            >
                {data.offersPage.links.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => setActiveNumber(link.id)}
                        className={c.offers__header_item}
                        style={{
                            background:
                                link.id === activeNumber ? '#205eb5' : 'white',
                            color:
                                link.id === activeNumber ? 'white' : '#205eb5',
                        }}
                    >
                        {link.name}
                    </button>
                ))}
            </motion.section>
            <section className={c.body}>
                <motion.section
                    variants={blockToRightAnimation}
                    className={c.body__steps}
                >
                    <div className={c.body__steps_title}>
                        {data.offersPage.looksLike}
                    </div>
                    <Steps readMore={readMore} items={activeOffer.steps} />
                    <button
                        onClick={() => setReadMore(!readMore)}
                        className={c.more}
                    >
                        {readMore ? data.offersPage.less : data.offersPage.more}
                    </button>
                </motion.section>
            </section>
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

export default Offers

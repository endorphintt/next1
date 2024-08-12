'use client'

import HomeOffers from '@/components/homeOffers/HomeOffers'
import c from './styles.module.scss'
import HomeTop from '@/components/homeTop/HomeTop'
import HomeAbout from '@/components/homeAbout/HomeAbout'
import { useRef } from 'react'
import Contact from '@/components/contact/Contact'
import ScrollToContact from '@/components/scrollToContact/ScrollToContact'
import Mission from '@/components/mission/Mission'

const Home = () => {
    const ref = useRef<any>()
    return (
        <div className={c.home}>
            <HomeTop
                scroll={() =>
                    ref.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }
            />
            <HomeOffers />
            <HomeAbout />
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
        </div>
    )
}

export default Home

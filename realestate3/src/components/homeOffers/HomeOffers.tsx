'use client'

import { useEffect, useState } from 'react'
import c from './HomeOffers.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { homeOffers as homeOffersPL } from '@/app/locales/dataPL'
import { homeOffers as homeOffersEN } from '@/app/locales/dataEN'
import { homeOffers as homeOffersUA } from '@/app/locales/dataUA'
import { HomeOffersInterface } from '@/app/locales/interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/rootReducer'
import { blockToRightAnimation } from '@/animations'
import { motion } from 'framer-motion'

const offers = [
    { img: '/buy.png', link: '/offers', name: 'KUPNO' },
    { img: '/sell.png', link: '/offers', name: 'SPRZEDAŻ' },
    { img: '/najem.png', link: '/offers', name: 'NAJEM' },
    { img: '/wynajem.png', link: '/offers', name: 'WYNAJEM' },
]

const HomeOffers = () => {
    const [windowSize, setWindowSize] = useState<number>(830)
    const [currentPosition, setCurrentPosition] = useState<number>(0)
    const [lastPosition, setLastPosition] = useState<number>(1)
    const router = useRouter()

    const [data, setData] = useState<HomeOffersInterface[]>(homeOffersPL)
    const activeLan = useSelector((state: RootState) => state.lan.lan)

    const handleClick = () => {
        router.push('/offers')
    }

    const handleLanguageChange = (newLanguage: string) => {
        if (newLanguage == 'PL') {
            setData(homeOffersPL)
        } else if (newLanguage == 'EN') {
            setData(homeOffersEN)
        } else {
            setData(homeOffersUA)
        }
    }

    useEffect(() => {
        handleLanguageChange(activeLan)
        function handleResize() {
            setWindowSize(window.innerWidth - 70)
            setLastPosition(
                window.innerWidth - 70 > 830
                    ? -290
                    : -290 - (830 - (window.innerWidth - 70))
            )
        }
        window.addEventListener('resize', handleResize)

        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [activeLan])

    const handleSlide = (direction: string) => {
        if (direction === 'right' && currentPosition != lastPosition) {
            if (currentPosition - lastPosition < 290) {
                setCurrentPosition(lastPosition)
            } else {
                setCurrentPosition(currentPosition - 290)
            }
        } else if (direction === 'left' && currentPosition != 0) {
            if (currentPosition > -290) {
                setCurrentPosition(0)
            } else {
                setCurrentPosition(currentPosition + 290)
            }
        }
    }
    return (
        <motion.div
            className={c.offers}
            initial="hidden"
            whileInView="visible"
            variants={blockToRightAnimation}
            custom={2}
        >
            <div className={c.slider}>
                <button
                    className={c.slider__left}
                    onClick={() => handleSlide('left')}
                    style={{
                        opacity: currentPosition >= 0 ? '0' : '1',
                    }}
                ></button>
                <div className={c.slider__container}>
                    <div
                        className={c.slider__line}
                        style={{
                            transform: `translateX(${currentPosition}px)`,
                        }}
                    >
                        {data.map((e) => (
                            <div
                                onClick={handleClick}
                                key={e.name}
                                className={c.slider__item}
                            >
                                <div className={c.slider__img}>
                                    <Image
                                        width={70}
                                        height={70}
                                        alt={e.name}
                                        src={e.img}
                                    />
                                </div>
                                <button className={c.slider__link}>
                                    {e.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className={c.slider__right}
                    onClick={() => handleSlide('right')}
                    style={{
                        opacity: currentPosition <= lastPosition ? '0' : '1',
                    }}
                ></button>
            </div>
        </motion.div>
    )
}

export default HomeOffers

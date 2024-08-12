'use client'

import { TOGGLE_CONTACT, TOGGLE_MENU } from '@/app/redux/consts'
import c from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scrollToTop } from '@/app/functions'
import { toggleMenu, toggleContact, toggleLanguage } from '@/app/redux/actions'
import { RootState, AppDispatch } from '@/app/redux/store'
import { header as headerPL } from '@/app/locales/dataPL'
import { header as headerEN } from '@/app/locales/dataEN'
import { header as headerUA } from '@/app/locales/dataUA'
import { HeaderInterface } from '@/app/locales/interfaces'

export const links = [
    { path: '/home', name: 'Strona głowna' },
    { path: '/offers', name: 'Usługi' },
    { path: '/about', name: 'O Mnie' },
    { path: '/blog', name: 'Blog' },
]

const Header = () => {
    const [scrollY, setScrollY] = useState(0)
    const dispatch: AppDispatch = useDispatch() // Використовуйте типізований useDispatch
    const activeLan = useSelector((state: RootState) => state.lan.lan)
    const [data, setData] = useState<HeaderInterface>(headerPL)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleLanguageChange = (newLanguage: string) => {
        dispatch(toggleLanguage(newLanguage))
        if (newLanguage == 'PL') {
            setData(headerPL)
        } else if (newLanguage == 'EN') {
            setData(headerEN)
        } else {
            setData(headerUA)
        }
    }

    return (
        <header
            style={{
                backgroundColor: scrollY > 30 ? 'white' : 'transparent',
            }}
            className={c.header}
        >
            <Image
                className={c.header__logo}
                src="/logo.png"
                width={140}
                height={30}
                alt="logo"
            />
            <div className={c.header__links}>
                {data.links.map((link) => (
                    <Link
                        onClick={() => scrollToTop()}
                        key={link.path}
                        href={link.path}
                        passHref
                    >
                        <button className={c.header__link}>{link.name}</button>
                    </Link>
                ))}

                <button
                    onClick={() => dispatch(toggleContact())}
                    className={c.header__link}
                >
                    {data.contact}
                </button>
            </div>
            <div className={c.header__lans}>
                <button
                    className={c.header__lan}
                    style={{
                        backgroundColor:
                            activeLan == 'PL' ? '#205EB5' : 'transparent',
                        color: activeLan == 'PL' ? 'white' : '#205EB5',
                    }}
                    onClick={() => handleLanguageChange('PL')}
                >
                    PL
                </button>
                /
                <button
                    className={c.header__lan}
                    style={{
                        backgroundColor:
                            activeLan == 'UA' ? '#205EB5' : 'transparent',
                        color: activeLan == 'UA' ? 'white' : '#205EB5',
                    }}
                    onClick={() => handleLanguageChange('UA')}
                >
                    UA
                </button>
                /
                <button
                    className={c.header__lan}
                    style={{
                        backgroundColor:
                            activeLan == 'EN' ? '#205EB5' : 'transparent',
                        color: activeLan == 'EN' ? 'white' : '#205EB5',
                    }}
                    onClick={() => handleLanguageChange('EN')}
                >
                    EN
                </button>
            </div>
            <div
                onClick={() => dispatch(toggleMenu())}
                className={c.header__icon}
            ></div>
        </header>
    )
}

export default Header

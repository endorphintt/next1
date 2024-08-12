'use client'

import c from './Footer.module.scss'
import Image from 'next/image'
import { openLink } from '../homeTop/HomeTop'
import Link from 'next/link'
import { scrollToTop } from '@/app/functions'
import { footer as footerPL } from '@/app/locales/dataPL'
import { footer as footerEN } from '@/app/locales/dataEN'
import { footer as footerUA } from '@/app/locales/dataUA'
import { FooterInterface } from '@/app/locales/interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/rootReducer'
import { useEffect, useState } from 'react'

const buttons = [
    {
        link: 'https://youtube.com/@agent_tsehenko_real_estate?si=Cpzv7F6-ITYvATCK',
        img: '/contactYoutube.png',
    },
    {
        link: 'https://www.instagram.com/agent_tsehenko?igsh=aW1qN2Mxd2hhY2sw&utm_source=qr',
        img: '/contactInstagram.png',
    },
    {
        link: 'https://www.tiktok.com/@agent_tsehenko?_t=8oQ6QWXZSHR&_r=1',
        img: '/contactTiktok.png',
    },
]

const Footer = () => {
    const lan = useSelector((state: RootState) => state.lan.lan)
    const [data, setData] = useState<FooterInterface>(footerPL)

    useEffect(() => {
        if (lan == 'PL') {
            setData(footerPL)
        } else if (lan == 'EN') {
            setData(footerEN)
        } else {
            setData(footerUA)
        }
    }, [lan])
    return (
        <div className={c.footer__container}>
            <div className={c.footer}>
                <div className={c.footer__left}>
                    <Image
                        className={c.footer__logo}
                        src="/logo.png"
                        width={210}
                        height={40}
                        alt="logo"
                    />
                    <div className={c.footer__socials}>
                        {buttons.map((b) => (
                            <button
                                className={c.footer__social}
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
                </div>
                <div className={c.footer__nav}>
                    {data.links.map((link) => (
                        <Link
                            onClick={() => scrollToTop()}
                            key={link.path}
                            href={link.path}
                            passHref
                        >
                            <button className={c.footer__link}>
                                {link.name}
                            </button>
                        </Link>
                    ))}
                </div>
                <div className={c.footer__right}>
                    <p className={c.footer__right_text}> {data.text}</p>
                    <p className={c.footer__right_author}>{data.author}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

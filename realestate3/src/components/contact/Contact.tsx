'use client'

import c from './Contact.module.scss'
import Form from './Form'
import { openLink } from '../homeTop/HomeTop'
import Image from 'next/image'
import { contact as contactEN } from '@/app/locales/dataEN'
import { contact as contactPL } from '@/app/locales/dataPL'
import { contact as contactUA } from '@/app/locales/dataUA'
import { ContactInterface } from '@/app/locales/interfaces'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/rootReducer'
import { motion } from 'framer-motion'
import { opacityAnimation } from '@/animations'

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

const Contact = () => {
    const [data, setData] = useState<ContactInterface>(contactPL)
    const lan = useSelector((state: RootState) => state.lan.lan)

    useEffect(() => {
        if (lan == 'PL') {
            setData(contactPL)
        } else if (lan == 'EN') {
            setData(contactEN)
        } else {
            setData(contactUA)
        }
    }, [lan])
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={opacityAnimation}
            custom={2}
            className={c.contact__container}
        >
            <div className={c.contact}>
                <p className={c.contact__title}>{data.title}</p>
                <div className={c.contact__body}>
                    <img
                        src="/contactIvan.png"
                        alt="Ivan Tsehenko"
                        className={c.contact__img}
                    />
                    <div className={c.contact__right}>
                        <div className={c.contact__info}>
                            <p className={c.contact__info_item}>{data.phone}</p>
                            <p className={c.contact__info_item}>{data.email}</p>
                            <p className={c.contact__info_text}>{data.text}</p>
                            <div className={c.contact__buttons}>
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
                        </div>
                        <Form button={data.button} question={data.question} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact

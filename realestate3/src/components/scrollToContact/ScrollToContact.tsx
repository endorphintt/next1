'use client'

import c from './ScrollToContact.module.scss'
import { scrollToContact as scrollToContactEN } from '@/app/locales/dataEN'
import { scrollToContact as scrollToContactPL } from '@/app/locales/dataPL'
import { scrollToContact as scrollToContactUA } from '@/app/locales/dataUA'
import { ScrollToContactInterface } from '@/app/locales/interfaces'
import { RootState } from '@/app/redux/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface Props {
    scroll: () => void
}

const ScrollToContact: React.FC<Props> = ({ scroll }) => {
    const lan = useSelector((state: RootState) => state.lan.lan)
    const [data, setData] =
        useState<ScrollToContactInterface>(scrollToContactPL)

    useEffect(() => {
        if (lan == 'PL') {
            setData(scrollToContactPL)
        } else if (lan == 'EN') {
            setData(scrollToContactEN)
        } else {
            setData(scrollToContactUA)
        }
    },[lan])

    return (
        <div className={c.scroll} onClick={scroll}>
            <p className={c.scroll__text}>
                {data.text} <span></span>
            </p>
        </div>
    )
}

export default ScrollToContact

'use client'

import c from './Menu.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { links } from '../header/Header'
import { TOGGLE_MENU } from '@/app/redux/consts'
import { RootState } from '@/app/redux/store' // Використовуємо RootState

const Menu = () => {
    const isOpen = useSelector((state: RootState) => state.menu.isOpen) // Використовуємо RootState
    const dispatch = useDispatch()

    return (
        <div
            className={c.menu}
            style={{
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
            }}
        >
            <div className={c.menu__header}>
                <Image
                    className={c.header__logo}
                    src="/logo.png"
                    width={140}
                    height={30}
                    alt="logo"
                />
                <button
                    className={c.menu__cancel}
                    onClick={() => dispatch({ type: TOGGLE_MENU })}
                ></button>
            </div>
            <div className={c.menu__links}>
                {links.map((link) => (
                    <Link key={link.path} href={link.path} passHref>
                        <button
                            onClick={() => dispatch({ type: TOGGLE_MENU })}
                            className={c.menu__link}
                        >
                            {link.name}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Menu

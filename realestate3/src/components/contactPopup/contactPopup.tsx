'use client'

import Contact from '../contact/Contact'
import c from './contactPopup.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/app/redux/store'
import { toggleContact } from '@/app/redux/actions'

const ContactPopup = () => {
    const display: boolean = useSelector(
        (state: RootState) => state.contact.isOpen
    )
    const dispatch: AppDispatch = useDispatch()

    return (
        <div
            className={c.container}
            style={{ display: display ? 'block' : 'none' }}
        >
            <div className={c.container__header}>
                <button
                    className={c.container__close}
                    onClick={() => dispatch(toggleContact())} // Використовуйте дію toggleContact
                ></button>
            </div>
            <Contact />
        </div>
    )
}

export default ContactPopup

import React from 'react'
import c from './PagesTop.module.scss'
import { motion } from 'framer-motion'
import { opacityAnimation } from '@/animations'

interface Props {
    text: string
}

const PagesTop: React.FC<Props> = ({ text }) => {
    return (
        <div className={c.top}>
            <motion.p
                initial="hidden"
                whileInView="visible"
                variants={opacityAnimation}
                custom={1}
                className={c.top__title}
            >
                {text}
            </motion.p>
        </div>
    )
}

export default PagesTop

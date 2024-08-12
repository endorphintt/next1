import c from './Mission.module.scss'
import Image from 'next/image'
import { mission as missionEN } from '@/app/locales/dataEN'
import { mission as missionPL } from '@/app/locales/dataPL'
import { mission as missionUA } from '@/app/locales/dataUA'
import { MissionInterface } from '@/app/locales/interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { blockToRightAnimation } from '@/animations'

const Mission = () => {
    const lan = useSelector((state: RootState) => state.lan.lan)
    const [data, setData] = useState<MissionInterface[]>(missionPL)

    useEffect(() => {
        if (lan == 'PL') {
            setData(missionPL)
        } else if (lan == 'EN') {
            setData(missionEN)
        } else {
            setData(missionUA)
        }
    }, [lan])
    return (
        <div className={c.mission}>
            {data.map((e) => (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={blockToRightAnimation}
                    key={e.name}
                    className={c.mission__item}
                >
                    <p className={c.mission__title}>{e.name}</p>
                    <div className={c.mission__text}>{e.text}</div>
                    <Image
                        src={e.img}
                        alt="ivan tsehenko"
                        width={70}
                        height={70}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default Mission

'use client'

import { text } from 'stream/consumers'
import c from './Steps.module.scss'
import { useState } from 'react'

type Props = {
    readMore: boolean
    items:
        | {
              id: number
              text: string
          }[]
        | undefined
}

const Steps: React.FC<Props> = ({ readMore, items }) => {
    return (
        <section
            className={c.steps}
            style={{ height: !readMore ? '500px' : 'auto' }}
        >
            {items ? (
                items.map((item) => (
                    <div key={item.id} className={c.item}>
                        <div className={c.item__number}>{item.id}.</div>
                        <div className={c.item__border}>
                            <span></span>
                        </div>
                        <div key={item.id} className={c.item__info}>
                            <p className={c.item__text}>{item.text}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Список порожній або невизначений.</p>
            )}
        </section>
    )
}

export default Steps

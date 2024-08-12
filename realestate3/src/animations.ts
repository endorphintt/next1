export const opacityAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: {
            delay: custom * 0.3, // Затримка перед початком анімації
            duration: 0.5, // Тривалість анімації
            ease: 'easeInOut', // Тип згладжування анімації
        },
    }),
}

export const blockToRightAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom * 0, // Затримка перед початком анімації
            duration: 0.5, // Тривалість анімації
            ease: 'easeInOut', // Тип згладжування анімації
        },
    }),
}

export const blockToLeftAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.2, // Затримка перед початком анімації
            duration: 0.5, // Тривалість анімації
            ease: 'easeInOut', // Тип згладжування анімації
        },
    }),
}

export interface HeaderInterface {
    links: { path: string; name: string }[]
    contact: string
}

export interface HomeTopInterface {
    text: string
    contact: string
}

export interface HomeOffersInterface {
    img: string
    link: string
    name: string
}

export interface HomeAboutInterface {
    title: string
    text: string
    button: string
}

export interface ScrollToContactInterface {
    text: string
}

export interface MissionInterface {
    img: string // URL або шлях до зображення
    text: string // Текст місії
    name: string // Назва місії
}

export interface ContactInterface {
    title: string
    phone: string
    email: string
    text: string
    question: string
    button: string
}

export interface FooterInterface {
    text: string
    author: string
    links: { path: string; name: string }[]
}

export interface OffersPageInterface {
    top: string
    description: string
    links: { name: string; id: number }[]
    looksLike: string
    more: string
    less: string
}

interface OffersDataInterface {
    title: string
    id: number
    steps: {
        id: number
        text: string
    }[]
    img: string
}

export interface OffersInterface {
    offersData: OffersDataInterface[]
    offersPage: OffersPageInterface
}

export interface StepInterface {
    id: number
    text: string
}

export interface AboutInterface {
    title: string
    first: string
    second: string
}

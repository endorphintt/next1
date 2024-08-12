import { TOGGLE_MENU, TOGGLE_CONTACT, TOGGLE_LANGUAGE } from './consts'

export interface ToggleMenuAction {
    type: typeof TOGGLE_MENU
}

export interface ToggleContactAction {
    type: typeof TOGGLE_CONTACT
}

export interface ToggleLanguageAction {
    type: typeof TOGGLE_LANGUAGE
    lan: string
}

export type AppActions =
    | ToggleMenuAction
    | ToggleContactAction
    | ToggleLanguageAction

export const toggleMenu = (): ToggleMenuAction => ({
    type: TOGGLE_MENU,
})

export const toggleContact = (): ToggleContactAction => ({
    type: TOGGLE_CONTACT,
})

export const toggleLanguage = (lan: string): ToggleLanguageAction => ({
    type: TOGGLE_LANGUAGE,
    lan,
})

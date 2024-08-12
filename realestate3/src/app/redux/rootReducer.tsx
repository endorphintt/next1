// reducers/rootReducer.ts
import { TOGGLE_MENU, TOGGLE_CONTACT, TOGGLE_LANGUAGE } from './consts'
import { AppActions } from './actions'

export interface RootState {
    contact: ContactState
    menu: MenuState
    lan: LanState
}

export interface ContactState {
    isOpen: boolean
}

export interface MenuState {
    isOpen: boolean
}

export interface LanState {
    lan: string
}

const initialContactState: ContactState = {
    isOpen: false,
}

const initialMenuState: MenuState = {
    isOpen: false,
}

const initialLanState: LanState = {
    lan: 'PL',
}

const rootReducer = (
    state: RootState = {
        contact: initialContactState,
        menu: initialMenuState,
        lan: initialLanState,
    },
    action: AppActions
): RootState => {
    switch (action.type) {
        case TOGGLE_CONTACT:
            return {
                ...state,
                contact: {
                    ...state.contact,
                    isOpen: !state.contact.isOpen,
                },
            }
        case TOGGLE_MENU:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    isOpen: !state.menu.isOpen,
                },
            }
        case TOGGLE_LANGUAGE:
            return {
                ...state,
                lan: {
                    ...state.lan,
                    lan: action.lan, // Тут TypeScript має розпізнати властивість lan
                },
            }
        default:
            return state
    }
}

export default rootReducer

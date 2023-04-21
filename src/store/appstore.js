import { createStore } from "redux"
const initialState = {
    openChat: false
}
const handleClassToggle = (initialState) => {
    return {...initialState, sidebar: !initialState.sidebar }
}
const changeTheme = () => {

    // if (localStorage.theme === 'dark' || (!('theme' in localStorage)
    // && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark')
    //   } else {
    //     document.documentElement.classList.remove('dark')
    //   }
    const timeout = setTimeout(() => {
        clearTimeout(timeout)
        document.documentElement.classList.toggle('dark')
    }, 450);
}
const toggleState = (initialState) => {
    setTimeout(() => {

    }, 1000);

}
const appReducer = (initialState, action) => {
    switch (action.type) {
        case "openChat":
            return {...initialState, openChat: !initialState.openChat }
        default:
            return initialState
    }
}
export const store = createStore(appReducer, initialState)
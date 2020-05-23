const setItem = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}

const getItem = key => {
    if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key))
    }
    return undefined
}

export const setUser = user => setItem('user', user)

export const getUser = () => getItem('user')

export const clear = () => window.localStorage.clear()
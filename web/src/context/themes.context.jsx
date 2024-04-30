import { createContext, useContext, useState } from "react"

const initialState = {
    theme: '', setTheme: () => { }
}

const ThemeContext = createContext(initialState);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
    const isBrowserDefaultDark = () =>
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const getDefaultTheme = () => {
        const localStorageTheme = localStorage.getItem('theme');
        console.log(localStorageTheme);
        const browserPrefferedTheme = isBrowserDefaultDark() ? 'dark' : localStorageTheme;

        return localStorageTheme || browserPrefferedTheme;
    }

    const [theme, setTheme2] = useState(getDefaultTheme());

    const setTheme = (theme) => {
        localStorage.setItem('theme', theme);
        setTheme2(theme);
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={'full-screen ' + theme + "-theme"}>
                <div id="app">
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
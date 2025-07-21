import {LOCAL_STRAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult{
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.dark ? Theme.light : Theme.dark;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STRAGE_THEME_KEY, newTheme);
    }

    return {theme, toggleTheme};
}
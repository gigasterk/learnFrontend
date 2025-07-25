import {createContext} from "react";

export enum Theme {
    light = 'light',
    dark = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STRAGE_THEME_KEY = 'theme'
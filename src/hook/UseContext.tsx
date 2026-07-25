import { createContext, useContext } from "react";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<Theme>("system");

const useGetTheme = () => useContext(ThemeContext);

export function UseContext(){

    const theme = useGetTheme();
    return (
        <div>
            <p>Current theme: {theme} </p>
        </div>
    );
}
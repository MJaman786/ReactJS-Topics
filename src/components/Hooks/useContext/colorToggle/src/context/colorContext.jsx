import { createContext, useEffect, useState } from "react";

// creating a color context
export const ColorContext = createContext();

// creating a provider
export default function ColorProvider({ children }) {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || "light";
    });
    const toggleTheme = () => {
        setTheme((prev)=>{
            return prev === "light" ? "dark" : "light"
        });
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ColorContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ColorContext.Provider>
    )
}


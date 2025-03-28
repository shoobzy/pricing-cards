import React, { createContext, useState, useEffect } from "react";

type ThemeContextType = {
    isDark: boolean;
    toggleDark: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    isDark: false,
    toggleDark: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            isDark ? "dark" : "light"
        );
    }, [isDark]);

    const toggleDark = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ isDark, toggleDark }}>
            {children}
        </ThemeContext.Provider>
    );
};

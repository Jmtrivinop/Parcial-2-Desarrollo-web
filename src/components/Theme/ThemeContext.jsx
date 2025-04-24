import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [modoOscuro, setOscuro] = useState(false);
    const toggleTema = () => setOscuro((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ modoOscuro, toggleTema }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext };
export default ThemeProvider;

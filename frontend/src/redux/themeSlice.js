import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
    return localStorage.getItem("theme") === "dark";
};

const themeSice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: getInitialTheme(),
    },
    reducers: {     
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
            const newTheme = state.isDarkMode ? "dark" : "light";
            localStorage.setItem('theme', newTheme);
            document.documentElement.classList.toggle('dark', state.isDarkMode);
        },
    },
});

export const {toggleTheme} = themeSice.actions;
export default themeSice.reducer;
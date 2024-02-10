import { ThemeProvider, Global } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoardPage from 'pages/BoardPage';
import HistoryPage from 'pages/HistoryPage';
import HomePage from 'pages/HomePage';
import SettingPage from 'pages/SettingPage';
import global from 'styles/global';
import reset from 'styles/reset';
import theme from 'styles/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={[reset, global]} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/setting" element={<SettingPage />} />
                    <Route path="/board" element={<BoardPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

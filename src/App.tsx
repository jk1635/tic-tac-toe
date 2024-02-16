import { ThemeProvider, Global } from '@emotion/react';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { GlobalPortal } from 'GlobalPortal';
import BoardPage from 'pages/BoardPage';
import HistoryPage from 'pages/HistoryPage';
import HomePage from 'pages/HomePage';
import SettingPage from 'pages/SettingPage';
import global from 'styles/global';
import reset from 'styles/reset';
import theme from 'styles/theme';

function App() {
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    return (
        <GlobalPortal.Provider>
            <ThemeProvider theme={theme}>
                <Global styles={[reset, global]} />
                <Layout>
                    <BrowserRouter>
                        <ScrollToTop />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/setting" element={<SettingPage />} />
                            <Route path="/board" element={<BoardPage />} />
                            <Route path="/history" element={<HistoryPage />} />
                        </Routes>
                    </BrowserRouter>
                </Layout>
            </ThemeProvider>
        </GlobalPortal.Provider>
    );
}

export default App;

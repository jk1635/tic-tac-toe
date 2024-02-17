import { ThemeProvider, Global } from '@emotion/react';
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { Loading } from 'components/Common';
import { Layout } from 'components/Layout';
import { GlobalPortal } from 'GlobalPortal';
import global from 'styles/global';
import reset from 'styles/reset';
import theme from 'styles/theme';

const HomePage = React.lazy(() => import('pages/HomePage'));
const BoardPage = React.lazy(() => import('pages/BoardPage'));
const HistoryPage = React.lazy(() => import('pages/HistoryPage'));
const SettingPage = React.lazy(() => import('pages/SettingPage'));
const NotFound = React.lazy(() => import('components/Common/NotFound'));

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
                        <Suspense fallback={<Loading />}>
                            <ScrollToTop />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/setting" element={<SettingPage />} />
                                <Route path="/board" element={<BoardPage />} />
                                <Route path="/history" element={<HistoryPage />} />
                                <Route path="/*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </Layout>
            </ThemeProvider>
        </GlobalPortal.Provider>
    );
}

export default App;

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BoardPage from './pages/BoardPage'
import HistoryPage from './pages/HistoryPage'
import HomePage from './pages/HomePage'
import SettingPage from './pages/SettingPage'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/setting" element={<SettingPage />} />
                    <Route path="/board" element={<BoardPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>{' '}
        </div>
    )
}

export default App

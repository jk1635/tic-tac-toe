import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Link to="/setting">게임 시작</Link>
            <Link to="/history">저장된 게임</Link>
        </div>
    );
};

export default HomePage;

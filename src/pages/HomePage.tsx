import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Link to="/setting">게임 시작</Link>
            <Link to="/history">기록된 게임 보기</Link>
            {/*TODO: 배포 전 삭제*/}
            <Link to="/board">게임 화면</Link>
        </div>
    );
};

export default HomePage;

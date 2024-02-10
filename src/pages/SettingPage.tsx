import React from 'react';
import { Link } from 'react-router-dom';

const SettingPage = () => {
    return (
        <div>
            <div>
                <label>보드 사이즈: </label>
                <select>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
            </div>
            <div>
                <label>승리 조건: </label>
                <select>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
            </div>
            <div>
                <label>Player 1 마크 모양: </label>
                <select>
                    <option>X</option>
                    <option>O</option>
                    <option>세모</option>
                    <option>체크</option>
                </select>
            </div>
            <div>
                <label>Player 2 마크 모양: </label>
                <select>
                    <option>O</option>
                    <option>X</option>
                    <option>세모</option>
                    <option>체크</option>
                </select>
            </div>
            <div>
                <label>마크 색상: </label>
                <select>
                    <option>red</option>
                    <option>yellow</option>
                    <option>blue</option>
                </select>
            </div>
            <div>
                <label>스타팅 멤버: </label>
                <select>
                    <option>랜덤</option>
                    <option>Player 1</option>
                    <option>Player 2</option>
                </select>
            </div>
            <Link to="/board">GO</Link>
        </div>
    );
};

export default SettingPage;

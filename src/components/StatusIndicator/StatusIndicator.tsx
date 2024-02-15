import React from 'react';
import { useRecoilState } from 'recoil';

import { gameSettingsState, gameStatusState } from 'stores/atoms';

import { Icon } from '../Icon';

const StatusIndicator = () => {
    const [gameSettings] = useRecoilState(gameSettingsState);
    const [gameStatus] = useRecoilState(gameStatusState);

    const currentPlayer = gameSettings.players.find(player => player.id === gameStatus.currentTurn);
    const winnerPlayer = gameSettings.players.find(player => player.id === gameStatus.winner);

    return (
        <div>
            {gameStatus.status === 'inProgress' && (
                <>
                    다음 순서:
                    <Icon color={currentPlayer?.color}>{currentPlayer?.mark}</Icon>
                </>
            )}
            {gameStatus.status === 'draw' && <span>DRAW</span>}
            {gameStatus.status === 'win' && (
                <>
                    승자:
                    <Icon color={winnerPlayer?.color}>{winnerPlayer?.mark}</Icon>
                </>
            )}
            <br />
            <span>보드 사이즈: {gameSettings.boardSize[0]}</span>
            <br />
            <span>승리 조건: {gameSettings.winCondition}</span>
        </div>
    );
};

export default StatusIndicator;

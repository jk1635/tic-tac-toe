import React from 'react';
import { useRecoilState } from 'recoil';

import { gameSettingsState, gameStatusState } from 'stores/atoms';

const StatusIndicator = () => {
    const [gameSettings] = useRecoilState(gameSettingsState);
    const [gameStatus] = useRecoilState(gameStatusState);

    return (
        <div>
            {gameStatus.status === 'inProgress' && (
                <>
                    다음 순서:
                    <span
                        style={{
                            color:
                                gameSettings.players.find(player => player.id === gameStatus.currentTurn)?.color ||
                                'black',
                        }}
                    >
                        {gameSettings.players.find(player => player.id === gameStatus.currentTurn)?.mark}
                    </span>
                </>
            )}
            {gameStatus.status === 'draw' && <span>DRAW</span>}
            {gameStatus.status === 'win' && (
                <span>Player {gameSettings.players.find(player => player.id === gameStatus.winner)?.mark} Win</span>
            )}
            <br />
            <span>보드 사이즈: {gameSettings.boardSize[0]}</span>
            <br />
            <span>승리 조건: {gameSettings.winCondition}</span>
        </div>
    );
};

export default StatusIndicator;

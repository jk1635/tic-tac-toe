import React from 'react';
import { useRecoilState } from 'recoil';

import { gameSettingsState, gameStatusState } from 'stores/atoms';

const StatusIndicator = () => {
    const [gameSettings] = useRecoilState(gameSettingsState);
    const [gameStatus] = useRecoilState(gameStatusState);

    return (
        <div>
            {gameStatus.status === 'inProgress' && (
                <span>다음 턴: {gameSettings.players.find(player => player.id === gameStatus.currentTurn)?.mark}</span>
            )}
            {gameStatus.status === 'draw' && <span>DRAW</span>}
            {gameStatus.status === 'win' && (
                <span>Player {gameSettings.players.find(player => player.id === gameStatus.winner)?.mark} Win</span>
            )}
        </div>
    );
};

export default StatusIndicator;

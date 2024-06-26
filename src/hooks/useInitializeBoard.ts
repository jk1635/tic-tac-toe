import { useRecoilState } from 'recoil';

import { Player1, Player2 } from 'constants/gameConstants';
import { boardState, gameSettingsState, gameStatusState } from 'stores/atoms';
import { PlayerId } from 'types';

const useInitializeBoard = () => {
    const [gameSettings, setGameSettings] = useRecoilState(gameSettingsState);
    const [, setGameStatus] = useRecoilState(gameStatusState);
    const [, setBoard] = useRecoilState(boardState);

    const initializeBoard = () => {
        const boardSize = gameSettings.boardSize[0];
        const newBoard = Array.from({ length: boardSize }, () => Array(boardSize).fill({ playerId: null }));

        setBoard(newBoard);

        let startingPlayerId: PlayerId;
        if (gameSettings.startingPlayer === 'random') {
            startingPlayerId = Math.random() < 0.5 ? Player1 : Player2;
        } else {
            startingPlayerId = gameSettings.startingPlayer === 'Player 1' ? Player1 : Player2;
        }

        const resetPlayers = gameSettings.players.map(player => ({
            ...player,
            backSteps: 3,
        }));

        setGameSettings(prev => ({
            ...prev,
            players: resetPlayers,
        }));

        setGameStatus({
            currentTurn: startingPlayerId as PlayerId,
            moves: [],
            status: 'inProgress',
            winner: null,
        });
    };

    return { initializeBoard };
};

export default useInitializeBoard;

import { useRecoilState } from 'recoil';

import { PLAYER_1, PLAYER_2 } from 'constants/gameConstants';
import { boardState, gameSettingsState, gameStatusState } from 'stores/atoms';
import { PlayerId } from 'types';

const useInitializeBoard = () => {
    const [gameSettings, setGameSettings] = useRecoilState(gameSettingsState);
    const [, setGameStatus] = useRecoilState(gameStatusState);
    const [, setBoard] = useRecoilState(boardState);

    const initializeBoard = () => {
        const newBoard = Array.from({ length: gameSettings.boardSize[0] }, () =>
            Array.from({ length: gameSettings.boardSize[0] }, () => ({
                playerId: null,
            }))
        );
        setBoard(newBoard);

        let startingPlayerId: PlayerId;
        if (gameSettings.startingPlayer === 'random') {
            startingPlayerId = Math.random() < 0.5 ? PLAYER_1 : PLAYER_2;
        } else {
            startingPlayerId = gameSettings.startingPlayer === 'Player 1' ? PLAYER_1 : PLAYER_2;
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
            currentTurn: startingPlayerId,
            moves: [],
            status: 'inProgress',
            winner: null,
        });
    };

    return { initializeBoard };
};

export default useInitializeBoard;

import { atom } from 'recoil';

import { Board, GameSettings, GameStatus } from '../types';

export const gameSettingsState = atom<GameSettings>({
    key: 'gameSettingsState',
    default: {
        boardSize: [3, 3],
        winCondition: 3,
        players: [
            { id: 1, mark: 'X', color: 'blue', backSteps: 3 },
            { id: 2, mark: 'O', color: 'red', backSteps: 3 },
        ],
        startingPlayer: '랜덤',
    },
});

export const gameStatusState = atom<GameStatus>({
    key: 'gameState',
    default: {
        currentTurn: 1,
        moves: [],
        status: 'inProgress',
    },
});

export const boardState = atom<Board>({
    key: 'boardState',
    default: [],
});

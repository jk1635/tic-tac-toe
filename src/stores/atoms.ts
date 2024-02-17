import { atom } from 'recoil';

import { Board, GameHistory, GameSettings, GameStatus } from 'types';

export const gameSettingsState = atom<GameSettings>({
    key: 'gameSettingsState',
    default: {
        boardSize: [3, 3],
        winCondition: 3,
        players: [
            { id: 1, mark: 'close', color: '#3182f6', backSteps: 3 },
            { id: 2, mark: 'circle', color: '#f04452', backSteps: 3 },
        ],
        startingPlayer: 'random',
    },
});

export const gameStatusState = atom<GameStatus>({
    key: 'gameState',
    default: {
        currentTurn: 1,
        moves: [],
        status: 'inProgress',
        winner: null,
    },
});

export const boardState = atom<Board>({
    key: 'boardState',
    default: [],
});

export const historyState = atom<GameHistory[]>({
    key: 'historyState',
    default: [],
});

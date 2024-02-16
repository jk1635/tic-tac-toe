import { selector } from 'recoil';

import { Player } from 'types';

import { gameSettingsState, gameStatusState } from './atoms';

export const currentPlayerState = selector<Player>({
    key: 'currentPlayerState',
    get: ({ get }) => {
        const gameSettings = get(gameSettingsState);
        const gameStatus = get(gameStatusState);
        const currentPlayer = gameSettings.players.find(player => player.id === gameStatus.currentTurn);
        if (!currentPlayer) throw new Error('현재 플레이어를 찾을 수 없습니다.');
        return currentPlayer;
    },
});

export const backAbleState = selector({
    key: 'backAbleState',
    get: ({ get }) => {
        const gameStatus = get(gameStatusState);
        const gameSettings = get(gameSettingsState);
        if (gameStatus.status !== 'inProgress') {
            return false;
        }
        const lastMove = gameStatus.moves[gameStatus.moves.length - 1];
        if (!lastMove) {
            return false;
        }
        const lastPlayerIndex = gameSettings.players.findIndex(player => player.id === lastMove.playerId);
        if (lastPlayerIndex < 0 || gameSettings.players[lastPlayerIndex].backSteps <= 0) {
            return false;
        }
        return true;
    },
});

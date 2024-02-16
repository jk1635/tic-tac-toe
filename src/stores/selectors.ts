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

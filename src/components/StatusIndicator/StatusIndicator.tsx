import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { gameSettingsState, gameStatusState } from 'stores/atoms';
import { currentPlayerState } from 'stores/selectors';

import { Icon } from '../Icon';

import * as S from './StatusIndicator.styled';

const StatusIndicator = () => {
    const [gameSettings] = useRecoilState(gameSettingsState);
    const [gameStatus] = useRecoilState(gameStatusState);
    const currentPlayer = useRecoilValue(currentPlayerState);

    const winnerPlayer = gameSettings.players.find(player => player.id === gameStatus.winner);

    return (
        <S.GameStatus>
            <S.StatusWrapper>
                <S.Number>{gameSettings.boardSize[0]}</S.Number>
                <S.Text>사이즈</S.Text>
            </S.StatusWrapper>
            <S.StatusWrapper>
                <S.Status>
                    {gameStatus.status === 'inProgress' && (
                        <Icon size={2} color={currentPlayer?.color}>
                            {currentPlayer?.mark}
                        </Icon>
                    )}
                    {gameStatus.status === 'win' && (
                        <Icon size={2} color={winnerPlayer?.color}>
                            {winnerPlayer?.mark}
                        </Icon>
                    )}
                    {gameStatus.status === 'tie' && '-'}
                </S.Status>
                <S.Text>
                    {gameStatus.status === 'tie' && '무승부'}
                    {gameStatus.status === 'win' && '승리'}
                    {gameStatus.status === 'inProgress' && '차례'}
                </S.Text>
            </S.StatusWrapper>
            <S.StatusWrapper>
                <S.Number>{gameSettings.winCondition}</S.Number>
                <S.Text>조건</S.Text>
            </S.StatusWrapper>
        </S.GameStatus>
    );
};

export default StatusIndicator;

import styled from '@emotion/styled';
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
        <GameStatus>
            <StatusWrapper>
                <Number>{gameSettings.boardSize[0]}</Number>
                <Text>사이즈</Text>
            </StatusWrapper>
            <StatusWrapper>
                <Status>
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
                </Status>
                <Text>
                    {gameStatus.status === 'tie' && '무승부'}
                    {gameStatus.status === 'win' && '승리'}
                    {gameStatus.status === 'inProgress' && '차례'}
                </Text>
            </StatusWrapper>
            <StatusWrapper>
                <Number>{gameSettings.winCondition}</Number>
                <Text>조건</Text>
            </StatusWrapper>
        </GameStatus>
    );
};

const GameStatus = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const StatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 5rem;
    height: 5rem;
    padding: 0.5rem;
`;

const Number = styled.span`
    font-size: 2rem;
    text-align: center;
`;

const Text = styled.span`
    font-size: 1rem;
    text-align: center;
`;

const Status = styled.div`
    text-align: center;
`;

export default StatusIndicator;

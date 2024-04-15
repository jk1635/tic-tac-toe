import React from 'react';
import { useRecoilState } from 'recoil';

import { historyState } from 'stores/atoms';

import { Icon } from '../Icon';

import * as S from './LogBoard.styled';

const LogBoard = () => {
    const [history] = useRecoilState(historyState);

    return (
        <>
            {history.map((gameHistory, index) => {
                const result = gameHistory.players.find(p => p.id === gameHistory.winner);

                return (
                    <S.BoardContainer key={index}>
                        <div>
                            <S.Title>게임 {index + 1}</S.Title>
                            <S.Result>
                                {gameHistory.isTie && <S.Text>무승부</S.Text>}
                                {!gameHistory.isTie && (
                                    <>
                                        <Icon size={1} color={result?.color} bold>
                                            {result?.mark}
                                        </Icon>
                                        <S.Text>승리</S.Text>
                                    </>
                                )}
                            </S.Result>
                        </div>
                        <S.TableWrapper>
                            <S.Table>
                                {gameHistory.finalBoard.map((row, rowIndex) => (
                                    <div key={rowIndex} style={{ display: 'flex' }}>
                                        {row.map((cell, cellIndex) => {
                                            const player = gameHistory.players.find(
                                                player => player.id === cell.playerId
                                            );
                                            const move = gameHistory.moves.find(
                                                move => move.position[0] === rowIndex && move.position[1] === cellIndex
                                            );
                                            return (
                                                <S.Cell
                                                    key={cellIndex}
                                                    boardLength={row.length}
                                                    isLastRow={rowIndex === row.length - 1}
                                                    isLastCell={cellIndex === row.length - 1}
                                                >
                                                    <Icon color={player?.color}>{player?.mark}</Icon>
                                                    {move && <S.MoveOrders>{move.moveOrders}</S.MoveOrders>}
                                                </S.Cell>
                                            );
                                        })}
                                    </div>
                                ))}
                            </S.Table>
                        </S.TableWrapper>
                    </S.BoardContainer>
                );
            })}
        </>
    );
};

export default LogBoard;

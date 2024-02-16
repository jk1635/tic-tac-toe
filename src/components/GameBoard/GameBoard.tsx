import React from 'react';
import { useRecoilState } from 'recoil';

import { PLAYER_1, PLAYER_2 } from 'constants/gameConstants';
import useGameStatus from 'hooks/useGameStatus';
import { boardState, gameSettingsState, gameStatusState } from 'stores/atoms';
import { Move } from 'types';

import { Icon } from '../Icon';

import * as S from './GameBoard.styled';

const GameBoard = () => {
    const [gameSettings] = useRecoilState(gameSettingsState);
    const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
    const [board, setBoard] = useRecoilState(boardState);

    const { updateBoard, checkWin, checkTie } = useGameStatus();

    const handleCellClick = (row: number, col: number): void => {
        if (board[row][col].playerId || gameStatus.status !== 'inProgress') {
            return;
        }

        const newMove: Move = {
            playerId: gameStatus.currentTurn,
            position: [row, col],
            moveOrders: gameStatus.moves.length + 1,
        };

        const updatedBoard = updateBoard(board, row, col, gameStatus.currentTurn);
        setBoard(updatedBoard);

        const isWin = checkWin(updatedBoard, gameStatus.currentTurn, gameSettings.winCondition);
        const isTie = checkTie(updatedBoard);

        setGameStatus(prev => ({
            ...prev,
            moves: [...prev.moves, newMove],
            currentTurn: prev.currentTurn === PLAYER_1 ? PLAYER_2 : PLAYER_1,
            ...(isWin && { status: 'win', winner: gameStatus.currentTurn }),
            ...(isTie && { status: 'tie' }),
        }));
    };

    return (
        <S.BoardContainer>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((cell, cellIndex) => {
                        const checkPlayer = gameSettings.players.find(player => player.id === cell.playerId);
                        return (
                            <S.Cell
                                key={cellIndex}
                                isLastRow={rowIndex === board.length - 1}
                                isLastCell={cellIndex === board.length - 1}
                                onClick={() => handleCellClick(rowIndex, cellIndex)}
                                boardLength={board.length}
                            >
                                {checkPlayer?.mark && (
                                    <Icon color={checkPlayer.color} size={2.5} bold>
                                        {checkPlayer.mark}
                                    </Icon>
                                )}
                            </S.Cell>
                        );
                    })}
                </div>
            ))}
        </S.BoardContainer>
    );
};

export default GameBoard;

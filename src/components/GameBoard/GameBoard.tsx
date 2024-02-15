import React from 'react';
import { useRecoilState } from 'recoil';

import { PLAYER_1, PLAYER_2 } from 'constants/gameConstants';
import useGameStatus from 'hooks/useGameStatus';
import { boardState, gameSettingsState, gameStatusState } from 'stores/atoms';
import { Move } from 'types';

import * as S from './GameBoard.styled';

const GameBoard = () => {
    const [gameSettings] = useRecoilState(gameSettingsState);
    const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
    const [board, setBoard] = useRecoilState(boardState);

    const { updateBoard, checkWin, checkDraw } = useGameStatus();

    const handleCellClick = (row: number, col: number): void => {
        if (board[row][col].playerId || gameStatus.status !== 'inProgress') {
            return;
        }

        const newMove: Move = {
            playerId: gameStatus.currentTurn,
            position: [row, col],
            moveNumber: gameStatus.moves.length + 1,
        };

        const updatedBoard = updateBoard(board, row, col, gameStatus.currentTurn);

        setBoard(updatedBoard);
        setGameStatus(prev => ({
            ...prev,
            moves: [...prev.moves, newMove],
            currentTurn: prev.currentTurn === PLAYER_1 ? PLAYER_2 : PLAYER_1,
        }));

        if (checkWin(updatedBoard, gameStatus.currentTurn, gameSettings.winCondition)) {
            setGameStatus(prev => ({
                ...prev,
                status: 'win',
                winner: gameStatus.currentTurn,
            }));
        } else if (checkDraw(updatedBoard)) {
            setGameStatus(prev => ({
                ...prev,
                status: 'draw',
            }));
        }
    };

    return (
        <S.BoardContainer>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((cell, cellIndex) => {
                        const checkPlayer = gameSettings.players.find(player => player.id === cell.playerId);
                        const playerColor = checkPlayer ? checkPlayer.color : 'black';
                        return (
                            <S.Cell
                                key={cellIndex}
                                isLastRow={rowIndex === board.length - 1}
                                isLastCell={cellIndex === board.length - 1}
                                onClick={() => handleCellClick(rowIndex, cellIndex)}
                                color={playerColor}
                                boardSize={board.length}
                            >
                                {checkPlayer?.mark ? (
                                    <span className="material-symbols-outlined">{checkPlayer.mark}</span>
                                ) : (
                                    ''
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

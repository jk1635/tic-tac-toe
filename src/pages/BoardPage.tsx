import React, { useEffect, useState } from 'react';

import { Board, GameSettings, GameState, Move, PlayerId } from '../types';

const BoardPage: React.FC = () => {
    const [gameSettings, setGameSettings] = useState<GameSettings>({
        boardSize: [3, 3],
        winCondition: 3,
        players: [
            { id: 1, mark: 'X', color: 'blue', backSteps: 3 },
            { id: 2, mark: 'O', color: 'red', backSteps: 3 },
        ],
        startingPlayer: '랜덤',
    });

    const [gameState, setGameState] = useState<GameState>({
        currentTurn: 1,
        moves: [],
        status: 'inProgress',
    });

    const [board, setBoard] = useState<Board>([]);

    useEffect(() => {
        initializeGame();
    }, [gameSettings.boardSize, gameSettings.winCondition]);

    const initializeGame = () => {
        const newBoard = Array.from({ length: gameSettings.boardSize[0] }, () =>
            Array.from({ length: gameSettings.boardSize[0] }, () => ({
                playerId: null,
            }))
        );
        setBoard(newBoard);

        let startingPlayerId: PlayerId;
        if (gameSettings.startingPlayer === '랜덤') {
            startingPlayerId = Math.random() < 0.5 ? 1 : 2;
        } else {
            startingPlayerId = gameSettings.startingPlayer === 'Player 1' ? 1 : 2;
        }

        const resetPlayers = gameSettings.players.map(player => ({
            ...player,
            backSteps: 3,
        }));

        setGameSettings(prev => ({
            ...prev,
            players: resetPlayers,
        }));

        setGameState({
            currentTurn: startingPlayerId,
            moves: [],
            status: 'inProgress',
            winner: null,
        });
    };

    const handleBoardSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = parseInt(event.target.value, 10);

        setGameSettings(prevSettings => ({
            ...prevSettings,
            boardSize: [newSize, newSize],
            winCondition: 3,
        }));
    };

    const handleWinConditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newWinCondition = parseInt(event.target.value, 10);

        setGameSettings(prevSettings => ({
            ...prevSettings,
            winCondition: newWinCondition,
        }));
    };

    const updateBoard = (board: Board, targetRow: number, targetCol: number, playerId: PlayerId): Board => {
        return board.map((currentRow, rowIndex) =>
            currentRow.map((currentCell, colIndex) =>
                rowIndex === targetRow && colIndex === targetCol ? { ...currentCell, playerId } : currentCell
            )
        );
    };

    const checkWin = (board: Board, playerId: PlayerId, winCondition: number): boolean => {
        const boardLength = board.length;

        // 가로 검사
        for (let row = 0; row < boardLength; row++) {
            let count = 0;
            for (let col = 0; col < boardLength; col++) {
                if (board[row][col].playerId === playerId) {
                    count++;
                    if (count === winCondition) return true;
                } else {
                    count = 0;
                }
            }
        }

        // 세로 검사
        for (let col = 0; col < boardLength; col++) {
            let count = 0;
            for (let row = 0; row < boardLength; row++) {
                if (board[row][col].playerId === playerId) {
                    count++;
                    if (count === winCondition) return true;
                } else {
                    count = 0;
                }
            }
        }

        // 대각선 검사: 왼쪽 상단에서 오른쪽 하단
        for (let row = 0; row < boardLength; row++) {
            for (let col = 0; col < boardLength; col++) {
                let count = 0;
                for (let i = 0; i < winCondition && row + i < boardLength && col + i < boardLength; i++) {
                    if (board[row + i][col + i].playerId === playerId) {
                        count++;
                        if (count === winCondition) return true;
                    } else {
                        break;
                    }
                }
            }
        }

        // 대각선 검사: 오른쪽 상단에서 왼쪽 하단
        for (let row = 0; row < boardLength; row++) {
            for (let col = 0; col < boardLength; col++) {
                let count = 0;
                for (let i = 0; i < winCondition && row + i < boardLength && col - i >= 0; i++) {
                    if (board[row + i][col - i].playerId === playerId) {
                        count++;
                        if (count === winCondition) return true;
                    } else {
                        break;
                    }
                }
            }
        }

        return false;
    };

    const checkDraw = (board: Board): boolean => {
        const boardLength = board.length;

        for (let row = 0; row < boardLength; row++) {
            for (let col = 0; col < boardLength; col++) {
                if (board[row][col].playerId === null) {
                    return false;
                }
            }
        }

        return true;
    };

    const handleCellClick = (row: number, col: number): void => {
        if (board[row][col].playerId || gameState.status !== 'inProgress') {
            return;
        }

        const newMove: Move = {
            playerId: gameState.currentTurn,
            position: [row, col],
            moveNumber: gameState.moves.length + 1,
        };

        const updatedBoard = updateBoard(board, row, col, gameState.currentTurn);

        setBoard(updatedBoard);
        setGameState(prevState => ({
            ...prevState,
            moves: [...prevState.moves, newMove],
            currentTurn: prevState.currentTurn === 1 ? 2 : 1,
        }));

        if (checkWin(updatedBoard, gameState.currentTurn, gameSettings.winCondition)) {
            setGameState(prevState => ({
                ...prevState,
                status: 'win',
                winner: gameState.currentTurn,
            }));
        } else if (checkDraw(updatedBoard)) {
            setGameState(prevState => ({
                ...prevState,
                status: 'draw',
            }));
        }
    };

    const lastMove = gameState.moves[gameState.moves.length - 1];
    const lastPlayerIndex = lastMove ? gameSettings.players.findIndex(player => player.id === lastMove.playerId) : -1;
    const isBackStepsDisabled =
        lastPlayerIndex === -1 ||
        gameSettings.players[lastPlayerIndex].backSteps <= 0 ||
        gameState.status !== 'inProgress';

    const handleBackSteps = () => {
        if (gameState.moves.length > 0 && gameState.status === 'inProgress') {
            const previousBoard = board.map((row, rowIndex) =>
                row.map((cell, cellIndex) => {
                    if (rowIndex === lastMove.position[0] && cellIndex === lastMove.position[1]) {
                        return { ...cell, playerId: null };
                    }
                    return cell;
                })
            );

            const updatedPlayers = gameSettings.players.map(player => {
                if (player.id === lastMove.playerId) {
                    return { ...player, backSteps: player.backSteps > 0 ? player.backSteps - 1 : 0 };
                }
                return player;
            });

            const updatedMoves = gameState.moves.slice(0, -1);

            setBoard(previousBoard);
            setGameState(prevState => ({
                ...prevState,
                moves: updatedMoves,
                currentTurn: lastMove.playerId,
            }));
            setGameSettings(prevSettings => ({
                ...prevSettings,
                players: updatedPlayers,
            }));
        }
    };

    const resetGame = () => {
        initializeGame();
    };

    return (
        <div>
            <div>
                <label htmlFor="boardSize">보드 사이즈: </label>
                <select id="boardSize" value={gameSettings.boardSize[0]} onChange={handleBoardSizeChange}>
                    {Array.from({ length: 10 }, (_, i) => i + 3).map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <label htmlFor="winCondition">승리 조건: </label>
                <select id="winCondition" value={gameSettings.winCondition} onChange={handleWinConditionChange}>
                    {Array.from({ length: gameSettings.boardSize[0] - 2 }, (_, i) => i + 3).map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                {gameState.status === 'inProgress' && (
                    <span>
                        다음 턴: {gameSettings.players.find(player => player.id === gameState.currentTurn)?.mark}
                    </span>
                )}
                {gameState.status === 'draw' && <span>DRAW</span>}
                {gameState.status === 'win' && (
                    <span>Player {gameSettings.players.find(player => player.id === gameState.winner)?.mark} Win</span>
                )}
            </div>

            <div>
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex' }}>
                        {row.map((cell, cellIndex) => {
                            const checkPlayer = gameSettings.players.find(player => player.id === cell.playerId);
                            return (
                                <div
                                    key={cellIndex}
                                    onClick={() => handleCellClick(rowIndex, cellIndex)}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        border: '1px solid black',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: checkPlayer?.color || 'black',
                                    }}
                                >
                                    {checkPlayer?.mark || ''}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div>
                {gameSettings.players.map((player, index) => (
                    <div key={index}>
                        <span>
                            {player.mark} 무르기 남은 횟수: {player.backSteps}회
                        </span>
                    </div>
                ))}
                <button onClick={handleBackSteps} disabled={isBackStepsDisabled}>
                    무르기
                </button>
                <button onClick={resetGame}>리셋</button>
            </div>
        </div>
    );
};

export default BoardPage;

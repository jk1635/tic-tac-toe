import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import useInitializeBoard from 'hooks/useInitializeBoard';
import { boardState, gameSettingsState, gameStatusState, historyState } from 'stores/atoms';
import { GameHistory } from 'types';

const PlayAction = () => {
    const [gameSettings, setGameSettings] = useRecoilState(gameSettingsState);
    const [gameStatus, setGameStatus] = useRecoilState(gameStatusState);
    const [board, setBoard] = useRecoilState(boardState);
    const [, setHistory] = useRecoilState(historyState);

    const { initializeBoard } = useInitializeBoard();

    useEffect(() => {
        initializeBoard();
    }, [gameSettings.boardSize, gameSettings.winCondition]);

    const handleBackSteps = () => {
        if (gameStatus.moves.length > 0 && gameStatus.status === 'inProgress') {
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

            const updatedMoves = gameStatus.moves.slice(0, -1);

            setBoard(previousBoard);

            setGameStatus(prev => ({
                ...prev,
                moves: updatedMoves,
                currentTurn: lastMove.playerId,
            }));

            setGameSettings(prevSettings => ({
                ...prevSettings,
                players: updatedPlayers,
            }));
        }
    };

    const handleResetGame = () => {
        initializeBoard();
    };

    const handleSaveHistory = () => {
        if (gameStatus.status === 'win' || gameStatus.status === 'draw') {
            const newGameRecord: GameHistory = {
                finalBoard: board,
                winner: gameStatus.winner,
                isDraw: gameStatus.status === 'draw',
                moves: gameStatus.moves,
                players: gameSettings.players,
            };

            setHistory(prev => [...prev, newGameRecord]);
        }
    };

    const lastMove = gameStatus.moves[gameStatus.moves.length - 1];
    const lastPlayerIndex = lastMove ? gameSettings.players.findIndex(player => player.id === lastMove.playerId) : -1;
    const isBackStepsDisabled =
        lastPlayerIndex === -1 ||
        gameSettings.players[lastPlayerIndex].backSteps <= 0 ||
        gameStatus.status !== 'inProgress';

    return (
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
            <button onClick={handleResetGame}>리셋</button>
            <button onClick={handleSaveHistory}>저장</button>
            <Link to="/history">저장된 기록 보기</Link>
        </div>
    );
};

export default PlayAction;

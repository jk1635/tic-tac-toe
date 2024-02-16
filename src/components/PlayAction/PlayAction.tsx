import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import useInitializeBoard from 'hooks/useInitializeBoard';
import { boardState, gameSettingsState, gameStatusState, historyState } from 'stores/atoms';
import theme from 'styles/theme';
import { GameHistory } from 'types';

import { FixedBottom } from '../FixedBottom';
import { Icon } from '../Icon';

import * as S from './PlayAction.styled';

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
        if (gameStatus.status === 'win' || gameStatus.status === 'tie') {
            const newGameRecord: GameHistory = {
                finalBoard: board,
                winner: gameStatus.winner,
                isTie: gameStatus.status === 'tie',
                moves: gameStatus.moves,
                players: gameSettings.players,
            };

            setHistory(prev => [...prev, newGameRecord]);
            alert('게임 기록이 저장되었습니다.');
        } else {
            alert('게임을 완료해주세요.');
        }
    };

    const lastMove = gameStatus.moves[gameStatus.moves.length - 1];
    const lastPlayerIndex = lastMove ? gameSettings.players.findIndex(player => player.id === lastMove.playerId) : -1;
    const isBackStepsDisabled =
        lastPlayerIndex === -1 ||
        gameSettings.players[lastPlayerIndex].backSteps <= 0 ||
        gameStatus.status !== 'inProgress';

    return (
        <S.GameActions>
            <S.ActionWrapper>
                <S.IconButton onClick={handleBackSteps} disabled={isBackStepsDisabled}>
                    <Icon size={2} color={theme.colors.gray}>
                        history
                    </Icon>
                </S.IconButton>
                <S.Text>무르기</S.Text>
            </S.ActionWrapper>
            {gameSettings.players.map((player, index) => (
                <S.RemainingBackSteps key={`player-${index}`}>
                    <S.BackStepStatus>
                        <Icon size={2} color={player.color}>
                            {player.mark}
                        </Icon>
                    </S.BackStepStatus>
                    <S.BackStepStatus>{player.backSteps}회</S.BackStepStatus>
                </S.RemainingBackSteps>
            ))}
            <S.ActionWrapper>
                <S.IconButton onClick={handleResetGame}>
                    <Icon size={2} color={theme.colors.gray}>
                        restart_alt
                    </Icon>
                </S.IconButton>
                <S.Text>다시하기</S.Text>
            </S.ActionWrapper>
            <FixedBottom onClick={handleSaveHistory}>Save</FixedBottom>
        </S.GameActions>
    );
};

export default PlayAction;

import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import useInitializeBoard from 'hooks/useInitializeBoard';
import { boardState, gameSettingsState, gameStatusState, historyState } from 'stores/atoms';
import { backAbleState } from 'stores/selectors';
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

    const isBackSteps = useRecoilValue(backAbleState);

    const { initializeBoard } = useInitializeBoard();

    const handleBackSteps = () => {
        if (gameStatus.moves.length === 0 || gameStatus.status !== 'inProgress') return;

        const lastMove = gameStatus.moves[gameStatus.moves.length - 1];

        const previousBoard = board.map((row, rowIndex) =>
            row.map((cell, cellIndex) => {
                if (rowIndex === lastMove.position[0] && cellIndex === lastMove.position[1]) {
                    return { ...cell, playerId: null };
                }
                return cell;
            })
        );

        const updatedPlayers = gameSettings.players.map(player =>
            player.id === lastMove.playerId ? { ...player, backSteps: Math.max(player.backSteps - 1, 0) } : player
        );

        const updatedMoves = gameStatus.moves.slice(0, -1);

        setBoard(previousBoard);
        setGameStatus(prev => ({
            ...prev,
            moves: updatedMoves,
            currentTurn: lastMove.playerId,
        }));
        setGameSettings(prev => ({
            ...prev,
            players: updatedPlayers,
        }));
    };

    const handleResetGame = () => {
        initializeBoard();
    };

    useEffect(() => {
        initializeBoard();
    }, [gameSettings.boardSize, gameSettings.winCondition]);

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

    return (
        <S.GameActions>
            <S.ActionWrapper>
                <S.IconButton onClick={handleBackSteps} disabled={!isBackSteps}>
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

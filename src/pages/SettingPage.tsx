import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { Select } from 'components/Select';
import { playerColorOptions, playerMarkOptions, startingPlayerOptions } from 'constants/gameConstants';
import { gameSettingsState } from 'stores/atoms';
import { PlayerColor, PlayerMark, StartingPlayer } from 'types';

const SettingPage = () => {
    const [gameSettings, setGameSettings] = useRecoilState(gameSettingsState);

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

    const handlePlayer1MarkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newMark = event.target.value;

        setGameSettings(prevSettings => ({
            ...prevSettings,
            players: prevSettings.players.map(player =>
                player.id === 1 ? { ...player, mark: newMark as PlayerMark } : player
            ),
        }));
    };

    const handlePlayer2MarkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newMark = event.target.value;

        setGameSettings(prevSettings => ({
            ...prevSettings,
            players: prevSettings.players.map(player =>
                player.id === 2 ? { ...player, mark: newMark as PlayerMark } : player
            ),
        }));
    };

    const handlePlayer1ColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newColor = event.target.value;

        setGameSettings(prevSettings => ({
            ...prevSettings,
            players: prevSettings.players.map(player =>
                player.id === 1 ? { ...player, color: newColor as PlayerColor } : player
            ),
        }));
    };

    const handlePlayer2ColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newColor = event.target.value;

        setGameSettings(prevSettings => ({
            ...prevSettings,
            players: prevSettings.players.map(player =>
                player.id === 2 ? { ...player, color: newColor as PlayerColor } : player
            ),
        }));
    };

    const handleStartingPlayerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStartingPlayer = event.target.value;

        setGameSettings(prev => ({
            ...prev,
            startingPlayer: newStartingPlayer as StartingPlayer,
        }));
    };

    return (
        <div>
            <Select
                label="보드 사이즈"
                id="boardSize"
                value={String(gameSettings.boardSize[0])}
                onChange={handleBoardSizeChange}
                options={Array.from({ length: 8 }, (_, i) => ({
                    value: String(i + 3),
                    label: String(i + 3),
                }))}
            />
            <Select
                label="승리 조건"
                id="winCondition"
                value={String(gameSettings.winCondition)}
                onChange={handleWinConditionChange}
                options={Array.from({ length: gameSettings.boardSize[0] - 2 }, (_, i) => ({
                    value: String(i + 3),
                    label: String(i + 3),
                }))}
            />
            <Select
                label="Player 1 마크"
                id="player1Mark"
                value={gameSettings.players[0].mark}
                onChange={handlePlayer1MarkChange}
                options={playerMarkOptions.map(option => ({ value: option.value, label: option.label }))}
            />
            <Select
                label="Player 1 색상"
                id="player1Color"
                value={gameSettings.players[0].color}
                onChange={handlePlayer1ColorChange}
                options={playerColorOptions.map(option => ({ value: option.value, label: option.label }))}
            />
            <Select
                label="Player 2 마크"
                id="player2Mark"
                value={gameSettings.players[1].mark}
                onChange={handlePlayer2MarkChange}
                options={playerMarkOptions.map(option => ({ value: option.value, label: option.label }))}
            />
            <Select
                label="Player 2 색상"
                id="player2Color"
                value={gameSettings.players[1].color}
                onChange={handlePlayer2ColorChange}
                options={playerColorOptions.map(option => ({ value: option.value, label: option.label }))}
            />
            <Select
                label="스타팅 멤버"
                id="player2Color"
                value={gameSettings.startingPlayer}
                onChange={handleStartingPlayerChange}
                options={startingPlayerOptions.map(option => ({ value: option.value, label: option.label }))}
            />
            <Link to="/board">GO</Link>
        </div>
    );
};

export default SettingPage;

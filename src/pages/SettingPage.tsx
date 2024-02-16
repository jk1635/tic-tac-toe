import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import BasicContainer from 'components/Common/BasicContainer';
import { FixedBottom } from 'components/FixedBottom';
import { Header } from 'components/Header';
import { Icon } from 'components/Icon';
import SelectOption from 'components/Select/Select';
import { playerColorOptions, playerMarkOptions, startingPlayerOptions } from 'constants/gameConstants';
import { gameSettingsState } from 'stores/atoms';
import theme from 'styles/theme';
import { Option, PlayerColor, PlayerMark, StartingPlayer } from 'types';

const SettingPage = () => {
    const navigate = useNavigate();

    const [gameSettings, setGameSettings] = useRecoilState(gameSettingsState);

    const handleResetSettings = () => {
        setGameSettings({
            boardSize: [3, 3],
            winCondition: 3,
            players: [
                { id: 1, mark: 'close', color: 'blue', backSteps: 3 },
                { id: 2, mark: 'circle', color: 'red', backSteps: 3 },
            ],
            startingPlayer: 'random',
        });
    };

    const boardSizeOptions: Option[] = Array.from({ length: 8 }, (_, i) => ({
        value: String(i + 3),
        label: `${i + 3} x ${i + 3}`,
    }));

    const winConditionOptions: Option[] = Array.from({ length: gameSettings.boardSize[0] - 2 }, (_, i) => ({
        value: String(i + 3),
        label: String(i + 3),
    }));

    const handleBoardSizeChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newSize = parseInt(selectedOption.value, 10);

        setGameSettings(prev => ({
            ...prev,
            boardSize: [newSize, newSize],
            winCondition: 3,
        }));
    };

    const handleWinConditionChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newWinCondition = parseInt(selectedOption.value, 10);

        setGameSettings(prev => ({
            ...prev,
            winCondition: newWinCondition,
        }));
    };

    const handlePlayer1MarkChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newMark = selectedOption.value;

        setGameSettings(prev => ({
            ...prev,
            players: prev.players.map(player =>
                player.id === 1 ? { ...player, mark: newMark as PlayerMark } : player
            ),
        }));
    };

    const handlePlayer2MarkChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newMark = selectedOption.value;

        setGameSettings(prev => ({
            ...prev,
            players: prev.players.map(player =>
                player.id === 2 ? { ...player, mark: newMark as PlayerMark } : player
            ),
        }));
    };

    const handlePlayer1ColorChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newColor = selectedOption.value;

        setGameSettings(prev => ({
            ...prev,
            players: prev.players.map(player =>
                player.id === 1 ? { ...player, color: newColor as PlayerColor } : player
            ),
        }));
    };

    const handlePlayer2ColorChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newColor = selectedOption.value;

        setGameSettings(prev => ({
            ...prev,
            players: prev.players.map(player =>
                player.id === 2 ? { ...player, color: newColor as PlayerColor } : player
            ),
        }));
    };

    const handleStartingPlayerChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newStartingPlayer = selectedOption.value;

        setGameSettings(prev => ({
            ...prev,
            startingPlayer: newStartingPlayer as StartingPlayer,
        }));
    };

    return (
        <BasicContainer>
            <Header />
            <Clear onClick={handleResetSettings}>
                <Icon size={1.25} color={theme.colors.gray}>
                    restart_alt
                </Icon>
            </Clear>
            <SelectOption
                label="보드 사이즈"
                options={boardSizeOptions}
                value={boardSizeOptions.find(option => option.value === String(gameSettings.boardSize[0])) || null}
                defaultValue={boardSizeOptions.find(option => option.value === String(gameSettings.boardSize[0]))}
                onChange={handleBoardSizeChange}
            />
            <SelectOption
                label="승리 조건"
                options={winConditionOptions}
                value={winConditionOptions.find(option => option.value === String(gameSettings.winCondition)) || null}
                onChange={handleWinConditionChange}
            />
            <SelectOption
                label="Player 1 마크"
                options={playerMarkOptions}
                value={playerMarkOptions.find(option => option.value === gameSettings.players[0].mark) || null}
                onChange={handlePlayer1MarkChange}
            />
            <SelectOption
                label="Player 1 색상"
                options={playerColorOptions}
                value={playerColorOptions.find(option => option.value === gameSettings.players[0].color) || null}
                onChange={handlePlayer1ColorChange}
            />
            <SelectOption
                label="Player 2 마크"
                options={playerMarkOptions}
                value={playerMarkOptions.find(option => option.value === gameSettings.players[1].mark) || null}
                onChange={handlePlayer2MarkChange}
            />
            <SelectOption
                label="Player 2 색상"
                options={playerColorOptions}
                value={playerColorOptions.find(option => option.value === gameSettings.players[1].color) || null}
                onChange={handlePlayer2ColorChange}
            />
            <SelectOption
                label="스타팅 멤버"
                options={startingPlayerOptions}
                value={startingPlayerOptions.find(option => option.value === gameSettings.startingPlayer) || null}
                onChange={handleStartingPlayerChange}
            />
            <FixedBottom
                onClick={() => {
                    navigate('/board');
                }}
            >
                Start
            </FixedBottom>
        </BasicContainer>
    );
};

const Clear = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1rem;
    margin-top: -1.5rem;
`;

export default SettingPage;

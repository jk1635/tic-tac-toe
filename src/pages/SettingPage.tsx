import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useRecoilState } from 'recoil';

import { playerColorOptions, playerMarkOptions, startingPlayerOptions } from 'constants/gameConstants';
import { gameSettingsState } from 'stores/atoms';
import { Option, PlayerColor, PlayerMark, StartingPlayer } from 'types';

import theme from '../styles/theme';

const SettingPage = () => {
    const [gameSettings, setGameSettings] = useRecoilState(gameSettingsState);

    const handleBoardSizeChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newSize = parseInt(selectedOption.value, 10);

        setGameSettings(prevSettings => ({
            ...prevSettings,
            boardSize: [newSize, newSize],
            winCondition: 3,
        }));
    };

    const handleWinConditionChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newWinCondition = parseInt(selectedOption.value, 10);

        setGameSettings(prevSettings => ({
            ...prevSettings,
            winCondition: newWinCondition,
        }));
    };

    const handlePlayer1MarkChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newMark = selectedOption.value;

        setGameSettings(prevSettings => ({
            ...prevSettings,
            players: prevSettings.players.map(player =>
                player.id === 1 ? { ...player, mark: newMark as PlayerMark } : player
            ),
        }));
    };

    const handlePlayer2MarkChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newMark = selectedOption.value;

        setGameSettings(prevSettings => ({
            ...prevSettings,
            players: prevSettings.players.map(player =>
                player.id === 2 ? { ...player, mark: newMark as PlayerMark } : player
            ),
        }));
    };

    const handlePlayer1ColorChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newColor = selectedOption.value;

        setGameSettings(prevSettings => ({
            ...prevSettings,
            players: prevSettings.players.map(player =>
                player.id === 1 ? { ...player, color: newColor as PlayerColor } : player
            ),
        }));
    };

    const handlePlayer2ColorChange = (selectedOption: Option | null) => {
        if (!selectedOption) return;
        const newColor = selectedOption.value;

        setGameSettings(prevSettings => ({
            ...prevSettings,
            players: prevSettings.players.map(player =>
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

    const boardSizeOptions: Option[] = Array.from({ length: 8 }, (_, i) => ({
        value: String(i + 3),
        label: `${i + 3} x ${i + 3}`,
    }));

    const winConditionOptions: Option[] = Array.from({ length: gameSettings.boardSize[0] - 2 }, (_, i) => ({
        value: String(i + 3),
        label: String(i + 3),
    }));

    return (
        <div>
            <SelectWrapper>
                <span>보드 사이즈</span>
                <Select
                    name="보드 사이즈"
                    options={boardSizeOptions}
                    defaultValue={boardSizeOptions.find(option => option.value === String(gameSettings.boardSize[0]))}
                    value={boardSizeOptions.find(option => option.value === String(gameSettings.boardSize[0]))}
                    onChange={handleBoardSizeChange}
                    styles={SelectStyle}
                    menuPortalTarget={document.body}
                />
            </SelectWrapper>
            <SelectWrapper>
                <span>승리 조건</span>
                <Select
                    name="승리 조건"
                    options={winConditionOptions}
                    defaultValue={winConditionOptions.find(
                        option => option.value === String(gameSettings.winCondition)
                    )}
                    value={winConditionOptions.find(option => option.value === String(gameSettings.winCondition))}
                    onChange={handleWinConditionChange}
                    styles={SelectStyle}
                    menuPortalTarget={document.body}
                />
            </SelectWrapper>
            <SelectWrapper>
                <span>Player 1 마크</span>
                <Select
                    name="Player 1 마크"
                    options={playerMarkOptions}
                    defaultValue={playerMarkOptions.find(option => option.value === gameSettings.players[0].mark)}
                    value={playerMarkOptions.find(option => option.value === gameSettings.players[0].mark)}
                    onChange={handlePlayer1MarkChange}
                    styles={SelectStyle}
                    menuPortalTarget={document.body}
                />
            </SelectWrapper>
            <SelectWrapper>
                <span>Player 1 색상</span>
                <Select
                    name="Player 1 색상"
                    options={playerColorOptions}
                    defaultValue={playerColorOptions.find(option => option.value === gameSettings.players[0].color)}
                    value={playerColorOptions.find(option => option.value === gameSettings.players[0].color)}
                    onChange={handlePlayer1ColorChange}
                    styles={SelectStyle}
                    menuPortalTarget={document.body}
                />
            </SelectWrapper>
            <SelectWrapper>
                <span>Player 2 마크</span>
                <Select
                    name="Player 2 마크"
                    options={playerMarkOptions}
                    defaultValue={playerMarkOptions.find(option => option.value === gameSettings.players[1].mark)}
                    value={playerMarkOptions.find(option => option.value === gameSettings.players[1].mark)}
                    onChange={handlePlayer2MarkChange}
                    styles={SelectStyle}
                    menuPortalTarget={document.body}
                />
            </SelectWrapper>
            <SelectWrapper>
                <span>Player 2 색상</span>
                <Select
                    name="Player 2 색상"
                    options={playerColorOptions}
                    defaultValue={playerColorOptions.find(option => option.value === gameSettings.players[1].color)}
                    value={playerColorOptions.find(option => option.value === gameSettings.players[1].color)}
                    onChange={handlePlayer2ColorChange}
                    styles={SelectStyle}
                    menuPortalTarget={document.body}
                />
            </SelectWrapper>

            <SelectWrapper>
                <span>스타팅 멤버</span>
                <Select
                    name="스타팅 멤버"
                    options={startingPlayerOptions}
                    defaultValue={startingPlayerOptions.find(option => option.value === gameSettings.startingPlayer)}
                    value={startingPlayerOptions.find(option => option.value === gameSettings.startingPlayer)}
                    onChange={handleStartingPlayerChange}
                    styles={SelectStyle}
                    menuPortalTarget={document.body}
                />
            </SelectWrapper>
            <LinkWrapper>
                <Link to="/board">Start</Link>
            </LinkWrapper>
        </div>
    );
};

const SelectWrapper = styled.div`
    position: relative;
    margin-bottom: 2rem;

    & > span {
        position: absolute;
        top: -0.438rem;
        left: 0.5rem;
        z-index: 10;
        padding: 0 0.25rem;
        background-color: white;
        font-size: 0.875rem;
    }
`;

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.5rem;
    padding: 0 1rem;
    text-transform: uppercase;
    border-radius: 0.25rem;
    background-color: #237af2;
    color: ${theme.colors.white};
    cursor: pointer;

    & > a {
        text-decoration: none;
        color: ${theme.colors.white};
        font-weight: bold;
        font-size: 0.875rem;
    }
`;

const SelectStyle = {
    control: (baseStyles: any) => ({
        ...baseStyles,
        paddingLeft: '0.5rem',
        minHeight: '48px',
        cursor: 'pointer',
    }),
    option: (baseStyles: any) => ({
        ...baseStyles,
        paddingLeft: '1rem',
        minHeight: '48px',
        cursor: 'pointer',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    menuPortal: (baseStyles: any) => ({
        ...baseStyles,
        zIndex: 9999,
    }),
};

export default SettingPage;

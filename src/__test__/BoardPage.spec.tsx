import { ThemeProvider } from '@emotion/react';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import '@testing-library/jest-dom';
import BoardPage from 'pages/BoardPage';
import { boardState, gameSettingsState, gameStatusState } from 'stores/atoms';
import theme from 'styles/theme';
import { GameSettings, RecoilStateSet } from 'types';

const initializeGame: RecoilStateSet = ({ set }) => {
    set(gameSettingsState, {
        boardSize: [3, 3],
        winCondition: 3,
        players: [
            { id: 1, mark: 'close', color: '#3182f6', backSteps: 3 },
            { id: 2, mark: 'circle', color: '#f04452', backSteps: 3 },
        ],
        startingPlayer: 'Player 1',
    } as GameSettings);
    set(gameStatusState, {
        currentTurn: 1,
        moves: [],
        status: 'inProgress',
        winner: null,
    });
    set(
        boardState,
        Array.from({ length: 3 }, () => Array(3).fill({ playerId: null, mark: null }))
    );
};

describe('보드 페이지 테스트', () => {
    beforeEach(() => {
        render(
            <RecoilRoot initializeState={initializeGame}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <BoardPage />
                    </BrowserRouter>
                </ThemeProvider>
            </RecoilRoot>
        );
    });

    test('플레이어 1이 가로줄을 완성한다.', async () => {
        fireEvent.click(screen.getByTestId('cell-0-0')); // Player 1
        fireEvent.click(screen.getByTestId('cell-1-0')); // Player 2
        fireEvent.click(screen.getByTestId('cell-0-1')); // Player 1
        fireEvent.click(screen.getByTestId('cell-1-1')); // Player 2
        fireEvent.click(screen.getByTestId('cell-0-2')); // Player 1

        expect(await screen.findByText('승리')).toBeInTheDocument();
    });

    test('플레이어 1과 플레이어 2가 무승부가 된다.', async () => {
        fireEvent.click(screen.getByTestId('cell-0-0')); // Player 1
        fireEvent.click(screen.getByTestId('cell-0-1')); // Player 2
        fireEvent.click(screen.getByTestId('cell-0-2')); // Player 1
        fireEvent.click(screen.getByTestId('cell-1-0')); // Player 2
        fireEvent.click(screen.getByTestId('cell-1-1')); // Player 1
        fireEvent.click(screen.getByTestId('cell-2-0')); // Player 2
        fireEvent.click(screen.getByTestId('cell-1-2')); // Player 1
        fireEvent.click(screen.getByTestId('cell-2-2')); // Player 2
        fireEvent.click(screen.getByTestId('cell-2-1')); // Player 1

        expect(await screen.findByText('무승부')).toBeInTheDocument();
    });

    test('플레이어 1이 왼쪽 상단에서 오른쪽 하단으로 대각선 줄을 완성한다.', async () => {
        fireEvent.click(screen.getByTestId('cell-0-0')); // Player 1
        fireEvent.click(screen.getByTestId('cell-0-1')); // Player 2
        fireEvent.click(screen.getByTestId('cell-1-1')); // Player 1
        fireEvent.click(screen.getByTestId('cell-0-2')); // Player 2
        fireEvent.click(screen.getByTestId('cell-2-2')); // Player 1

        expect(await screen.findByText('승리')).toBeInTheDocument();
    });

    test('플레이어 1이 오른쪽 상단에서 왼쪽 하단으로 대각선 줄을 완성한다.', async () => {
        fireEvent.click(screen.getByTestId('cell-0-2')); // Player 1
        fireEvent.click(screen.getByTestId('cell-1-2')); // Player 2
        fireEvent.click(screen.getByTestId('cell-1-1')); // Player 1
        fireEvent.click(screen.getByTestId('cell-2-2')); // Player 2
        fireEvent.click(screen.getByTestId('cell-2-0')); // Player 1

        expect(await screen.findByText('승리')).toBeInTheDocument();
    });
});

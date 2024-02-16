import styled from '@emotion/styled';

import theme from 'styles/theme';

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Cell = styled.div<{ isLastCell: boolean; isLastRow: boolean; color?: string; boardSize: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(min(${({ boardSize }) => 100 / boardSize}vw, 4rem));
    height: calc(min(${({ boardSize }) => 100 / boardSize}vw, 4rem));
    border-bottom: ${({ isLastRow }) => (isLastRow ? 'none' : `1px solid ${theme.colors.gray}`)};
    border-right: ${({ isLastCell }) => (isLastCell ? 'none' : `1px solid ${theme.colors.gray}`)};

    & > span {
        color: ${({ color }) => color};
    }
`;

export { BoardContainer, Cell };

import styled from '@emotion/styled';

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Cell = styled.div<{ isLastCell: boolean; isLastRow: boolean; color?: string; boardLength: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ boardLength }) => `calc(min(${100 / boardLength}vw, 4rem))`};
    height: ${({ boardLength }) => `calc(min(${100 / boardLength}vw, 4rem))`};
    border-bottom: ${({ isLastRow, theme }) => (isLastRow ? 'none' : `1px solid ${theme.colors.gray}`)};
    border-right: ${({ isLastCell, theme }) => (isLastCell ? 'none' : `1px solid ${theme.colors.gray}`)};
    cursor: pointer;
`;

export { BoardContainer, Cell };

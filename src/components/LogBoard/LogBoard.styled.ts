import styled from '@emotion/styled';

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`;

const Title = styled.h2`
    font-size: 1rem;
    font-weight: bold;
`;

const Result = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0 0.5rem;
    gap: 0.25rem;
`;

const Text = styled.span`
    font-size: 1rem;
`;

const TableWrapper = styled.div`
    max-width: 100%;
`;

const Table = styled.div`
    max-width: fit-content;
    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

const Cell = styled.div<{ isLastCell: boolean; isLastRow: boolean; color?: string; boardLength: number }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ boardLength }) => `calc(min(${100 / boardLength}vw, 4rem))`};
    height: ${({ boardLength }) => `calc(min(${100 / boardLength}vw, 4rem))`};
    border-right: ${({ isLastCell, theme }) => (isLastCell ? 'none' : `1px solid ${theme.colors.gray}`)};
    border-bottom: ${({ isLastRow, theme }) => (isLastRow ? 'none' : `1px solid ${theme.colors.gray}`)};
`;

const MoveOrders = styled.span`
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 0.5rem;
`;

export { BoardContainer, Title, Result, Text, TableWrapper, Table, Cell, MoveOrders };

import styled from '@emotion/styled';

const GameStatus = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const StatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    width: 5rem;
    height: 5rem;
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
`;

const Number = styled.span`
    font-size: 2rem;
    text-align: center;
`;

const Text = styled.span`
    font-size: 1rem;
    text-align: center;
`;

const Status = styled.div`
    text-align: center;
`;

export { GameStatus, StatusWrapper, Number, Text, Status };

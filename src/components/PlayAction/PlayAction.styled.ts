import styled from '@emotion/styled';

const GameActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    height: 5rem;
`;

const ActionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 5rem;
    padding: 0.5rem;
`;

const RemainingBackSteps = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    width: 5rem;
`;

const BackStepStatus = styled.span`
    font-size: 1rem;
    text-align: center;
`;

const IconButton = styled.button`
    font-size: 2rem;
    text-align: center;
    border: 0;
    background: transparent;
`;

const Text = styled.span`
    font-size: 1rem;
    text-align: center;
`;

export { GameActions, ActionWrapper, RemainingBackSteps, BackStepStatus, IconButton, Text };

import styled from '@emotion/styled';

const BackgroundContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.gray};
    z-index: 999;
`;

const DialogWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem 1.5rem 1.25rem 1.5rem;
    width: 15rem;
    max-width: 20rem;
    height: 100%;
    max-height: 11rem;
    border-radius: 0.75rem;
    background-color: white;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const Text = styled.div`
    font-size: 1rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export { BackgroundContainer, DialogWrapper, Text, ButtonWrapper };

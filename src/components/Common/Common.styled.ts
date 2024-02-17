import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const BasicContainer = styled.div`
    padding-top: 4.5rem;
    padding-bottom: 6rem;
`;

const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 1.5rem;
`;

const LinkWrapper = styled.div`
    margin-top: 2rem;
    padding: 0.125rem 1rem;
    cursor: pointer;
    border-radius: 0.75rem;
    background-color: #f0f1f2;

    & > a {
        color: ${({ theme }) => theme.colors.gray};
        font-size: 1rem;
        font-weight: bold;
        line-height: 2;
        text-decoration: none;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    display: inline-block;
    opacity: 0.26;
    animation: ${rotate} 2s linear infinite;
`;

export { BasicContainer, CenterContainer, Title, LinkWrapper, Spinner };

import styled from '@emotion/styled';

import theme from 'styles/theme';

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
        font-size: 1rem;
        font-weight: bold;
        line-height: 2;
        color: ${theme.colors.gray};
        text-decoration: none;
    }
`;

export { BasicContainer, CenterContainer, Title, LinkWrapper };

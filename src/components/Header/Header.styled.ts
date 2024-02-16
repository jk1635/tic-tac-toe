import styled from '@emotion/styled';

import theme from 'styles/theme';

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 999;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    min-width: var(--min-width);
    max-width: var(--max-width);
    padding: 0 1.5rem;
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 16px);
    transform: translateX(-50%);
`;

const Logo = styled.span`
    color: ${theme.colors.blue};
    font-size: 1.5rem;
    cursor: pointer;
    user-select: none;
`;

export { HeaderContainer, Logo };

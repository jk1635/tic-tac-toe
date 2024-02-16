import styled from '@emotion/styled';

import theme from 'styles/theme';

const ButtonWrapper = styled.button<{ fullWidth: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    height: 3.5rem;
    padding: 0 1.5rem;
    text-transform: uppercase;
    border-radius: 0.75rem;
    background-color: #237af2;
    color: ${theme.colors.white};
    cursor: pointer;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

const Label = styled.span`
    text-decoration: none;
    color: ${theme.colors.white};
    font-weight: bold;
    font-size: 0.875rem;
`;

export { ButtonWrapper, Label };

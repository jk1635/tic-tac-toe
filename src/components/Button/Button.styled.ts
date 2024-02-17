import styled from '@emotion/styled';

const ButtonWrapper = styled.button<{ fullWidth: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    height: 3.5rem;
    padding: 0 1.5rem;
    text-transform: uppercase;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

const Label = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-weight: bold;
    text-decoration: none;
`;

export { ButtonWrapper, Label };

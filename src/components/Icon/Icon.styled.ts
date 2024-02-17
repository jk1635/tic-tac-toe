import styled from '@emotion/styled';

const IconWrapper = styled.div<{ color?: string }>`
    color: ${({ color, theme }) => (color ? color : theme.colors.black)};
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
`;

export { IconWrapper };

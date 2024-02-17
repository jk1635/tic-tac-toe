import styled from '@emotion/styled';

const IconWrapper = styled.div<{ color?: string }>`
    color: ${({ color }) => (color ? color : 'black')};
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
`;

export { IconWrapper };

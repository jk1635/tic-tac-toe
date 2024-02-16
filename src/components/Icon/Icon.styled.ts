import styled from '@emotion/styled';

const IconWrapper = styled.div<{ color?: string }>`
    color: ${({ color }) => (color ? color : 'black')};
`;

export { IconWrapper };

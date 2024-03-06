import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotateRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const IconWrapper = styled.div<{ color?: string; animate?: boolean }>`
    color: ${({ color, theme }) => (color ? color : theme.colors.black)};
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;

    ${({ animate }) =>
        animate &&
        css`
            animation: ${rotateRight} 1s linear;
            animation-iteration-count: 1;
        `}
`;

export { IconWrapper };

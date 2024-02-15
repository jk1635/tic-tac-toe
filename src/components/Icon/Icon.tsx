import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface IconProps {
    size?: number;
    color?: string;
    children: ReactNode;
}
const Icon: React.FC<IconProps> = ({ size, color, children }) => {
    return (
        <IconWrapper color={color}>
            <span
                style={{ fontSize: `${size}rem`, verticalAlign: 'bottom', fontWeight: 'bold' }}
                className="material-symbols-outlined"
            >
                {children}
            </span>
        </IconWrapper>
    );
};

const IconWrapper = styled.div<{ color?: string }>`
    color: ${({ color }) => (color ? color : 'black')};
`;

export default Icon;

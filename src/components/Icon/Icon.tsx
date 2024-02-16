import React, { ReactNode } from 'react';

import * as S from './Icon.styled';

interface IconProps {
    size?: number;
    bold?: boolean;
    color?: string;
    children: ReactNode;
}

const Icon: React.FC<IconProps> = ({ size, bold, color, children }) => {
    return (
        <S.IconWrapper color={color}>
            <span
                style={{ fontSize: `${size}rem`, verticalAlign: 'bottom', fontWeight: `${bold ? 'bold' : '400'}` }}
                className="material-symbols-outlined"
            >
                {children}
            </span>
        </S.IconWrapper>
    );
};

export default Icon;

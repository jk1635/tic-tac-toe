import React, { ReactNode } from 'react';

import * as S from './Icon.styled';

interface IconProps {
    size?: number;
    bold?: boolean;
    color?: string;
    animate?: boolean;
    children: ReactNode;
}

const Icon = ({ size, bold, color, animate, children }: IconProps) => {
    return (
        <S.IconWrapper color={color} animate={animate}>
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

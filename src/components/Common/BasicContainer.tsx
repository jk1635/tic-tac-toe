import React, { ReactNode } from 'react';

import * as S from './Common.styled';

interface BasicContainerProps {
    children: ReactNode;
    isCentered?: boolean;
}

const BasicContainer = ({ children, isCentered = false }: BasicContainerProps) => {
    const Container = isCentered ? S.CenterContainer : S.BasicContainer;

    return <Container>{children}</Container>;
};

export default BasicContainer;

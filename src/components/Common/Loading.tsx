import React from 'react';

import BasicContainer from './BasicContainer';
import * as S from './Common.styled';

const Loading = () => {
    return (
        <BasicContainer isCentered>
            <S.Title>Loading</S.Title>
        </BasicContainer>
    );
};

export default Loading;

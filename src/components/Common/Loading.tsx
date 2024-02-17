import React from 'react';

import { Icon } from 'components/Icon';
import theme from 'styles/theme';

import BasicContainer from './BasicContainer';
import * as S from './Common.styled';

const Loading = () => {
    return (
        <BasicContainer isCentered>
            <S.Spinner>
                <Icon color={theme.colors.gray}>refresh</Icon>
            </S.Spinner>
        </BasicContainer>
    );
};

export default Loading;

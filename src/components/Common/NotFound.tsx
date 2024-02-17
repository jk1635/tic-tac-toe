import React from 'react';
import { Link } from 'react-router-dom';

import BasicContainer from './BasicContainer';
import * as S from './Common.styled';

const NotFound = () => {
    return (
        <BasicContainer isCentered>
            <S.Title>페이지를 찾을 수 없습니다.</S.Title>
            <S.LinkWrapper>
                <Link to="/">
                    <span>홈으로 돌아가기</span>
                </Link>
            </S.LinkWrapper>
        </BasicContainer>
    );
};

export default NotFound;

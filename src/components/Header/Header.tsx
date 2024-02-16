import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Header.styled';

const Header = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <S.HeaderContainer>
            <S.Logo onClick={handleBack}>TIC</S.Logo>
        </S.HeaderContainer>
    );
};

export default Header;

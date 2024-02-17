import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BasicContainer } from 'components/Common';
import { FixedBottom } from 'components/FixedBottom';
import { Header } from 'components/Header';
import { LogBoard } from 'components/LogBoard';

const HistoryPage = () => {
    const navigate = useNavigate();

    return (
        <BasicContainer>
            <Header />
            <Title>게임 기록</Title>
            <LogBoard />
            <FixedBottom
                onClick={() => {
                    navigate('/');
                }}
            >
                Home
            </FixedBottom>
        </BasicContainer>
    );
};

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
`;

export default HistoryPage;

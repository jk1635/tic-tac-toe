import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Button } from 'components/Button';
import { BasicContainer } from 'components/Common';
import { historyState } from 'stores/atoms';

const HomePage = () => {
    const navigate = useNavigate();
    const history = useRecoilValue(historyState);

    const handleHistory = () => {
        if (history.length === 0) {
            alert('기록된 게임이 없습니다.');
            return;
        }
        navigate('/history');
    };

    return (
        <BasicContainer isCentered>
            <ButtonWrapper>
                <Button onClick={() => navigate('/setting')}>start</Button>
                <Button onClick={handleHistory}>history</Button>
            </ButtonWrapper>
        </BasicContainer>
    );
};

const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export default HomePage;

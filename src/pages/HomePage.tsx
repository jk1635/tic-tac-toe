import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Button } from 'components/Button';
import { BasicContainer } from 'components/Common';
import { Dialog } from 'components/Dialog';
import { historyState } from 'stores/atoms';

const HomePage = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const history = useRecoilValue(historyState);

    const handleHistory = () => {
        if (history.length === 0) {
            setError('기록된 게임이 없습니다.');
            setIsOpen(true);
        } else {
            navigate('/history');
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <BasicContainer isCentered>
            <ButtonWrapper>
                <Button onClick={() => navigate('/setting')}>start</Button>
                <Button onClick={handleHistory}>history</Button>
                <Dialog text={error} isClose={handleClose} isOpen={isOpen} />
            </ButtonWrapper>
        </BasicContainer>
    );
};

const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export default HomePage;

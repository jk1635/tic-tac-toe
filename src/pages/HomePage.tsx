import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <ButtonWrapper>
                <Button onClick={() => navigate('/setting')}>start</Button>
                <Button onClick={() => navigate('/history')}>history</Button>
            </ButtonWrapper>
        </div>
    );
};

const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export default HomePage;

import React from 'react';

import { BasicContainer } from 'components/Common';
import { GameBoard } from 'components/GameBoard';
import { Header } from 'components/Header';
import { PlayAction } from 'components/PlayAction';
import { StatusIndicator } from 'components/StatusIndicator';

const BoardPage: React.FC = () => {
    return (
        <BasicContainer>
            <Header />
            <StatusIndicator />
            <GameBoard />
            <PlayAction />
        </BasicContainer>
    );
};

export default BoardPage;

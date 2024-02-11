import React from 'react';

import { GameBoard } from 'components/GameBoard';
import { PlayAction } from 'components/PlayAction';
import { StatusIndicator } from 'components/StatusIndicator';

const BoardPage: React.FC = () => {
    return (
        <div>
            <StatusIndicator />
            <GameBoard />
            <PlayAction />
        </div>
    );
};

export default BoardPage;

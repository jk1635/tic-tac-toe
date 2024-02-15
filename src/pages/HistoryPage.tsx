import React from 'react';
import { useRecoilState } from 'recoil';

import { historyState } from 'stores/atoms';

const HistoryPage = () => {
    const [history] = useRecoilState(historyState);

    return (
        <div>
            <h2>게임 기록</h2>
            {history.map((gameRecord, index) => (
                <div key={index}>
                    <h3>게임 {index + 1}</h3>
                    <p>
                        결과:
                        {gameRecord.isDraw
                            ? '무승부'
                            : `승리 ${gameRecord.players.find(p => p.id === gameRecord.winner)?.mark || ''}`}
                    </p>
                    <h4>최종 보드 상태</h4>
                    <table>
                        <tbody>
                            {gameRecord.finalBoard.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => {
                                        const player = gameRecord.players.find(p => p.id === cell.playerId);
                                        const move = gameRecord.moves.find(
                                            move => move.position[0] === rowIndex && move.position[1] === cellIndex
                                        );
                                        return (
                                            <td
                                                key={cellIndex}
                                                style={{
                                                    position: 'relative',
                                                    border: '1px solid black',
                                                    width: '50px',
                                                    height: '50px',
                                                    textAlign: 'center',
                                                    verticalAlign: 'middle',
                                                    color: player?.color || 'black',
                                                }}
                                            >
                                                <span className="material-symbols-outlined">{player?.mark}</span>
                                                {move && (
                                                    <span
                                                        style={{
                                                            position: 'absolute',
                                                            bottom: '5px',
                                                            right: '5px',
                                                            fontSize: '10px',
                                                            color: 'gray',
                                                        }}
                                                    >
                                                        {move.moveNumber}
                                                    </span>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default HistoryPage;

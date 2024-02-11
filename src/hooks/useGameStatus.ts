import { Board, PlayerId } from 'types';

const useGameStatus = () => {
    const updateBoard = (board: Board, targetRow: number, targetCol: number, playerId: PlayerId): Board => {
        return board.map((currentRow, rowIndex) =>
            currentRow.map((currentCell, colIndex) =>
                rowIndex === targetRow && colIndex === targetCol ? { ...currentCell, playerId } : currentCell
            )
        );
    };

    const checkWin = (board: Board, playerId: PlayerId, winCondition: number): boolean => {
        const boardLength = board.length;

        // 가로 검사
        for (let row = 0; row < boardLength; row++) {
            let count = 0;
            for (let col = 0; col < boardLength; col++) {
                if (board[row][col].playerId === playerId) {
                    count++;
                    if (count === winCondition) return true;
                } else {
                    count = 0;
                }
            }
        }

        // 세로 검사
        for (let col = 0; col < boardLength; col++) {
            let count = 0;
            for (let row = 0; row < boardLength; row++) {
                if (board[row][col].playerId === playerId) {
                    count++;
                    if (count === winCondition) return true;
                } else {
                    count = 0;
                }
            }
        }

        // 대각선 검사: 왼쪽 상단에서 오른쪽 하단
        for (let row = 0; row < boardLength; row++) {
            for (let col = 0; col < boardLength; col++) {
                let count = 0;
                for (let i = 0; i < winCondition && row + i < boardLength && col + i < boardLength; i++) {
                    if (board[row + i][col + i].playerId === playerId) {
                        count++;
                        if (count === winCondition) return true;
                    } else {
                        break;
                    }
                }
            }
        }

        // 대각선 검사: 오른쪽 상단에서 왼쪽 하단
        for (let row = 0; row < boardLength; row++) {
            for (let col = 0; col < boardLength; col++) {
                let count = 0;
                for (let i = 0; i < winCondition && row + i < boardLength && col - i >= 0; i++) {
                    if (board[row + i][col - i].playerId === playerId) {
                        count++;
                        if (count === winCondition) return true;
                    } else {
                        break;
                    }
                }
            }
        }

        return false;
    };

    const checkDraw = (board: Board): boolean => {
        const boardLength = board.length;

        for (let row = 0; row < boardLength; row++) {
            for (let col = 0; col < boardLength; col++) {
                if (board[row][col].playerId === null) {
                    return false;
                }
            }
        }

        return true;
    };
    return { updateBoard, checkWin, checkDraw };
};

export default useGameStatus;

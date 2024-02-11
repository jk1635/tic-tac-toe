type PlayerMark = 'X' | 'O' | '△' | '□';
type PlayerColor = 'red' | 'yellow' | 'blue' | 'green';
type StartingPlayer = '랜덤' | 'Player 1' | 'Player 2';
type PlayerId = 1 | 2;

interface Player {
    id: PlayerId;
    mark: PlayerMark;
    color: PlayerColor;
    backSteps: number;
}

interface GameSettings {
    boardSize: [number, number];
    winCondition: number;
    players: Player[];
    startingPlayer: StartingPlayer;
}

interface Cell {
    playerId: PlayerId | null;
}

type Board = Cell[][];

interface Move {
    playerId: PlayerId;
    position: [number, number];
    moveNumber: number;
}

interface GameState {
    currentTurn: PlayerId;
    moves: Move[];
    status: 'inProgress' | 'win' | 'draw';
    winner?: PlayerId | null;
}

export type { PlayerColor, StartingPlayer, PlayerId, Player, GameSettings, Board, Move, GameState };

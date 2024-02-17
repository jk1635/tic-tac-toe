import { MutableSnapshot } from 'recoil';

type PlayerMark = 'close' | 'circle' | 'change_history' | 'square';
type PlayerColor = 'red' | 'orange' | 'blue' | 'green';
type StartingPlayer = 'random' | 'Player 1' | 'Player 2';
type PlayerId = 1 | 2;

interface Option {
    value: string;
    label: string;
}

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
    moveOrders: number;
}

interface GameStatus {
    currentTurn: PlayerId;
    moves: Move[];
    status: 'inProgress' | 'win' | 'tie';
    winner: PlayerId | null;
}

interface GameHistory {
    finalBoard: Board;
    winner: PlayerId | null;
    isTie: boolean;
    moves: Move[];
    players: Player[];
}

type RecoilStateSet = (mutableSnapshot: MutableSnapshot) => void;

export type {
    Option,
    PlayerMark,
    PlayerColor,
    StartingPlayer,
    PlayerId,
    GameHistory,
    Player,
    GameSettings,
    Board,
    Move,
    GameStatus,
    RecoilStateSet,
};

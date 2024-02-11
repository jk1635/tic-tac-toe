import { PlayerId } from 'types';

const PLAYER_1: PlayerId = 1;
const PLAYER_2: PlayerId = 2;

const playerMarkOptions = [
    { value: 'X', label: '엑스' },
    { value: 'O', label: '동그라미' },
    { value: '△', label: '세모' },
    { value: '□', label: '네모' },
];

const playerColorOptions = [
    { value: 'blue', label: '파랑' },
    { value: 'red', label: '빨강' },
    { value: 'orange', label: '노랑' },
    { value: 'green', label: '초록' },
];

const startingPlayerOptions = [
    { value: 'random', label: '랜덤' },
    { value: 'Player 1', label: 'P1' },
    { value: 'Player 2', label: 'P2' },
];

export { PLAYER_1, PLAYER_2, playerMarkOptions, playerColorOptions, startingPlayerOptions };

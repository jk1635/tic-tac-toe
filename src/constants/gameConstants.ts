import { PlayerId } from 'types';

const Player1: PlayerId = 1;
const Player2: PlayerId = 2;

const playerMarkOptions = [
    { value: 'close', label: '엑스' },
    { value: 'circle', label: '동그라미' },
    { value: 'change_history', label: '세모' },
    { value: 'square', label: '네모' },
];

const playerColorOptions = [
    { value: '#3182f6', label: '파랑' },
    { value: '#f04452', label: '빨강' },
    { value: '#ffb331', label: '노랑' },
    { value: '#03b26c', label: '초록' },
];

const startingPlayerOptions = [
    { value: 'random', label: '랜덤' },
    { value: 'Player 1', label: 'P1' },
    { value: 'Player 2', label: 'P2' },
];

export { Player1, Player2, playerMarkOptions, playerColorOptions, startingPlayerOptions };

#!/usr/bin/env node
import { welcome, goodbye } from '../src/index.js';
import { taskEven } from '../src/games/game-even.js';

// fifth task
const name = welcome('Answer "yes" if the number is even, otherwise answer "no".');

const countRightAnswer = taskEven();

goodbye(name, countRightAnswer, 'yes', 'no');

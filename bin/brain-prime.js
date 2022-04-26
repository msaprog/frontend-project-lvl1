#!/usr/bin/env node
import { welcome, goodbye } from '../src/index.js';
import { taskPrime } from '../src/games/game-prime.js';

// ninth task
const name = welcome('Answer "yes" if given number is prime. Otherwise answer "no".');

const countRightAnswer = taskPrime();

goodbye(name, countRightAnswer, 'yes', 'no');

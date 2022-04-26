#!/usr/bin/env node
import { welcome, goodbye } from '../src/index.js';
import { taskCalc } from '../src/games/game-calc.js';

// sixth task
const name = welcome('What is the result of the expression?');

const { countRightAnswer, answer, result } = taskCalc();

goodbye(name, countRightAnswer, answer, result);

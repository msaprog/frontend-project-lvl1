#!/usr/bin/env node
import { welcome, goodbye } from '../src/index.js';
import { taskGcd } from '../src/games/game-gcd.js';
// seventh task
const name = welcome('Find the greatest common divisor of given numbers.');

const { countRightAnswer, answer, result } = taskGcd();

goodbye(name, countRightAnswer, answer, result);

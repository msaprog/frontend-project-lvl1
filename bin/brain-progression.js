#!/usr/bin/env node
import { welcome, goodbye } from '../src/index.js';
import { taskProgression } from '../src/games/game-progression.js';

// eighth task
const name = welcome('What number is missing in the progression?');

const { countRightAnswer, answer, result } = taskProgression();

goodbye(name, countRightAnswer, answer, result);

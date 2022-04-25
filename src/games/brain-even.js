#!/usr/bin/env node
import { welcome, taskEven, goodbye } from '../index.js';

// fifth task
const name = welcome('Answer "yes" if the number is even, otherwise answer "no".');

const countRightAnswer = taskEven();

goodbye(name, countRightAnswer, 'yes', 'no');

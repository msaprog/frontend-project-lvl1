#!/usr/bin/env node
import { welcome, taskCalc, goodbye } from '../src/index.js';

// sixth task
const name = welcome('What is the result of the expression?');

const { countRightAnswer, answer, result } = taskCalc();

goodbye(name, countRightAnswer, answer, result);

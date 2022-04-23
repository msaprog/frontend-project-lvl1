#!/usr/bin/env node
import { welcome, taskGcd, goodbye } from '../src/index.js';

// seventh task
const name = welcome('Find the greatest common divisor of given numbers.');

const { countRightAnswer, answer, result } = taskGcd();

goodbye(name, countRightAnswer, answer, result);

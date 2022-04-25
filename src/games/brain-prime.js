#!/usr/bin/env node
import { welcome, taskPrime, goodbye } from '../index.js';

// ninth task
const name = welcome('Answer "yes" if given number is prime. Otherwise answer "no".');

const countRightAnswer = taskPrime();

goodbye(name, countRightAnswer, 'yes', 'no');

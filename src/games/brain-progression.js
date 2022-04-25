#!/usr/bin/env node
import { welcome, taskProgression, goodbye } from '../index.js';

// eighth task
const name = welcome('What number is missing in the progression?');

const { countRightAnswer, answer, result } = taskProgression();

goodbye(name, countRightAnswer, answer, result);

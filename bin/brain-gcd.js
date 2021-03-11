#!/usr/bin/env node

import { roundsCount, runEngine } from '../src/engine.js';
import { generateGameData, gameRule } from '../src/games/brain-gcd.js';

const gameData = generateGameData(roundsCount);
runEngine(gameData, gameRule);

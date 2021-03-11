#!/usr/bin/env node

import { roundsCount, runEngine } from '../src/engine.js';
import { generateGameData, gameRule } from '../src/games/brain-calc.js';

const gameData = generateGameData(roundsCount);
runEngine(gameData, gameRule);

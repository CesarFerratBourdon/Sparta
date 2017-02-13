var data = require('../../data.json');
import { parseInput, calculateDividends } from './utilities'

describe('parseInput', () => {
  it('returns podium according to input', () => {
    const podium = parseInput('R:2:3:1');
    expect(podium[2]).toBe('1');
  })
});

describe('parseInput', () => {
  it('return podium according to input', () => {
    const podium = parseInput('R:2:3:1');
    expect(podium[0]).toBe('2');
  })
});

describe('calculateDividends', () => {
  it('return each dividends and also each pool amounts', () => {
    const results = calculateDividends(['2','3','1'],[15,12,18,18]);
    expect(results[0][0]).toBe(2.61);
  })
});

describe('calculateDividends', () => {
  it('return each dividends and also each pool amounts', () => {
    const results = calculateDividends(['2','3','1'],[15,12,18,18]);
    expect(results[1][0]).toBe(338);
  })
});

describe('calculateDividends', () => {
  it('return each dividends and also each pool amounts', () => {
    const results = calculateDividends(['2','3','1'],[15,12,18,18]);
    expect(results[1][3]).toBe(669);
  })
});

describe('calculateDividends', () => {
  it('return each dividends and also each pool amounts', () => {
    const results = calculateDividends(['2','3','1'],[15,20,18,18]);
    expect(results[0][1]).toBe(0.96);
    expect(results[0][2]).toBe(1.16);
    expect(results[0][3]).toBe(1.94);
  })
});

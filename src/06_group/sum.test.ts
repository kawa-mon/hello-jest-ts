import { sum } from '../03_getting_started_jest/sum'

describe('use test.each', () => {
  it.each([
    { a: 1, b: 1, expected: 2 },
    { a: -1, b: 1, expected: 0 },
    { a: -1, b: -1, expected: -2 },
    { a: 0, b: 0, expected: 0 },
  ])('$a plus $b equals $expected', ({ a, b, expected }) => {
    expect(sum(a, b)).toBe(expected)
  })
})

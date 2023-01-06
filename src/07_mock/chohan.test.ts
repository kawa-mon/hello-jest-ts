import { chohan } from './chohan'

describe('chohan', () => {
  it('returns 丁 when Math.random returns even numbers like 0.2', () => {
    Math.random = jest.fn(() => 0.2)
    expect(chohan()).toBe('丁')
  })

  it('returns 半 when Math.random returns an odd number like 0.1', () => {
    Math.random = jest.fn(() => 0.1)
    expect(chohan()).toBe('半')
  })
})

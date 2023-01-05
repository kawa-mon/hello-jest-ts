const numberValue = 0
const stringValue = '文字列'
const booleanValue = true

// toBeでプリミティブな値を評価
it('evaluates to equal the same primitive value when using toBe', () => {
  expect(numberValue).toBe(0)
  expect(stringValue).toBe('文字列')
  expect(booleanValue).toBe(true)
})

// toEqualでプリミティブな値を評価
it('evaluates to equal the same primitive value when using toEqual', () => {
  expect(numberValue).toEqual(0)
  expect(stringValue).toEqual('文字列')
  expect(booleanValue).toEqual(true)
})

// toStrictEqualでプリミティブな値を評価
it('evaluates to equal the same primitive value when using toStrictEqual', () => {
  expect(numberValue).toStrictEqual(0)
  expect(stringValue).toStrictEqual('文字列')
  expect(booleanValue).toStrictEqual(true)
})

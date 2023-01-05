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

// canの型を定義
type CanType = {
  flavor: string
  ounces: number
}

// can1とcan2はそれぞれ同じプロパティと同じ値を持つ
const can1: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
}

const can2: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
}

// can3はcan2の参照を持つ
const can3: CanType = can2

// Canクラス
class Can {
  flavor: string
  ounces: number

  constructor({ flavor, ounces }: CanType) {
    this.flavor = flavor
    this.ounces = ounces
  }
}

// can4はCanクラスで生成されたオブジェクトでcan1、can2と同じプロパティを持つ
const can4 = new Can({
  flavor: 'grapefruit',
  ounces: 12,
})

// can1 と can2 は異なると評価される
it('can1 and can2 are not the exact same instance', () => {
  expect(can1).not.toBe(can2)
})

// can2 と can3 は等しいと評価される
it('can2 and can3 are the same instance', () => {
  expect(can2).toBe(can3)
})

// can1 と can2 は等しいと評価される
it('can1 and can2 have the same properties', () => {
  expect(can1).toEqual(can2)
})

// can2 と can4 は等しいと評価される
it('can2 and can4 have the same properties', () => {
  expect(can2).toEqual(can4)
})

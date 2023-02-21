import '@testing-library/jest-dom'
import { Transaction } from '~/api/types'
import {
  calculateTotalUsd,
  fromCamelToSnakeCase,
  fromSnakeToCamelCase,
  JSONObject,
  truncateAddress,
} from './general'

describe('truncateAddress', () => {
  test('truncates an address with the default number of characters', () => {
    const inputAddress = '0x1234567890abcdef'
    const expectedOutput = '0x123...bcdef'

    expect(truncateAddress(inputAddress)).toEqual(expectedOutput)
  })

  test('truncates an address with a custom number of characters', () => {
    const inputAddress = '0x1234567890abcdef'
    const expectedOutput = '0x12...cdef'

    expect(truncateAddress(inputAddress, 4)).toEqual(expectedOutput)
  })
})

describe('fromSnakeToCamelCase', () => {
  it('should return an empty array if given an empty array', () => {
    const input: JSONObject[] = []
    const expectedOutput: JSONObject[] = []
    expect(fromSnakeToCamelCase(input)).toEqual(expectedOutput)
  })

  it('should correctly convert keys from snake case to camel case', () => {
    const input = [{ first_name: 'John', last_name: 'Doe' }]
    const expectedOutput = [{ firstName: 'John', lastName: 'Doe' }]
    expect(fromSnakeToCamelCase(input)).toEqual(expectedOutput)
  })
})

describe('fromCamelToSnakeCase', () => {
  it('should return an empty array if given an empty array', () => {
    const input: JSONObject[] = []
    const expectedOutput: JSONObject[] = []
    expect(fromCamelToSnakeCase(input)).toEqual(expectedOutput)
  })

  it('should correctly convert keys from camel case to snake case', () => {
    const input = [{ firstName: 'John', lastName: 'Doe' }]
    const expectedOutput = [{ first_name: 'John', last_name: 'Doe' }]
    expect(fromCamelToSnakeCase(input)).toEqual(expectedOutput)
  })
})

describe('calculateTotalUsd', () => {
  const transactions = [
    {
      id: 1,
      createdAt: new Date('2022-02-01T00:00:00.000Z'),
      chainName: 'solana-mainnet',
      transactionType: 'deposit',
      amount: 100000000,
    },
    {
      id: 2,
      createdAt: new Date('2022-02-02T00:00:00.000Z'),
      chainName: 'ethereum-mainnet',
      transactionType: 'withdraw',
      amount: 50000000,
    },
    {
      id: 3,
      createdAt: new Date('2022-02-03T00:00:00.000Z'),
      chainName: 'solana-mainnet',
      transactionType: 'deposit',
      amount: 75000000,
    },
  ] satisfies Transaction[]

  it('should return the correct total USD value for a set of transactions', () => {
    const expectedTotal = 125 // (100 - 50) + 75
    expect(calculateTotalUsd(transactions)).toBe(expectedTotal)
  })

  it('should return 0 when given an empty array of transactions', () => {
    expect(calculateTotalUsd([])).toBe(0)
  })
})

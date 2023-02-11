import '@testing-library/jest-dom'
import { truncateAddress } from './general'

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

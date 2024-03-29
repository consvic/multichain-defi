import snakeCase from 'lodash/snakeCase'
import camelCase from 'lodash/camelCase'
import mapKeys from 'lodash/mapKeys'
import { Transaction } from '~/api/types'

type JSONValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | JSONObject
  | unknown
  | Array<JSONValue>

export interface JSONObject {
  [x: string]: JSONValue
}

export const MAX_DIGITS = 1000000

export function calculateTotalUsd(transactions: Transaction[]): number {
  const totalWithDecimals = transactions.reduce((prev, curr) => {
    if (curr.transactionType === 'deposit') {
      return prev + curr.amount
    }
    return prev - curr.amount
  }, 0)
  return removeExtraDecimals(totalWithDecimals)
}

// every three digits add a zero, only caveat is that if the decimals are more than 3
// it's also going to add zeros to that
export function numberWithCommas(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function removeExtraDecimals(value: number, toFixed = 2): number {
  const parsed = value / MAX_DIGITS
  return Number(parsed.toFixed(toFixed))
}

export function fromSnakeToCamelCase(arr: JSONObject[]): JSONObject[] {
  return arr.map((t: JSONObject) => mapKeys(t, (v, k) => camelCase(k)))
}

export function fromCamelToSnakeCase(arr: JSONObject[]): JSONObject[] {
  return arr.map((t: JSONObject) => mapKeys(t, (v, k) => snakeCase(k)))
}

export const truncateAddress = (
  address: string,
  numberOfCharacters = 5
): string => {
  return `${address.slice(0, numberOfCharacters)}...${address.slice(
    -numberOfCharacters
  )}`
}

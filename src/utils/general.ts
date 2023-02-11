import snakeCase from 'lodash/snakeCase'
import camelCase from 'lodash/camelCase'
import mapKeys from 'lodash/mapKeys'
import { Transaction } from '~/api/types'

export function calculateTotalUsd(transactions: Transaction[]): number {
  const totalWithDecimals = transactions.reduce((prev, curr) => {
    if (curr.transactionType === 'deposit') {
      return prev + curr.amount
    }
    return prev - curr.amount
  }, 0)
  return removeExtraDecimals(totalWithDecimals)
}

export function numberWithCommas(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function removeExtraDecimals(value: number, toFixed = 2): number {
  const parsed = value / 1000000
  return Number(parsed.toFixed(toFixed))
}

export function fromSnakeToCamelCase(arr: any[]): any[] {
  return arr.map((t: any) => mapKeys(t, (v, k) => camelCase(k)))
}

export function fromCamelToSnakeCase(arr: any[]): any[] {
  return arr.map((t: any) => mapKeys(t, (v, k) => snakeCase(k)))
}

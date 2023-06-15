import type Requests from '../private/Requests'
import type { TypingResult } from '../types'

export function results(requests: Requests) {
  return {
    allResults: () => requests.makeRequest<TypingResult[]>('/results'),
    last: () => requests.makeRequest<TypingResult>('/results/last'),
  }
}

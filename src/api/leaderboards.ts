import { errors } from '../errors'
import type Requests from '../private/Requests'
import type { LeaderBoardUserProfile, LeaderboardParams, LeaderboardParamsSubset } from '../types'

export function leaderboards(request: Requests) {
  return {
    global: ({ language, mode, keyTime, skip = 0, limit = 10 }: LeaderboardParams) => {
      const MAX_LIMIT = 50
      if (limit > MAX_LIMIT)
        throw new Error(errors.LIMIT_PARAMETER.replace('{limit}', `${MAX_LIMIT}`).replace('{param}', 'limit'))

      return request.makeRequest<LeaderBoardUserProfile[]>(`/leaderboards?language=${language}&mode=${mode}&mode2=${keyTime}&skip=${skip}&limit=${limit}`)
    },
    rank: ({ language, mode, keyTime }: LeaderboardParamsSubset) => request.makeRequest<LeaderBoardUserProfile>(`/leaderboards/rank?language=${language}&mode=${mode}&mode2=${keyTime}`),
  }
}

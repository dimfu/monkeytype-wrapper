import type Requests from '../private/Requests'
import type { GameMode, UserPersonalBests, UserProfile, UserStats } from '../types'

export function users(requests: Requests) {
  return {
    personalBests: (mode: GameMode) => requests.makeRequest<UserPersonalBests>(`/users/personalBests?mode=${mode}`),
    stats: () => requests.makeRequest<UserStats>('/users/stats'),
    profile: (uid: string) => requests.makeRequest<UserProfile>(`/users/${uid}/profile`),
  }
}

import type Requests from '../private/Requests'
import type { UserPersonalBests, UserProfile, UserStats } from '../types'

export function users(requests: Requests) {
  return {
    personalBests: (mode: 'time' | 'words' | 'quote' | 'zen' | 'custom') => requests.makeRequest<UserPersonalBests>(`/users/personalBests?mode=${mode}`),
    stats: () => requests.makeRequest<UserStats>('/users/stats'),
    profile: (uid: string) => requests.makeRequest<UserProfile>(`/users/${uid}/profile`),
  }
}

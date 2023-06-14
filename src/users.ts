import type { UserPersonalBests, UserProfile, UserStats } from './types'

export function users(this: { request<T>(endpoint: string): Promise<{ data: T }> }) {
  return {
    personalBests: (mode: 'time' | 'words' | 'quote' | 'zen' | 'custom') => this.request<UserPersonalBests>(`/users/personalBests?mode=${mode}`).then(({ data }) => {
      if (!data)
        return undefined
      return data
    }),
    stats: () => this.request<UserStats>('/users/stats').then(({ data }) => data),
    profile: (uid: string) => this.request<UserProfile>(`/users/${uid}/profile`).then(({ data }) => data),
  }
}

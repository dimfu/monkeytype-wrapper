type PersonalBestTime = '15' | '30' | '50' | '60'
interface PersonalBestProperties {
  difficulty: string
  acc: number
  raw: number
  language: string
  consistency: number
  timestamp: number
  wpm: number
  punctuation: boolean
  lazyMode?: boolean
}

type UserPersonalBestsMapped = {
  [key in PersonalBestTime]?: PersonalBestProperties[];
}

interface UserPersonalBestsCustom {
  custom?: PersonalBestProperties[]
}

export interface UserStats {
  startedTests: number
  completedTests: number
  timeTyping: number
}
export type UserPersonalBests = UserPersonalBestsMapped & UserPersonalBestsCustom

export function users(this: { request(endpoint: string): Promise<any> }) {
  return {
    personalBests: (mode: 'time' | 'words' | 'quote' | 'zen' | 'custom') => this.request(`/users/personalBests?mode=${mode}`).then(({ data }: { data: UserPersonalBests }) => {
      if (!data)
        return undefined
      return data
    }),
    stats: () => this.request('/users/stats').then(({ data }: { data: UserStats }) => data),
  }
}

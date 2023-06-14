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

export type UserPersonalBests = UserPersonalBestsMapped & UserPersonalBestsCustom

export function users(this: { request(endpoint: string): Promise<any> }) {
  return {
    personalBests: (mode: 'time' | 'words' | 'quote' | 'zen' | 'custom') => this.request(`/users/personalBests?mode=${mode}`).then((res) => {
      if (!res)
        return undefined
      return res.data as UserPersonalBests
    }),
  }
}

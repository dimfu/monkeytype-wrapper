type PersonalBestTime = '10' | '15' | '25' | '30' | '50' | '60' | '100'

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

type UserProfileMapped = {
  [key in PersonalBestTime]?: {
    [key: string]: string
  }
}

interface UserPersonalBestsCustom {
  custom?: PersonalBestProperties[]
}

export interface UserStats {
  startedTests: number
  completedTests: number
  timeTyping: number
}

export interface UserProfile {
  name: string
  banned: boolean
  addedAt: number
  typingStats: UserStats
  personalBests: {
    time: UserPersonalBestsMapped
    words: UserPersonalBestsMapped
  }
  discordId: string
  discordAvatar: string
  xp: number
  streak: number
  maxStreak: number
  details: {
    bio: string
    keyboard: string
    socialProfiles: {
      github: string
      twitter: string
      website: string
    }
  }
  allTimeLbs: {
    time: UserProfileMapped
  }
  uid: string
}

export type UserPersonalBests = UserPersonalBestsMapped & UserPersonalBestsCustom

import { errors } from '../errors'

export default class Requests {
  public apeKey: string
  private static url = 'https://api.monkeytype.com'
  constructor(apeKey: string) {
    this.apeKey = apeKey
  }

  public async makeRequest<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${Requests.url}${endpoint}`, {
      headers: {
        Authorization: `ApeKey ${this.apeKey}`,
      },
      method: 'GET',
    })

    if (response.status === 471)
      throw new Error(errors.INACTIVE_API_KEY)

    if (response.status === 479 || response.status === 429)
      throw new Error(errors.RATE_LIMITED)

    if (response.status === 472)
      throw new Error(errors.MALFORMED_API_KEY)

    const { data } = await response.json()

    return data
  }
}

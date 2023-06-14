import { errors } from '../errors'

const BASE_URL = 'https://api.monkeytype.com'

export default class Requests {
  public apeKey: string
  constructor(apeKey: string) {
    this.apeKey = apeKey
  }

  public async makeRequest<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `ApeKey ${this.apeKey}`,
      },
      method: 'GET',
    })

    if (response.status === 471)
      throw new Error(errors.INACTIVE_API_KEY)

    if (response.status === 479)
      throw new Error(errors.RATE_LIMITED)

    if (response.status === 472)
      throw new Error(errors.MALFORMED_API_KEY)

    const { data } = await response.json()

    return data
  }
}

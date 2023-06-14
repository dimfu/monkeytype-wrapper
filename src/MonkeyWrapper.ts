import EventEmitter from 'events'
import { users } from './users'
import { errors } from './errors'

const BASE_URL = 'https://api.monkeytype.com'

export default class MonkeyWrapper extends EventEmitter {
  private apeKey: string
  private _users

  constructor(apeKey: string) {
    super()
    this.apeKey = apeKey
    if (!apeKey)
      throw new Error('You have to specify Monkeytype ape key')

    this._users = users.bind(this)()
  }

  public async request(endpoint: string) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `ApeKey ${this.apeKey}`,
      },
      method: 'GET',
    })

    if (response.status === 471)
      throw new Error(errors.INACTIVE_API_KEY)

    if (response.status === 472)
      throw new Error(errors.MALFORMED_API_KEY)

    const data = await response.json()

    return data
  }

  get users() {
    return this._users
  }
}

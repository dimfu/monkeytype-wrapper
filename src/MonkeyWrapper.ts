import { users } from './api'
import { leaderboards } from './api/leaderboards'
import Requests from './private/Requests'

export default class MonkeyWrapper {
  public requests: Requests
  private _users
  private _leaderboards

  constructor(public apeKey: string) {
    if (!this.apeKey)
      throw new Error('You have to specify Monkeytype ape key')

    this.requests = new Requests(this.apeKey)
    this._users = users(this.requests)
    this._leaderboards = leaderboards(this.requests)
  }

  get users() {
    return this._users
  }

  get leaderboards() {
    return this._leaderboards
  }
}

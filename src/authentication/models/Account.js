/**
 * @flow
 */

import { computed, observable } from 'mobx'

import { persist } from 'mobx-persist'

class Account {
  @persist @observable
  username = 'username';
  @persist @observable
  password = 'password';
}

export default Account

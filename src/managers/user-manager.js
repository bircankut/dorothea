import MMKVStorage from 'react-native-mmkv-storage';

const USER = 'user';

export class UserManager {
  constructor() {
    this.storage = new MMKVStorage.Loader().withInstanceID(USER).initialize();
  }
}

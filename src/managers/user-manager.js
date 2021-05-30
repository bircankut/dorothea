import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_MAP = 'user-map';

export class UserManager {
  async getUser() {
    try {
      const jsonValue = await AsyncStorage.getItem(USER_MAP);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }

  async setUser(user) {
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem(USER_MAP, jsonValue);
    } catch (e) {
      // saving error
    }
  }

  async clear() {
    try {
      await AsyncStorage.removeItem(USER_MAP);
    } catch (e) {
      // remove error
    }
  }
}

import AsyncStorage from '@react-native-async-storage/async-storage';

const FINISHED_MAP = 'finished-map';

export class DrawingsManager {
  async getFinished() {
    try {
      const jsonValue = await AsyncStorage.getItem(FINISHED_MAP);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }

  async setFinished(drawings) {
    try {
      const jsonValue = JSON.stringify(drawings);
      await AsyncStorage.setItem(FINISHED_MAP, jsonValue);
    } catch (e) {
      // saving error
    }
  }

  async clear() {
    try {
      await AsyncStorage.removeItem(FINISHED_MAP);
    } catch (e) {
      // remove error
    }
  }
}

import AsyncStorage from '@react-native-async-storage/async-storage';

const SUBJECT_MAP = 'subject-map';

export class SubjectManager {
  async getSubject() {
    try {
      const jsonValue = await AsyncStorage.getItem(SUBJECT_MAP);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }

  async setSubject(subject) {
    try {
      const jsonValue = JSON.stringify(subject);
      await AsyncStorage.setItem(SUBJECT_MAP, jsonValue);
    } catch (e) {
      // saving error
    }
  }

  async clear() {
    try {
      await AsyncStorage.removeItem(SUBJECT_MAP);
    } catch (e) {
      // remove error
    }
  }
}

import MMKVStorage from 'react-native-mmkv-storage';

const DRAWINGS = 'drawings';
const FINISHED_MAP = 'finished-map';

export class DrawingsManager {
  constructor() {
    this.storage = new MMKVStorage.Loader()
      .withInstanceID(DRAWINGS)
      .initialize();
  }

  getFinished() {
    return this.storage.getMap(FINISHED_MAP);
  }

  async setFinished(drawings) {
    return await this.storage.setMapAsync(FINISHED_MAP, drawings);
  }

  clear() {
    this.storage.removeItem(FINISHED_MAP);
  }
}

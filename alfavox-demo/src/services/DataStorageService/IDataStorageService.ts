import { StorageKeys } from "./StorageKeys";

export default interface IDataStorageService {
  getItem: (key: StorageKeys) => string | null;
  setItem: (key: StorageKeys, value: string) => void;
  initStorageItems: () => void;
}

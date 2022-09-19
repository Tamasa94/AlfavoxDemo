import IDataStorageService from "./IDataStorageService";
import { StorageKeys } from "./StorageKeys";

const DataStorageService: IDataStorageService = {
  getItem: (key: StorageKeys) => {
    return sessionStorage.getItem(key);
  },
  setItem: (key: StorageKeys, value: string) => {
    return sessionStorage.setItem(key, value);
  },
  initStorageItems: () => {
    DataStorageService.setItem("item_count", "0");
    DataStorageService.setItem("search_text", "");
    DataStorageService.setItem("offset", "0");
  },
};

export default DataStorageService;

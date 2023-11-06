import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  get(key: string): any|null {
    const item = localStorage.getItem(key);
    if (item && key === 'bearerToken') {
      try {
        const parsedItem = JSON.parse(item);
        if (parsedItem.jwtToken) {
          return parsedItem.jwtToken;
        }
      } catch (error) {
        console.error("Ошибка при парсинге JSON:", error);
      }
    }
    if(item){
      try {
        const parsedItem = JSON.parse(item);
          return parsedItem;
      } catch (error) {
        console.error("Ошибка при парсинге JSON:", error);
      }
    }
    return null;
  }

  set(key: string, value: any): void {
    console.log( JSON.stringify(value))
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
  clear(): void {
    localStorage.clear();
  }

}

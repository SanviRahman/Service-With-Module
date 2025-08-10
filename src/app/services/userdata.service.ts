import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  getUserObj() {
    return [
      { name: "Shanto", age: 25, id: 201 },
      { name: "Sanvi", age: 27, id: 202 },
      { name: "Shanta", age: 21, id: 203 },
      { name: "Oboni", age: 25, id: 202 },
    ]
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }

  
}
export interface Admin{
  username: string;
  password: string;
}
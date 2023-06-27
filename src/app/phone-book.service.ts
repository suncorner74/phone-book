import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contact } from './interface/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(`https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts`);
  }
}

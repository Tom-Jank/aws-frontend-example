import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MessageModel} from '../model/MessageModel';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly BASE_URL = 'http://localhost:8080/api'
  constructor(private http: HttpClient) { }

  getWelcomeMessage(): Observable<MessageModel> {
    return this.http.get<MessageModel>(`${this.BASE_URL}/hello`);
  }

  getGoodbyeMessage(): Observable<MessageModel> {
    return this.http.get<MessageModel>(`${this.BASE_URL}/goodbye`);
  }
}

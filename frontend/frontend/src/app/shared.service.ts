import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  readonly APIUrl = 'http://localhost:8000/api/voicetest';

  sendPostRequest(data:any) {
    const headers = { 'content-type': 'application/json' };
    const response = this.http.post(this.APIUrl,JSON.stringify(data),{'headers':headers});
    return response;
  }
}

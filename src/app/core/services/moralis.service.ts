import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoralisService {
  constructor(
    private http: HttpClient
  ) { }

  resolveDomain(domain:string) : Observable<any> {
    return this.http.get(`${environment.baseApi}resolveUd/${domain}`)
   }
}

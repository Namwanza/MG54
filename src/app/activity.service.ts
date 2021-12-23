import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Activity } from './activity';
import { Observable , throwError, catchError, tap, retry } from 'rxjs';
// , throwError, catchError, tap, retry ^^
import { map } from "rxjs/operators";

@Injectable()
export class ActivityService {
  private _activityUrl = '../assets/activity.json';

  constructor(private _http: HttpClient) {

  }

  getActivity(): Observable<Activity[]> {
    
    return this._http.get(this._activityUrl).pipe(map((response : any) => response.json()));
    //return this._http.get(this._activityUrl).pipe(map(response => <Activity[]>response.json()));
    
    // return this._http.get(this._activityUrl).map(response => <Activity[]>response.json());
  }
  
}

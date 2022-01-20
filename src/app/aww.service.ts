import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwwService {

   url: string = "https://www.reddit.com/r/aww/.json";

  constructor(private http: HttpClient) { }

  getThread(): Observable<any>{return this.http.get(this.url);}
}

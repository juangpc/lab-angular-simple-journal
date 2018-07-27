import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';

@Injectable()
export class ApiConnectService {

  constructor(private http: Http) { }

  getJournals() {
    return this.http.get(`${environment.BASEURL}/api/journal-entries`)
      .map((res) => res.json());
  }

  getJournalEntry(id: string) {
    return this.http.get(`${environment.BASEURL}/api/journal-entries/${id}`)
      .map((res) => res.json());
  }

  addJournalEntry(form: object) {
    return this.http.post(`${environment.BASEURL}/api/journal-entries`, form)
     .map((res) => res.json());
  }

}

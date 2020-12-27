import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Archive } from './archive';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private readonly apiUrl = 'http://localhost:3000/api/archives/29-12-2019';

  constructor(private http: HttpClient) {}

  private log(message: string) {
    return console.log(`(archive-service): ${message}`);
  }

  /**
   * 
   * @param date Date des archives concernées
   */
  getArchives(date: Date): Observable<any> { 
    this.log(`--getArchives ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} --`);

    // Appel à l'API
    return this.http.get(this.apiUrl, { responseType: 'json' });  


  }
}

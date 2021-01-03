import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class ArchiveManagerService {

  constructor(private http: HttpClient) {}

  /**
   * Retourne les archives d'une date précise
   * @param date Date des archives concernées
   */
  getArchives(date: Date): Observable<any> { 
    return this.http.get(`${API_URL}/api/archives?year=${date.getFullYear()}&month=${(date.getMonth() + 1 )}&day=${date.getDate()}`, { responseType: 'json' });  
  }

  /**
   * Retourne toutes les archives
   */
  getAllArchives(): Observable<any> {
    return this.http.get(`${API_URL}/api/archives`, { responseType: 'json' });
  }
}

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

  /**
   * Récupération des archives d'une année 
   * @param year Année concernée par les archives
   */
  getYearArchives(year: number): Observable<any> {
    return this.http.get(`${API_URL}/api/archives?year=${year}`, { responseType: 'json' });
  }

  /**
   * Récupération des archives pour une année et un mois.
   * @param year Année concernée 
   * @param month Mois concerné
   */
  getMonthArchives(year: string, month: string): Observable<any> {
    return this.http.get(`${API_URL}/api/archives?year=${year}&month=${month}`, { responseType: 'json' });
  }

  /**
   * Récupérer les archives pour une journée
   * @param year Année concernée
   * @param month Mois concerné
   * @param day Jour concerné
   */
  getDayArchives(year: string, month: string, day: string): Observable<any> {
    return this.http.get(`${API_URL}/api/archives?year=${year}&month=${month}&day=${day}`, { responseType: 'json' });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
/**
 * Service de gestion des arborescences.
 * Permet de tester l'existance d'une arborescence dans le projet
 */
export class FoldersService {

  constructor(private httpClient: HttpClient) { }

  log(mes: string) {
    console.log(`(folder.service) ${mes}`);
  }

  pathExists(path: string): Observable<boolean> {
    console.log(`pathExists : ${path}`);

    return this.httpClient
    .get(path, { observe: 'response', responseType: 'blob' })
    .pipe(
      map(response => {
        return true;
      }),
      catchError(error => {
        return of(false);
      })
    );
  }

}

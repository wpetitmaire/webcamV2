import { Injectable } from '@angular/core';
import { FoldersService } from '../folders/folders.service';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor(private folderService: FoldersService) {}

  private emplacementArchives: string = "/TEST/2020/02/12";

  private log(message: string) {
    return console.log(`(archive-service): ${message}`);
  }

  /**
   * 
   * @param date Date des archives concernées
   */
  getArchives(date: Date){
    this.log(`--getArchives ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} --`);

    this.folderService.pathExists('').subscribe((value) => { console.log(value) })
  }
}

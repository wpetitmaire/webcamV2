import { Component, OnInit } from '@angular/core';
import { Archive } from './archive-manager';
import { ArchiveManagerService } from './archive-manager.service';

@Component({
  selector: 'app-archive-manager',
  templateUrl: './archive-manager.component.html',
  styleUrls: ['./archive-manager.component.scss']
})
export class ArchiveManagerComponent implements OnInit {

  listeDesElements!: Archive.fileDescription[];

  constructor(private archivesService: ArchiveManagerService) { 
    
    // Recherche de toutes les archives
    this.archivesService.getAllArchives().subscribe(result => this.listeDesElements = result.data);
  }

  ngOnInit(): void {
    this.archivesService.getAllArchives().subscribe(result => this.listeDesElements = result.data);
  }

}

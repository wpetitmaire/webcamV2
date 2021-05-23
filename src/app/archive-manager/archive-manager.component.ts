import { Component, Input, OnInit } from '@angular/core';
import { Archive } from './archive-manager';
import { ArchiveManagerService } from './archive-manager.service';

@Component({
  selector: 'app-archive-manager',
  templateUrl: './archive-manager.component.html',
  styleUrls: ['./archive-manager.component.scss']
})
export class ArchiveManagerComponent implements OnInit {

  listeDesElements!: Archive.fileDescription[];
  @Input() showSpinner!: boolean;
  messageSpinner = "Chargement des archives";

  constructor(private archivesService: ArchiveManagerService) {}

  ngOnInit(): void {

    console.log('--> affichage spinner')

    // Affichage du spinner avant de charger les éléments 
    this.showSpinner = true;
    
    // Recherche de toutes les archives
    this.archivesService.getAllArchives().subscribe(result => {
      this.listeDesElements = result.data
      this.showSpinner = false;
      console.log("--> cacher spinner")
    });
  }
}

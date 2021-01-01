import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

import { ArchiveService } from './archive-manager.service';
import { Archive } from './archive-manager';



// import {MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-archive',
  templateUrl: './archive-manager.component.html',
  styleUrls: ['./archive-manager.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS} ,
  ],
})
export class ArchiveComponent implements OnDestroy {

  dateRecherche!: Date;
  listeDesElements!: Archive.fileDescription[];

  constructor( public dialog: MatDialog, private archivesService: ArchiveService) {

    // Recherche de toutes les archives
    this.archivesService.getAllArchives().subscribe(result => this.listeDesElements = result.data);
  }

  ngOnDestroy(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '285px',
      data: { date: this.dateRecherche }
    });

    dialogRef.afterClosed().subscribe(result => {

      if(!result)
        return false;

      this.dateRecherche = result;
      this.archivesService.getArchives(result).subscribe(result => {this.listeDesElements = result.data;});
    });
  }
}

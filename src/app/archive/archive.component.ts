import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

import { ArchiveService } from './archive.service';
import { Archive } from './archive';



// import {MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
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

  mobileQuery: MediaQueryList;
  dateRecherche!: Date;
  listeDesElements!: Archive.fileDescription[];

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog, private archivesService: ArchiveService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '285px',
      data: { date: this.dateRecherche }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('FENÊTRE FERMÉE => ' + result);
      this.dateRecherche = result;
      this.archivesService.getArchives(result).subscribe(result => {
        console.log('--> RETOUR API');
        console.log(result);

        this.listeDesElements = result.data;
      });
    });
  }

}

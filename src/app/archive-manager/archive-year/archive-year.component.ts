import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Archive } from '../archive-manager';
import { ArchiveManagerService } from '../archive-manager.service';

@Component({
  selector: 'app-archive-year',
  templateUrl: './archive-year.component.html',
  styleUrls: ['./archive-year.component.scss']
})
export class ArchiveYearComponent implements OnInit {

  private year: number;
  listeDesElements!: Archive.fileDescription[];
  @Input() showSpinner = true;
  messageSpinner: String;

  constructor(private route: ActivatedRoute, private router: Router, private archivesService: ArchiveManagerService) {

    const argument = (route.snapshot.paramMap.get('year') == '' || route.snapshot.paramMap.get('year') == null) ? -1 : parseInt(<string>route.snapshot.paramMap.get('year'));

    // Si l'argument envoyé n'est pas une année, on redirige l'application vers le parent (les archives globales)
    if(argument == -1 || isNaN(argument) || `${argument}`.length !== 4) {
      router.navigate(['../'], { relativeTo: route });
    }

    this.year = argument;
    this.messageSpinner = `Chargement des archives de l'année ${argument}`;
    this.loadArchives();
  }

  ngOnInit(): void {
  }

  loadArchives(): void {
    this.archivesService.getYearArchives(this.year).subscribe(result => {
      this.listeDesElements = result.data
      this.showSpinner = false;
    });
  }
}
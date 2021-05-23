import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Archive } from '../archive-manager';
import { ArchiveManagerService } from '../archive-manager.service';

@Component({
  selector: 'app-archive-day',
  templateUrl: './archive-day.component.html',
  styleUrls: ['./archive-day.component.scss']
})
export class ArchiveDayComponent implements OnInit {

  private year: number;
  private month: number;
  private day: number;
  private brutMonth: string | null;
  private brutDay: string | null;
  listeDesElements!: Archive.fileDescription[];
  @Input() showSpinner = true;
  messageSpinner: string;

  constructor(private route: ActivatedRoute, private router: Router, private archivesService: ArchiveManagerService) { 
    // Récupération de l'année dans la route
    const argumentAnnee = (route.snapshot.paramMap.get('year') == '' || route.snapshot.paramMap.get('year') == null) ? -1 : parseInt(<string>route.snapshot.paramMap.get('year'));

    // Si l'argument envoyé n'est pas une année, on redirige l'application vers le parent (les archives globales)
    if(argumentAnnee == -1 || isNaN(argumentAnnee) || `${argumentAnnee}`.length !== 4) {
      router.navigate(['../'], { relativeTo: route });
    }

    this.year = argumentAnnee;

    // Récupération du mois dans la route
    const argumentMois = (route.snapshot.paramMap.get('month') == '' || route.snapshot.paramMap.get('month') == null) ? -1 : parseInt(<string>route.snapshot.paramMap.get('month'));

    // Si l'argument envoyé n'est pas une année, on redirige l'application vers le parent (les archives globales)
    if(argumentMois == -1 || isNaN(argumentMois) || `${argumentMois}`.length > 2) {
      router.navigate(['../'], { relativeTo: route });
    }

    this.month = argumentMois;
    this.brutMonth = route.snapshot.paramMap.get('month');

    // Récupération du jour dans la route
    const argumentJour = (route.snapshot.paramMap.get('day') == '' || route.snapshot.paramMap.get('day') == null) ? -1 : parseInt(<string>route.snapshot.paramMap.get('day'));

    // Si l'argument envoyé n'est pas une année, on redirige l'application vers le parent (les archives globales)
    if(argumentJour == -1 || isNaN(argumentJour) || `${argumentJour}`.length > 2) {
      router.navigate(['../'], { relativeTo: route });
    }

    this.day = argumentJour;
    this.brutDay = route.snapshot.paramMap.get('day');
    this.messageSpinner = `Chargement des archives de ${argumentJour}/${argumentMois}/${argumentAnnee}`;

    this.loadArchives();
  }

  ngOnInit(): void {
  }

  loadArchives(): void {
    this.archivesService.getDayArchives(`${this.year}`, <string>this.brutMonth, <string>this.brutDay).subscribe(result => {
      this.listeDesElements = result.data;
      this.showSpinner = false;
    });
  }

}

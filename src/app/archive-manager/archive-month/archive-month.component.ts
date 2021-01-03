import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Archive } from '../archive-manager';
import { ArchiveManagerService } from '../archive-manager.service';

@Component({
  selector: 'app-archive-month',
  templateUrl: './archive-month.component.html',
  styleUrls: ['./archive-month.component.scss']
})
export class ArchiveMonthComponent implements OnInit {

  private year: number;
  private month: number;
  private brutMonth: string | null;
  listeDesElements!: Archive.fileDescription[];

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

    this.loadArchives();
  }

  ngOnInit(): void {
  }

  loadArchives(): void {
    this.archivesService.getMonthArchives(`${this.year}`, <string>this.brutMonth).subscribe(result => {
      this.listeDesElements = result.data
      console.log(this.listeDesElements)
    });
  }

}

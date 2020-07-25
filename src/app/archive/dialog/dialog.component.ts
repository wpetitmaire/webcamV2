import { DialogData } from './dialog.data';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  dateRecherche: string;

  constructor(dialogueRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) data: DialogData) { }

  ngOnInit(): void {
  }

}

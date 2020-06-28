import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-image-with-loader',
  templateUrl: './load-image-with-loader.component.html',
  styleUrls: ['./load-image-with-loader.component.scss']
})
export class LoadImageWithLoaderComponent implements OnInit {


  @Input() image:string;
  @Input() height:number;
  @Input() width:number;

  isLoading: Boolean;

  constructor() {
    console.log('-->this.isLoading = true');
    this.isLoading = true;
  }

  ngOnInit(): void {
  }

  hideLoading(): void {
    console.log('-->this.isLoading = false');
    this.isLoading = false;
  }
}
